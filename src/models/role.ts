import { Model, type ModelObject } from 'objection'

export class RoleModel extends Model {
  id!: string
  name!: string

  static tableName = 'roles'
}

export type User = ModelObject<RoleModel>
