import { Router } from 'express'
import userControllers from '../controllers/usersControlers'
import isTokenAutorized from '../middlewares/authorize'

const userRouter: Router = Router()

userRouter.post('/api/v1/login', userControllers.login)
userRouter.post('/api/v1/forget-password', userControllers.forgetPasswordRequest)
userRouter.put('/api/v1/set-password/:token', userControllers.forgetPasswordNewPassword)
userRouter.get('/api/v1/auth', isTokenAutorized, userControllers.authUserInfo)
userRouter.post('/api/v1/users', isTokenAutorized, userControllers.register)
userRouter.get('/api/v1/users', isTokenAutorized, userControllers.getAllUsers)
userRouter.get('/api/v1/users/:id', isTokenAutorized, userControllers.getUserById)
userRouter.put('/api/v1/users/:id', isTokenAutorized, userControllers.updateUser)
userRouter.delete('/api/v1/users/:id', isTokenAutorized, userControllers.deleteUser)

export default userRouter
