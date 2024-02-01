import { NationalModel } from '../models/national'
import { type Request, type Response } from 'express'
import { v4 as uuidv4 } from 'uuid'
require('dotenv').config()

const addNational = async (req: Request, res: Response): Promise<void> => {
  const name: string = req.body.name

  const existingNational = await NationalModel.query().findOne({ name })

  if (existingNational) {
    res.status(400).json({
      error: 'INVALID_AIRPORT_NAME',
      message: 'National is already exists. Please use a different name.'
    })
    return
  }

  try {
    const uniqueId = uuidv4()

    const registeredNational = await NationalModel.query().insert({
      id: uniqueId,
      name
    }).returning('*')

    res.status(201).json({
      message: 'Register Success, New National Created',
      userInfromation: registeredNational
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const getAllNationals = async (req: Request, res: Response): Promise<void> => {
  try {
    const allNationals = await NationalModel.query()

    res.status(201).json({
      message: 'Succsesfully get all Nationals data',
      data: allNationals
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const getNationalById = async (req: Request, res: Response): Promise<void> => {
  const nationalId = req.params.id

  try {
    const filterById = await NationalModel.query().findById(nationalId)
    if (filterById === null || filterById === undefined) {
      res.status(404).json({
        error: 'INVALID_ID',
        message: 'No national data found by that id'
      })
      return
    }

    res.status(201).json({
      message: 'Success Get national Data by ID',
      data: filterById
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const updateNational = async (req: Request & { user?: any }, res: Response): Promise<void> => {
  interface RequestBodyType {
    name: string
  }
  const nationalIdToUpdate = req.params.id
  try {
    const userToUpdate = await NationalModel.query().findById(nationalIdToUpdate)
    const { name }: RequestBodyType = req.body

    if (userToUpdate === null || userToUpdate === undefined) {
      res.status(404).json({ error: 'INVALID_ID', message: 'No nationals data found by that id' })
      return
    }

    if (name && name !== userToUpdate.name) {
      const exustingName = await NationalModel.query().findOne({ name })
      if (exustingName) {
        res.status(400).json({
          error: 'INVALID_NAME',
          message: 'Name already used. Please use a different name.'
        })
        return
      }
      if (name.length < 3 || name.length > 25) {
        res.status(400).json({
          error: 'INVALID_NEW_NAME',
          message: 'The name must consist of between 3 to 25 characters'
        })
        return
      }
    }
    await NationalModel.query().patchAndFetchById(nationalIdToUpdate, { name })

    res.status(200).json({
      message: 'Success Update National Data'
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const deleteNational = async (req: Request & { user?: any }, res: Response): Promise<void> => {
  try {
    const nationalId = req.params.id
    const nationalToDelete = await NationalModel.query().findById(nationalId)

    if (!nationalToDelete) {
      res.status(404).json({
        error: 'INVALID_ID',
        message: 'No national data found by that id'
      })
      return
    }

    await NationalModel.query().deleteById(nationalId)

    res.status(200).json({
      message: 'National deleted successfully'
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

export default {
  addNational,
  getAllNationals,
  getNationalById,
  updateNational,
  deleteNational
}
