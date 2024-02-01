import { MealModel } from '../models/meals'
import { type Request, type Response } from 'express'
import { v4 as uuidv4 } from 'uuid'

const addMeal = async (req: Request, res: Response): Promise<void> => {
  const name: string = req.body.name
  const price: number = req.body.speed

  try {
    const uniqueId = uuidv4()

    const registeredMeal = await MealModel.query().insert({
      id: uniqueId,
      name,
      price
    }).returning('*')

    res.status(201).json({
      message: 'Register Success, New Meal Created',
      userInfromation: registeredMeal
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const getAllMeals = async (req: Request, res: Response): Promise<void> => {
  try {
    const allMeals = await MealModel.query()

    res.status(201).json({
      message: 'Succsesfully get all Meals data',
      data: allMeals
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const getMealById = async (req: Request, res: Response): Promise<void> => {
  const mealId = req.params.id

  try {
    const filterById = await MealModel.query().findById(mealId)
    if (filterById === null || filterById === undefined) {
      res.status(404).json({
        error: 'INVALID_ID',
        message: 'No meal data found by that id'
      })
      return
    }

    res.status(201).json({
      message: 'Success Get meal Data by ID',
      data: filterById
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const updateMeal = async (req: Request & { user?: any }, res: Response): Promise<void> => {
  interface RequestBodyType {
    name: string
    price: number
  }
  const mealIdToUpdate = req.params.id
  try {
    const userToUpdate = await MealModel.query().findById(mealIdToUpdate)
    const { price, name }: RequestBodyType = req.body

    if (userToUpdate === null || userToUpdate === undefined) {
      res.status(404).json({ error: 'INVALID_ID', message: 'No meals data found by that id' })
      return
    }

    await MealModel.query().patchAndFetchById(mealIdToUpdate, { name, price })

    res.status(200).json({
      message: 'Success Update Meal Data'
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

const deleteMeal = async (req: Request & { user?: any }, res: Response): Promise<void> => {
  try {
    const mealId = req.params.id
    const mealToDelete = await MealModel.query().findById(mealId)

    if (!mealToDelete) {
      res.status(404).json({
        error: 'INVALID_ID',
        message: 'No meal data found by that id'
      })
      return
    }

    await MealModel.query().deleteById(mealId)

    res.status(200).json({
      message: 'Meal deleted successfully'
    })
  } catch (error: any) {
    console.log(error.message)
    res.status(500).json({ message: error.message })
  }
}

export default {
  addMeal,
  getAllMeals,
  getMealById,
  updateMeal,
  deleteMeal
}
