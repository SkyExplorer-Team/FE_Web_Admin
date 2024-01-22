import { UserModel } from '../models/user'
import { type Request, type Response } from 'express'
import checkPassword from '../utils/checkPassword'
import createToken from '../utils/createToken'
import nodemailer from 'nodemailer'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'
import checkTokenForgetPasswor from '../utils/checkTokenResetPassword'
const domainFrontend = 'http://localhost:5173'

const login = async (req: Request, res: Response): Promise<void> => {
  const email: string = String(req.body.email).toLowerCase()
  const currentTime = new Date()
  const expirationTime = new Date(currentTime.getTime() + 12 * 60 * 60 * 1000)
  const password: string = req.body.password

  const userLogin = await UserModel.query().findOne({
    email
  })

  if (!userLogin) {
    res.status(404).json({
      error: 'INVALID_EMAIL',
      message: 'email is not found on the database'
    })
    return
  }

  const isPasswordCorrect = await checkPassword(
    userLogin.password,
    password
  )

  if (!isPasswordCorrect) {
    res.status(401).json({
      error: 'INVALID_PASSWORD',
      message: 'password inserted is not correct with the record on database'
    })
    return
  }

  const token = createToken({
    id: userLogin.id,
    email: userLogin.email,
    id_role: userLogin.id_role,
    name: userLogin.name,
    expirationTime: expirationTime.toISOString(),
    tokenType: 'LOGIN'
  })

  res.status(200).json({
    message: 'user verified, login successful',
    token
  })
}

const forgetPasswordRequest = async (req: Request, res: Response): Promise<void> => {
  const email: string = String(req.body.email).toLowerCase()
  const currentTime = new Date()
  const expirationTime = new Date(currentTime.getTime() + 30 * 60 * 1000)
  const transport = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '6ee48a0582d0a7',
      pass: '99f0c367d8378c'
    }
  })

  const userLogin = await UserModel.query().findOne({
    email
  })

  if (!userLogin) {
    res.status(404).json({
      error: 'INVALID_EMAIL',
      message: 'email is not found on the database'
    })
    return
  }

  const token = createToken({
    id: userLogin.id,
    email: userLogin.email,
    id_role: userLogin.id_role,
    name: userLogin.name,
    expirationTime: expirationTime.toISOString(),
    tokenType: 'RESET_PASSWORD'
  })

  const mailOptions = {
    from: '6ee48a0582d0a7',
    to: userLogin.email,
    subject: 'Sky Exploler : Reset Password Admin',
    text: `Klik Link Berikut Untuk Melakukan Reset Password : ${domainFrontend}/create-new-password/${token}`
  }

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(404).json({
        error: 'ERROR_WHEN_SENDING_EMAIL',
        message: error
      })
    } else {
      res.status(200).json({
        message: 'Email sent: ' + info.response,
        token
      })
    }
  })
}

const forgetPasswordNewPassword = async (req: Request, res: Response): Promise<void> => {
  const password: string = String(req.body.password)
  const confirmPassowrd: string = String(req.body.confirmPassowrd)
  const token = req.params.token

  const result = await checkTokenForgetPasswor(token)
  if (result.success) {
    if (password !== confirmPassowrd) {
      res.status(400).json({
        error: 'INVALID_PASSWORD',
        message: 'Password and Confirm Password does not match'
      })
      return
    }

    const { user } = result
    try {
      if (user) {
        const hashedPassword = await bcrypt.hash(password, 10)
        await UserModel.query().patchAndFetchById(user, { password: hashedPassword })

        res.status(200).json({ message: 'Reset Password Succsefully' })
      } else {
        res.status(404).json({ success: false, message: 'User not found' })
      }
    } catch (error) {
      console.error('Error updating password:', error)
      res.status(500).json({ success: false, message: 'Internal Server Error' })
    }
  } else {
    res.status(result.status).json({ success: false, error: result.error })
  }
}

const authUserInfo = async (req: Request & { user?: any }, res: Response): Promise<void> => {
  res.status(200).json(req.user)
}

const register = async (req: Request, res: Response): Promise<void> => {
  const name: string = req.body.name
  const email: string = String(req.body.email).toLowerCase()
  const password: string = req.body.password
  const id_role: string = '4b1f94d2-58cf-4a5e-b9f2-8af7c0d97f94'

  const existingEmail = await UserModel.query().findOne({ email })

  if (existingEmail) {
    res.status(400).json({
      error: 'INVALID_EMAIL',
      message: 'Email is already exists. Please use a different email.'
    })
    return
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const uniqueId = uuidv4()

    const registeredUser = await UserModel.query().insert({
      id: uniqueId,
      email,
      password: hashedPassword,
      id_role,
      name
    }).returning('*')

    res.status(201).json({
      message: 'Register Success, New Account Created',
      userInfromation: registeredUser
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  const allUsers = await UserModel.query()

  res.status(201).json({
    message: 'Succsesfully get all Admin data',
    data: allUsers
  })
}

const getUserById = async (req: Request, res: Response): Promise<void> => {
  const userId = req.params.id
  const filterById = await UserModel.query().findById(userId)

  try {
    if (filterById === null || filterById === undefined) {
      res.status(404).json({
        error: 'INVALID_ID',
        message: 'No user admin data found by that id'
      })
      return
    }

    res.status(201).json({
      message: 'Success Get user Data by ID',
      data: filterById
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const updateUser = async (req: Request & { user?: any }, res: Response): Promise<void> => {
  interface RequestBodyType {
    email: string
    password: string
    name: string
  }
  const userIdToUpdate = req.params.id
  try {
    const userToUpdate = await UserModel.query().findById(userIdToUpdate)
    const { email, password, name }: RequestBodyType = req.body

    if (userToUpdate === null || userToUpdate === undefined) {
      res.status(404).json({ error: 'INVALID_ID', message: 'No user data found by that id' })
      return
    }

    if (email && email !== userToUpdate.email) {
      const existingEmail = await UserModel.query().findOne({ email })
      if (existingEmail) {
        res.status(400).json({
          error: 'INVALID_EMAIL',
          message: 'Email already used. Please use a different email.'
        })
        return
      }
      await UserModel.query().patchAndFetchById(userIdToUpdate, { email })
    }

    if (password) {
      const isPasswordCorrect = await checkPassword(
        userToUpdate.password,
        password
      )

      if (isPasswordCorrect) {
        res.status(401).json({
          error: 'INVALID_PASSWORD',
          message: 'The new password should diffrent from old password'
        })
        return
      }

      const hashedPassword = await bcrypt.hash(password, 10)
      await UserModel.query().patchAndFetchById(userIdToUpdate, { password: hashedPassword })
    }

    if (name && name !== userToUpdate.name) {
      if (name.length < 3 || name.length > 25) {
        res.status(400).json({
          error: 'INVALID_NEW_NAME',
          message: 'The name must consist of between 3 to 25 characters'
        })
        return
      }
      await UserModel.query().patchAndFetchById(userIdToUpdate, { name })
    }

    res.status(200).json({
      message: 'Success Update User Data'
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const deleteUser = async (req: Request & { user?: any }, res: Response): Promise<void> => {
  try {
    const userId = req.params.id
    const userToDelete = await UserModel.query().findById(userId)

    if (!userToDelete) {
      res.status(404).json({
        error: 'INVALID_ID',
        message: 'No user data found by that id'
      })
      return
    }

    await UserModel.query().deleteById(userId)

    res.status(200).json({
      message: 'User deleted successfully'
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

export default {
  login,
  register,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  authUserInfo,
  forgetPasswordRequest,
  forgetPasswordNewPassword
}
