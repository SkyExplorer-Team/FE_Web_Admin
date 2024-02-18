import { Router } from 'express'
import airplaneControllers from '../controllers/airplaneControllers'
import isTokenAutorized from '../middlewares/authorize'

const airplaneRouter: Router = Router()

airplaneRouter.post('/api/v1/airplanes', isTokenAutorized, airplaneControllers.addAirplane)
airplaneRouter.get('/api/v1/airplanes', isTokenAutorized, airplaneControllers.getAllAirplanes)
airplaneRouter.get('/api/v1/airplanes/:id', isTokenAutorized, airplaneControllers.getAirplaneById)
airplaneRouter.put('/api/v1/airplanes/:id', isTokenAutorized, airplaneControllers.updateAirplane)
airplaneRouter.delete('/api/v1/airplanes/:id', isTokenAutorized, airplaneControllers.deleteAirplane)

export default airplaneRouter
