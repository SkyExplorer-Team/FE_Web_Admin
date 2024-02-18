import { Router } from 'express'
import transactionControllers from '../controllers/transactionControllers'
import isTokenAutorized from '../middlewares/authorize'

const transactionRouter: Router = Router()

transactionRouter.get('/api/v1/transactions', isTokenAutorized, transactionControllers.getAllTransactions)
transactionRouter.put('/api/v1/transactions/confirm/:id', isTokenAutorized, transactionControllers.confirmTransaction)
transactionRouter.delete('/api/v1/transactions/:id', isTokenAutorized, transactionControllers.deleteTransaction)

export default transactionRouter
