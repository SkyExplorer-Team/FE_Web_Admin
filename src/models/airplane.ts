import { Model, type ModelObject } from 'objection'

export class AirplaneModel extends Model {
  id!: string
  name!: string
  code!: string
  speed!: number

  static tableName = 'airplane'
}

export type User = ModelObject<AirplaneModel>
