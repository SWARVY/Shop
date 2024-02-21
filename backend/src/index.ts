// modules
import express, { type Express } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connect } from 'mongoose'
import userRouter from './routes/users'

// constants
const PORT = 4000
// const HOST = '0.0.0.0'

// app
const app: Express = express()

// CORS setting
app.use(cors())
app.use(express.json())
dotenv.config()

connect(process.env.MONGO_URI ?? '')
  .then(() => {
    console.log('mongoDB connected via mongoose!')
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })

app.use('/users', userRouter)

app.listen(PORT)
