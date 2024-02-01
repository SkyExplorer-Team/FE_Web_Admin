import { Model, type ModelObject } from 'objection'

export class NationalModel extends Model {
  id!: string
  name!: string

  static tableName = 'national'
}

export type User = ModelObject<NationalModel>
