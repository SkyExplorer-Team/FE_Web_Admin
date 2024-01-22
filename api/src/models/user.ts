import { Model, type ModelObject } from 'objection'

export class UserModel extends Model {
  id!: string
  name!: string
  password!: string
  email!: string
  id_role!: string

  static tableName = 'admin'
}

export type User = ModelObject<UserModel>
