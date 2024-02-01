import { Model, type ModelObject } from 'objection'
import { AirplaneModel } from './airplane'
import { AirportModel } from './airport'

export class ScheduleModel extends Model {
  id!: string
  airplane_id!: string
  from_id!: string
  to_id!: string
  price!: number
  time_departure!: string
  time_arrive!: string

  static tableName = 'schedule'

  static relationMappings = {
    airplane: {
      relation: Model.BelongsToOneRelation,
      modelClass: AirplaneModel,
      join: {
        from: 'schedule.airplane_id',
        to: 'airplane.id'
      },
      modify: (query: any) => {
        query.select('id', 'name')
      }
    },
    fromData: {
      relation: Model.BelongsToOneRelation,
      modelClass: AirportModel,
      join: {
        from: 'schedule.from_id',
        to: 'airport.id'
      },
      modify: (query: any) => {
        query.select('id', 'name')
      }
    },
    toData: {
      relation: Model.BelongsToOneRelation,
      modelClass: AirportModel,
      join: {
        from: 'schedule.to_id',
        to: 'airport.id'
      },
      modify: (query: any) => {
        query.select('id', 'name')
      }
    }
  }
}

export type User = ModelObject<ScheduleModel>
