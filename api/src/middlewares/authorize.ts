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
    if (tokenPayload.tokenType !== 'LOGIN') {
      res.status(400).json({
        error: 'INVALID_TOKEN',
        message: 'Token is not reconized. You are Unauthorized'
      })
      return
    }
    req.user = await UserModel.query().findById(tokenPayload.id as string)
    next()
  } catch (error) {
    res.status(400).json({
      error: 'INVALID_TOKEN',
      message: 'Token is not reconized. You are Unauthorized'
    })
  }
}

export default isTokenAutorized
