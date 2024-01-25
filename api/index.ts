import express, { type Request, type Response } from 'express'
import knex from 'knex'
import { Model } from 'objection'
import databaseConfig from './src/config/databaseConfig'
import cors from 'cors'
import userRouter from './src/routes/userRouter'

const app = express()
const knexInstance = knex({
  client: 'postgresql',
  connection: databaseConfig
})

Model.knex(knexInstance)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use('', userRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!')
})

app.listen(8081, '0.0.0.0', () => {
  console.log(`Server is running on port ${process.env.PORT ?? 8081}`)
})
