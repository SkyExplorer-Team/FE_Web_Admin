import { Router } from 'express'
import scheduleControllers from '../controllers/scheduleControllers'
import isTokenAutorized from '../middlewares/authorize'

const scheduleRouter: Router = Router()

scheduleRouter.post('/api/v1/schedules', isTokenAutorized, scheduleControllers.addSchedule)
scheduleRouter.get('/api/v1/schedules', isTokenAutorized, scheduleControllers.getAllSchedules)
scheduleRouter.get('/api/v1/schedules/:id', isTokenAutorized, scheduleControllers.getScheduleById)
scheduleRouter.put('/api/v1/schedules/:id', isTokenAutorized, scheduleControllers.updateSchedule)
scheduleRouter.delete('/api/v1/schedules/:id', isTokenAutorized, scheduleControllers.deleteSchedule)

export default scheduleRouter
