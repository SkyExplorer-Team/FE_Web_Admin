import jwt from 'jsonwebtoken'

interface UserPayload {
  id: string
  email: string
  role_id: string
  firstName: string
  lastName: string
}

function createToken (payLoad: UserPayload): string {
  const token = jwt.sign(payLoad, process.env.SIGNATURE_KEY ?? 'Rahasia')
  return token
}

export default createToken
