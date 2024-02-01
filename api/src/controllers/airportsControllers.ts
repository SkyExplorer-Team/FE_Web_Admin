import { AirportModel } from '../models/airport'
import { type Request, type Response } from 'express'
import { v4 as uuidv4 } from 'uuid'
require('dotenv').config()

const addAirport = async (req: Request, res: Response): Promise<void> => {
  const name: string = req.body.name
  const abv: string = String(req.body.abv).toUpperCase()
  const city: string = req.body.city
  const national_id: string = req.body.national_id
  const lat: number = req.body.lat
  const lng: number = req.body.lng

  const existingAirport = await AirportModel.query().findOne({ name })

  if (existingAirport) {
    res.status(400).json({
      error: 'INVALID_AIRPORT_NAME',
      message: 'Airport is already exists. Please use a different name.'
    })
    return
  }

  try {
    const uniqueId = uuidv4()
    const registeredAirport = await AirportModel.query().insert({
      id: uniqueId,
      name,
      abv,
      city,
      national_id,
      lat,
      lng
    }).returning('*')

    res.status(201).json({
      message: 'Register Success, New Airport Created',
      userInfromation: registeredAirport
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const getAllAirports = async (req: Request, res: Response): Promise<void> => {
  try {
    const allAirports = await AirportModel.query().withGraphFetched('[national]')

    res.status(201).json({
      message: 'Succsesfully get all Airports data',
      data: allAirports
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const getAirportById = async (req: Request, res: Response): Promise<void> => {
  const airportId = req.params.id

  try {
    const filterById = await AirportModel.query().findById(airportId).withGraphFetched('[national]')
    if (filterById === null || filterById === undefined) {
      res.status(404).json({
        error: 'INVALID_ID',
        message: 'No airport data found by that id'
      })
      return
    }

    res.status(201).json({
      message: 'Success Get airport Data by ID',
      data: filterById
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const updateAirport = async (req: Request & { user?: any }, res: Response): Promise<void> => {
  interface RequestBodyType {
    email: string
    name: string
    abv: string
    city: string
    national_id: string
    lat: number
    lng: number
  }
  const airportIdToUpdate = req.params.id
  try {
    const userToUpdate = await AirportModel.query().findById(airportIdToUpdate)
    const { national_id, city, abv, name, lat, lng }: RequestBodyType = req.body

    if (userToUpdate === null || userToUpdate === undefined) {
      res.status(404).json({ error: 'INVALID_ID', message: 'No airports data found by that id' })
      return
    }

    if (name && name !== userToUpdate.name) {
      const exustingName = await AirportModel.query().findOne({ name })
      if (exustingName) {
        res.status(400).json({
          error: 'INVALID_NAME',
          message: 'Name already used. Please use a different name.'
        })
        return
      }
    }
    await AirportModel.query().patchAndFetchById(airportIdToUpdate, { name, national_id, city, lat, lng, abv })
    res.status(200).json({
      message: 'Success Update Airport Data'
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const deleteAirport = async (req: Request & { user?: any }, res: Response): Promise<void> => {
  try {
    const airportId = req.params.id
    const airportToDelete = await AirportModel.query().findById(airportId)

    if (!airportToDelete) {
      res.status(404).json({
        error: 'INVALID_ID',
        message: 'No airport data found by that id'
      })
      return
    }

    await AirportModel.query().deleteById(airportId)

    res.status(200).json({
      message: 'Airport deleted successfully'
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

export default {
  addAirport,
  getAllAirports,
  getAirportById,
  updateAirport,
  deleteAirport
}
