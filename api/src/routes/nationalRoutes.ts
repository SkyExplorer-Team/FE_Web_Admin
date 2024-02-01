import { Router } from 'express'
import nationalControllers from '../controllers/nationalControllers'
import isTokenAutorized from '../middlewares/authorize'

const nationalRouter: Router = Router()

nationalRouter.post('/api/v1/nationals', isTokenAutorized, nationalControllers.addNational)
nationalRouter.get('/api/v1/nationals', isTokenAutorized, nationalControllers.getAllNationals)
nationalRouter.get('/api/v1/nationals/:id', isTokenAutorized, nationalControllers.getNationalById)
nationalRouter.put('/api/v1/nationals/:id', isTokenAutorized, nationalControllers.updateNational)
nationalRouter.delete('/api/v1/nationals/:id', isTokenAutorized, nationalControllers.deleteNational)

export default nationalRouter
