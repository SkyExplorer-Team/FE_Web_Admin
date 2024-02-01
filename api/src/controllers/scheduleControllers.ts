import { ScheduleModel } from '../models/schedule'
import { type Request, type Response } from 'express'
import { v4 as uuidv4 } from 'uuid'

const addSchedule = async (req: Request, res: Response): Promise<void> => {
  const airplane_id: string = req.body.airplane_id
  const from: string = req.body.from_id
  const to: string = req.body.to_id
  const time_departure: string = req.body.time_departure
  const time_arrive: string = req.body.time_arrive
  const price: number = req.body.price

  try {
    if (from === to) {
      res.status(404).json({ error: 'INVALID_ARRIVAL', message: 'Departure and Arrival must be different' })
      return
    }
    const uniqueId = uuidv4()

    const registeredSchedule = await ScheduleModel.query().insert({
      id: uniqueId,
      airplane_id,
      from_id: from,
      to_id: to,
      time_departure,
      time_arrive,
      price
    }).returning('*')

    res.status(201).json({
      message: 'Register Success, New Schedule Created',
      userInfromation: registeredSchedule
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const getAllSchedules = async (req: Request, res: Response): Promise<void> => {
  try {
    const allSchedules = await ScheduleModel.query().withGraphFetched('[airplane, fromData, toData]')

    res.status(201).json({
      message: 'Succsesfully get all Schedules data',
      data: allSchedules
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const getScheduleById = async (req: Request, res: Response): Promise<void> => {
  const scheduleId = req.params.id

  try {
    const filterById = await ScheduleModel.query().findById(scheduleId)
    if (filterById === null || filterById === undefined) {
      res.status(404).json({
        error: 'INVALID_ID',
        message: 'No schedule data found by that id'
      })
      return
    }

    res.status(201).json({
      message: 'Success Get schedule Data by ID',
      data: filterById
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const updateSchedule = async (req: Request & { user?: any }, res: Response): Promise<void> => {
  interface RequestBodyType {
    airplane_id: string
    from_id: string
    to_id: string
    time_departure: string
    time_arrive: string
    price: number
  }
  const scheduleIdToUpdate = req.params.id
  try {
    const userToUpdate = await ScheduleModel.query().findById(scheduleIdToUpdate)
    const { airplane_id, from_id, to_id, time_departure, time_arrive, price }: RequestBodyType = req.body

    if (userToUpdate === null || userToUpdate === undefined) {
      res.status(404).json({ error: 'INVALID_ID', message: 'No schedules data found by that id' })
      return
    }

    if (from_id === to_id) {
      res.status(404).json({ error: 'INVALID_ARRIVAL', message: 'Departure and Arrival must be different' })
      return
    }

    await ScheduleModel.query().patchAndFetchById(scheduleIdToUpdate, { airplane_id, from_id, to_id, time_departure, time_arrive, price })

    res.status(200).json({
      message: 'Success Update Schedule Data'
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const deleteSchedule = async (req: Request & { user?: any }, res: Response): Promise<void> => {
  try {
    const scheduleId = req.params.id
    const scheduleToDelete = await ScheduleModel.query().findById(scheduleId)

    if (!scheduleToDelete) {
      res.status(404).json({
        error: 'INVALID_ID',
        message: 'No schedule data found by that id'
      })
      return
    }

    await ScheduleModel.query().deleteById(scheduleId)

    res.status(200).json({
      message: 'Schedule deleted successfully'
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

export default {
  addSchedule,
  getAllSchedules,
  getScheduleById,
  updateSchedule,
  deleteSchedule
}
