import { Model, type ModelObject } from 'objection'

export class TransactionModel extends Model {
  id!: string
  amount!: number
  description!: string
  payment_method!: string
  status!: string
  transaction_date!: string
  booking_id!: string

  static tableName = 'transaction'
}

export type User = ModelObject<TransactionModel>
