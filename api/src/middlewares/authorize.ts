import { UserModel } from '../models/user'
import jwt, { type JwtPayload } from 'jsonwebtoken'
const express = require('express')
type Request = typeof express.Request
type Response = typeof express.Response
type NextFunction = typeof express.NextFunction

async function isTokenAutorized (req: Request & { user?: any }, res: Response, next: NextFunction): Promise<any> {
  try {
    const bearerToken = req.headers.authorization
    const token = bearerToken?.split('Bearer ')?.[1] ?? ''
    const tokenPayload = jwt.verify(token as string, process.env.SIGNATURE_KEY ?? 'Rahasia') as JwtPayload
    req.user = await UserModel.query().findById(tokenPayload.id as string)
    next()
  } catch (error) {
    res.status(400).json({
      error: 'INVALID_TOKEN',
      message: 'Token is not reconized. You are Unauthorized'
    })
  }
}
// async function isSuperAdmin (req: Request & { user?: any }, res: Response, next: NextFunction): Promise<any> {
//   try {
//     const bearerToken = req.headers.authorization
//     const token = bearerToken?.split('Bearer ')?.[1] ?? ''
//     const tokenPayload = jwt.verify(token as string, process.env.SIGNATURE_KEY ?? 'Rahasia') as JwtPayload
//     console.log(tokenPayload)

//     req.user = await new UserService().findById(tokenPayload.id as number)

//     const userRole = req.user.role
//     console.log(req.user)

//     if (userRole === 'superadmin') {
//       next()
//     } else {
//       res.status(403).json({
//         message: 'Forbidden. Only superadmins are allowed.'
//       })
//     }
//   } catch (error) {
//     res.status(401).json({
//       message: 'Unauthorized'
//     })
//   }
// }

// async function isAdminOrSuperAdmin (req: Request & { user?: any }, res: Response, next: NextFunction): Promise<any> {
//   try {
//     const bearerToken = req.headers.authorization
//     const token = bearerToken?.split('Bearer ')?.[1] ?? ''
//     const tokenPayload = jwt.verify(token as string, process.env.SIGNATURE_KEY ?? 'Rahasia') as JwtPayload

//     req.user = await new UserService().findById(tokenPayload.id as number)

//     const userRole = req.user.role

//     if (userRole === 'admin' || userRole === 'superadmin') {
//       next()
//     } else {
//       res.status(403).json({
//         message: 'Forbidden. Only Superadmin or Admin are allowed.'
//       })
//     }
//   } catch (error) {
//     res.status(401).json({
//       message: 'Unauthorized'
//     })
//   }
// }

export default isTokenAutorized
