import { Router } from 'express'
import airportsControllers from '../controllers/airportsControllers'
import isTokenAutorized from '../middlewares/authorize'

const airportRouter: Router = Router()

airportRouter.post('/api/v1/airports', isTokenAutorized, airportsControllers.addAirport)
airportRouter.get('/api/v1/airports', isTokenAutorized, airportsControllers.getAllAirports)
airportRouter.get('/api/v1/airports/:id', isTokenAutorized, airportsControllers.getAirportById)
airportRouter.put('/api/v1/airports/:id', isTokenAutorized, airportsControllers.updateAirport)
airportRouter.delete('/api/v1/airports/:id', isTokenAutorized, airportsControllers.deleteAirport)

export default airportRouter
