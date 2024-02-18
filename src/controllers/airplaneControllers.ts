import { AirplaneModel } from '../models/airplane'
import { type Request, type Response } from 'express'
import { v4 as uuidv4 } from 'uuid'
require('dotenv').config()

const addAirplane = async (req: Request, res: Response): Promise<void> => {
  const name: string = req.body.name
  const code: string = String(req.body.code).toUpperCase()
  const speed: number = req.body.speed

  try {
    const uniqueId = uuidv4()

    const registeredAirplane = await AirplaneModel.query().insert({
      id: uniqueId,
      name,
      code,
      speed
    }).returning('*')

    res.status(201).json({
      message: 'Register Success, New Airplane Created',
      userInfromation: registeredAirplane
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const getAllAirplanes = async (req: Request, res: Response): Promise<void> => {
  try {
    const allAirplanes = await AirplaneModel.query()

    res.status(201).json({
      message: 'Succsesfully get all Airplanes data',
      data: allAirplanes
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const getAirplaneById = async (req: Request, res: Response): Promise<void> => {
  const airplaneId = req.params.id

  try {
    const filterById = await AirplaneModel.query().findById(airplaneId)
    if (filterById === null || filterById === undefined) {
      res.status(404).json({
        error: 'INVALID_ID',
        message: 'No airplane data found by that id'
      })
      return
    }

    res.status(201).json({
      message: 'Success Get airplane Data by ID',
      data: filterById
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const updateAirplane = async (req: Request & { user?: any }, res: Response): Promise<void> => {
  interface RequestBodyType {
    code: string
    name: string
    speed: number
  }
  const airplaneIdToUpdate = req.params.id
  try {
    const userToUpdate = await AirplaneModel.query().findById(airplaneIdToUpdate)
    const { code, speed, name }: RequestBodyType = req.body

    if (userToUpdate === null || userToUpdate === undefined) {
      res.status(404).json({ error: 'INVALID_ID', message: 'No airplanes data found by that id' })
      return
    }

    await AirplaneModel.query().patchAndFetchById(airplaneIdToUpdate, { name, code, speed })

    res.status(200).json({
      message: 'Success Update Airplane Data'
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const deleteAirplane = async (req: Request & { user?: any }, res: Response): Promise<void> => {
  try {
    const airplaneId = req.params.id
    const airplaneToDelete = await AirplaneModel.query().findById(airplaneId)

    if (!airplaneToDelete) {
      res.status(404).json({
        error: 'INVALID_ID',
        message: 'No airplane data found by that id'
      })
      return
    }

    await AirplaneModel.query().deleteById(airplaneId)

    res.status(200).json({
      message: 'Airplane deleted successfully'
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

export default {
  addAirplane,
  getAllAirplanes,
  getAirplaneById,
  updateAirplane,
  deleteAirplane
}
