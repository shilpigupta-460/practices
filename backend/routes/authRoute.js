import express from "express"
import userModel from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import Jwt from "jsonwebtoken"
const router = express.Router()


router.post("/register", async (req, res) => {
    const { uname, email, password } = req.body
    if (!uname || !email || !password) { return res.status(401).send("please complete info") }
    try {

        const exitUser = await userModel.findOne({ email })
        if (exitUser) { return res.json({ message: 'user already exit' }) }
        const salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hash(password, salt)

        const newUser = await new userModel({ uname, email, password: hashPass }).save()

        // const newUser = userModel.create(req.body)
        res.status(201).send({
            success: true,
            message: "User Register Successfully",
            ...newUser
        });
    }
    catch (err) {
        console.log(err);
    }

})

router.post("/login", async (req, res) => {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })

    try {
        if (!user && !password) { return res.json({ message: 'need credential' }) }
        const hashpass = await bcrypt.compare(password, user.password)
        if (user && password) {
            return res.json(
                {
                    _id: user.id,
                    email: user.email,
                    token: genrateToken(user._id)
                }
            )
        }
    }
    catch (err) {
        console.log(err);

    }

    res.status(200).send(" login here")
})

const genrateToken = (id) => {
    return Jwt.sign({ id }, process.env.JWT_SECRET)
}

export default router