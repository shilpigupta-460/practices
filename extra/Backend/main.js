import express from 'express'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import morgan from 'morgan'
import authRoute from "./routes/authRoute.js"
// configure env
dotenv.config()

// database  configue
connectDB()
// rest object
const app = express()

// Port
const PORT = process.env.PORT || 8080;
// middlewares
app.use(express.json()) // send json data in req and res request
app.use(cors())
app.use(morgan('dev'))

// routes
app.use("/api/v1/auth", authRoute)

// rest api
app.get('/', (req, res) => {
    res.send('hello server');

})
// run listen
app.listen(PORT, () => {
    console.log(`server running in ${process.env.DEV_MODE} mode on port :${PORT}`);
})

