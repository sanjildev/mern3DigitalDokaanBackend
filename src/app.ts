import express, { Request, Response } from 'express'
import './database/connection'
import userRoute from './routes/userRoute'

const app=express()
console.log('hi');

app.use(express.json())


app.use('/api/auth',userRoute)



export default app