const express = require('express')
const cors = require('cors')

const { connectDB } = require('./DB/config')
const userRoute = require("./routes/userRoute.js")
const authRoute = require("./routes/authRoute.js")
const mongoose = require("mongoose")
const responseTime = require("response-time")
const app = express()

const PORT = process.env.PORT || 4000
require('dotenv').config();
//middelware
app.use(cors())
app.use(express.json())
app.use(responseTime())
// connectDB()
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() =>
        console.log(`db is up`)
    )
    .catch((err) => console.log(err));


app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
// app.use("/api/products", productRoute)
// Endpoints


app.listen(PORT, () => {
    console.log(`sever is up ${PORT}`);
})