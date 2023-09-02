import { config } from "dotenv";
import express from "express";
import connectDB from "./config/db.js"
import authRoute from './routes/authRoute.js'
import cors from 'cors'
// import { fork } from 'child_process'
import productRoute from './routes/productRoute.js'
// import { Worker } from 'worker_threads'
const app = express()
config()
const PORT = process.env.PORT || 8080;
connectDB();

app.use(express.json())
app.use(cors())
app.use('/auth', authRoute)
app.use("/product", productRoute)

app.get("/", (req, res) => {
    res.send("Hello there !!")
})
app.get("/read", (req, res) => {
    // let worker = new Worker("./work.js")
    // worker.on('message', (data) => {
    //     res.status(200).json({ total: data })
    // })
    const child = fork('child.js')


})
app.post("/test", (req, res) => {
    res.send(req.body)


})

app.listen(PORT, () => {
    console.log(`Listen om ${PORT}`);

})

