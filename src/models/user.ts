import { Model, type ModelObject } from 'objection'
import { RoleModel } from './role'

export class UserModel extends Model {
  id!: string
  name!: string
  password!: string
  email!: string
  id_role!: string

  static tableName = 'admin'

  static relationMappings = {
    role: {
      relation: Model.BelongsToOneRelation,
      modelClass: RoleModel,
      join: {
        from: 'admin.id_role',
        to: 'roles.id'
      },
      modify: (query: any) => {
        query.select('id', 'name')
      }
    }
  }
}

export type User = ModelObject<UserModel>
