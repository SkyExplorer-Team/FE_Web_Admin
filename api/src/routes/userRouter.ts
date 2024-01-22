import { Router } from 'express'
import userControllers from '../controllers/usersControlers'
import isTokenAutorized from '../middlewares/authorize'

const userRouter: Router = Router()

userRouter.post('/api/v1/login', userControllers.login)
userRouter.get('/api/v1/auth', isTokenAutorized, userControllers.authUserInfo)

export default userRouter
