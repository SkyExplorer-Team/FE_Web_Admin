import { Router } from 'express'
import mealControllers from '../controllers/mealControllers'
import isTokenAutorized from '../middlewares/authorize'

const mealRouter: Router = Router()

mealRouter.post('/api/v1/meals', isTokenAutorized, mealControllers.addMeal)
mealRouter.get('/api/v1/meals', isTokenAutorized, mealControllers.getAllMeals)
mealRouter.get('/api/v1/meals/:id', isTokenAutorized, mealControllers.getMealById)
mealRouter.put('/api/v1/meals/:id', isTokenAutorized, mealControllers.updateMeal)
mealRouter.delete('/api/v1/meals/:id', isTokenAutorized, mealControllers.deleteMeal)

export default mealRouter
