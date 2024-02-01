import { Model, type ModelObject } from 'objection'

export class MealModel extends Model {
  id!: string
  name!: string
  price!: number

  static tableName = 'meal'
}

export type User = ModelObject<MealModel>
