import { UserModel } from '../models/user'
import jwt from 'jsonwebtoken'

interface VerifyResult {
  user?: string
  error?: string
  status: number
  success?: boolean
}

interface DecodedData {
  email: string
  tokenType: string
  expirationTime: string
}

const checkTokenForgetPasswor = async (token: string): Promise<VerifyResult> => {
  try {
    const decoded: any = jwt.verify(token, 'Rahasia')
    const currentTimestamp = Date.now()
    const { email, tokenType, expirationTime }: DecodedData = decoded
    const user = await UserModel.query().findOne({
      email
    })

    if (tokenType !== 'RESET_PASSWORD') {
      return {
        error: 'INVALID_TOKEN',
        status: 400
      }
    }

    if (currentTimestamp > new Date(expirationTime).getTime()) {
      return {
        error: 'TOKEN_EXPIRED',
        status: 400
      }
    }

    if (!user) {
      return {
        error: 'Email Not Found on Database',
        status: 404
      }
    }

    return {
      user: user.id,
      status: 200,
      success: true
    }
  } catch (err) {
    return {
      error: 'ERROR_DURING_VERIFY_TOKEN',
      status: 400
    }
  }
}

export default checkTokenForgetPasswor
