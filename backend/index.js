import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from 'cors'
import authRoute from './routes/authRoute.js'
import goalRoute from './routes/goalRoute.js'
import verifyToken from "./middleware/authMiddleware.js"
dotenv.config()
const PORT = process.env.PORT || 4040
const app = express()

app.use(cors())
app.use(express.json());



mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
    .then(() => console.log("MongoDB is  connected successfully"))
    .catch((err) => console.error(err));

app.use("/api", authRoute)
app.use("/api/goals", goalRoute)
app.get("/", verifyToken, (req, res) => {
    res.send('hello')
})


app.listen(PORT, () => {
    console.log(`sever is runing :${PORT}`);

})