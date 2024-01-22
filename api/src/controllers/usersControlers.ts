import { UserModel } from '../models/user'
import { type Request, type Response } from 'express'
import checkPassword from '../utils/checkPassword'
import createToken from '../utils/createToken'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'

const login = async (req: Request, res: Response): Promise<void> => {
  const email: string = String(req.body.email).toLowerCase()
  const password: string = req.body.password

  const userLogin = await UserModel.query().findOne({
    email,
    role_id: 'ROLE_ADMIN'
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
    role_id: userLogin.role_id,
    firstName: userLogin.firstName,
    lastName: userLogin.lastName
  })

  res.status(200).json({
    message: 'user verified, login successful',
    token
  })
}

// const register = async (req: Request, res: Response): Promise<void> => {
//   const username: string = String(req.body.username).toLowerCase()
//   const password: string = req.body.password
//   const email: string = req.body.email
//   const name: string = req.body.name
//   const role: Enumerator = req.body.role

//   const existingUser = await UserModel.query().findOne({ username })

//   if (existingUser) {
//     res.status(400).json({
//       error: 'INVALID_USERNAME',
//       message: 'Email already exists. Please use a different email.'
//     })
//     return
//   }

//   const hashedPassword = await bcrypt.hash(password, 10)
//   const uniqueId = uuidv4()

//   const registeredUser = await UserModel.query().insert({
//     id: uniqueId,
//     username,
//     email,
//     password: hashedPassword,
//     role,
//     name,
//     registered_time: new Date()
//   }).returning('*')

//   res.status(201).json({
//     message: 'Register Success, New Account Created',
//     userInfromation: registeredUser
//   })
// }

const authUserInfo = async (req: Request & { user?: any }, res: Response): Promise<void> => {
  res.status(200).json(req.user)
}

// const getUserById = async (req: Request, res: Response): Promise<void> => {
//   const userId = req.params.id
//   const filterById = await UserModel.query().findById(userId)

//   if (filterById === null || filterById === undefined) {
//     res.status(404).json({
//       error: 'INVALID_ID',
//       message: 'No user data found by that id'
//     })
//     return
//   }

//   res.status(201).json({
//     message: 'Success Get user Data by ID',
//     data: filterById
//   })
// }

// const getAllUsers = async (req: Request, res: Response): Promise<void> => {
//   const allUsers = await UserModel.query()

//   res.status(201).json({
//     message: 'Succsesfully get all users data',
//     data: allUsers
//   })
// }

// const updateUser = async (req: Request & { user?: any }, res: Response): Promise<void> => {
//   const userIdToUpdate = Number(req.params.id)
//   try {
//     const userToUpdate = await UserModel.query().findById(userIdToUpdate)
//     const { username, email, password, name, role: newRole } = req.body
//     const existingUser = await UserModel.query().findOne({ username })

//     if (existingUser) {
//       res.status(400).json({
//         error: 'INVALID_USERNAME',
//         message: 'Username already exists. Please use a different username.'
//       })
//       return
//     }

//     if (userToUpdate === null || userToUpdate === undefined) {
//       res.status(404).json({ error: 'INVALID_ID', message: 'No user data found by that id' })
//       return
//     }

//     await UserModel.query()
//       .findById(userIdToUpdate)
//       .patch({
//         username,
//         email,
//         password,
//         name,
//         role: newRole
//       })

//     res.status(200).json({
//       message: 'Success Update Car Data'
//     })
//   } catch (error: any) {
//     console.log(error.message)
//     res.status(500).json({ msg: error.message })
//   }
// }

// const deleteUser = async (req: Request & { user?: any }, res: Response): Promise<void> => {
//   try {
//     const userId = req.params.id
//     const userToDelete = await UserModel.query().findById(userId)

//     if (!userToDelete) {
//       res.status(404).json({
//         error: 'INVALID_ID',
//         message: 'No user data found by that id'
//       })
//       return
//     }

//     await UserModel.query().deleteById(userId)

//     res.status(200).json({
//       message: 'User deleted successfully'
//     })
//   } catch (error: any) {
//     console.log(error.message)
//     res.status(500).json({ message: error.message })
//   }
// }

export default {
  login,
  // register,
  authUserInfo
  // getAllUsers,
  // getUserById,
  // updateUser,
  // deleteUser
}
