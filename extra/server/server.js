import express from 'express';
import mongoose from 'mongoose';
import User from '../api/Models/userModel.js'
import Jwt from 'jsonwebtoken';
import { isAuthicate } from './isAuth.js';

const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://admin:admin@cluster0.y63fzsm.mongodb.net/ecommerce', { useNewUrlParser: true })

app.get("/", isAuthicate, (req, res) => {
    res.send({ message: " welcome shilpi" })

})
app.post("/regiseter", async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) return res.json({ message: " user already exit choose other name" })
    else {
        res.status(200).send(email)
    }
})
app.post("/login", (req, res) => {
    const { email, password } = req.body

    const user = User.findOne({ email })
    if (!user) return res.json({ message: " user not exit " })
    else {
        const payload = {
            email, name: user.name
        }
        Jwt.sign(payload, ' nashud', (err, token) => {
            if (err) console.log(err);
            else
                res.status(200).send({ token: token })
        })

    }


    res.status(200).send(user)
})
app.listen(8080, () => {
    console.log('server is running');

})