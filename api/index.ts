import express, { type Express, type Request, type Response } from 'express'

const app: Express = express()
const PORT: number = 8000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!')
})

app.listen(PORT, () => {
  console.log(`Server run on http://localhost:${PORT}`)
})
