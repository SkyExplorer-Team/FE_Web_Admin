import { Model, type ModelObject } from 'objection'
import { NationalModel } from './national'

export class AirportModel extends Model {
  id!: string
  name!: string
  abv!: string
  national_id!: string
  city!: string
  lat!: number
  lng!: number

  static tableName = 'airport'

  static relationMappings = {
    national: {
      relation: Model.BelongsToOneRelation,
      modelClass: NationalModel,
      join: {
        from: 'airport.national_id',
        to: 'national.id'
      },
      modify: (query: any) => {
        query.select('id', 'name')
      }
    }
  }
}

export type User = ModelObject<AirportModel>
