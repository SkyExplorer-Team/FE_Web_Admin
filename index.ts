/* eslint-disable @typescript-eslint/no-unsafe-argument */
import express, { type Request, type Response } from 'express'
import knex from 'knex'
import { Model } from 'objection'
import databaseConfig from './src/config/databaseConfig'
import cors from 'cors'
import userRouter from './src/routes/userRouter'
import airportRouter from './src/routes/airportRoutes'
import airplaneRouter from './src/routes/airplaneRoutes'
import scheduleRouter from './src/routes/scheduleRoutes'
import nationalRouter from './src/routes/nationalRoutes'
import mealRouter from './src/routes/mealRoutes'
import transactionRouter from './src/routes/transactionRoutes'
import swaggerUi from 'swagger-ui-express'
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml')

const app = express()
const knexInstance = knex({
  client: 'postgresql',
  connection: databaseConfig
})

Model.knex(knexInstance)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('', userRouter)
app.use('', airportRouter)
app.use('', airplaneRouter)
app.use('', scheduleRouter)
app.use('', nationalRouter)
app.use('', mealRouter)
app.use('', transactionRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!')
})

app.listen(8081, '0.0.0.0', () => {
  console.log(`Server is running on port ${process.env.PORT ?? 8081}`)
})
