import { Model, type ModelObject } from 'objection'

export class UserModel extends Model {
  id!: string
  national_id!: string
  firstName!: string
  lastName!: string
  password!: string
  salutation?: string
  email!: string
  dob?: Date
  phone?: string
  subscribe!: boolean
  role_id!: string

  static tableName = 'users'

  static jsonSchema = {
    type: 'object',
    required: ['national_id', 'firstName', 'lastName', 'password', 'email', 'subscribe', 'role_id'],

    properties: {
      id: { type: 'string', format: 'uuid' },
      national_id: { type: 'string', maxLength: 255 },
      firstName: { type: 'string', maxLength: 255 },
      lastName: { type: 'string', maxLength: 255 },
      password: { type: 'string', maxLength: 255 },
      salutation: { type: 'string', maxLength: 255 },
      email: { type: 'string', format: 'email', maxLength: 255, unique: true },
      dob: { type: 'string', format: 'date-time' },
      phone: { type: 'string', maxLength: 255 },
      subscribe: { type: 'boolean' },
      role_id: { type: 'string', maxLength: 255 }
    }
  }
}

export type User = ModelObject<UserModel>
