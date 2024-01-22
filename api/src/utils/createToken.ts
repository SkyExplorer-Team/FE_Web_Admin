import jwt from 'jsonwebtoken'

interface UserPayload {
  id: string
  email: string
  id_role: string
  name: string
  expirationTime: string
  tokenType: string
}

function createToken (payLoad: UserPayload): string {
  const token = jwt.sign(payLoad, process.env.SIGNATURE_KEY ?? 'Rahasia')
  return token
}

export default createToken
