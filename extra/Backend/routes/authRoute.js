import express from "express";
import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";
import { hashPassword, verifyPassword } from "../helper/authHelper.js"
import { authToken, adminVerify } from "../middlewares/authMiddleware.js";
// route obj

const router = express.Router()
// routing

router.post("/register", async (req, res, next) => {
    try {
        const { name, email, password, phone, address, answer } = req.body
        // console.log(email)
        // res.send(" done")
        // validation
        if (!name) {
            return res.send({ error: "Name is Required" });
        }
        if (!email) {
            return res.send({ message: "Email is Required" });
        }
        if (!password) {
            return res.send({ message: "Password is Required" });
        }
        if (!phone) {
            return res.send({ message: "Phone no is Required" });
        }
        if (!address) {
            return res.send({ message: "Address is Required" });
        }
        if (!answer) {
            return res.send({ message: "Answer is Required" });
        }

        // check user
        const exitingUser = await userModel.findOne({ email })
        if (exitingUser) {
            return res.status(200).send("Already registered login please")
        }

        // hashed password
        const hashedPassword = await hashPassword(password)
        // register user
        const newUser = await new userModel({
            name,
            email,
            phone,
            address,
            password: hashedPassword,
            answer,
        }).save();
        res.status(201).send({
            success: true,
            message: "User Register Successfully",
            newUser
        });


    }
    catch (error) {
        next(error)

        // return res.status(500).send({
        //     success: 'false',
        //     message: "Errro in Registeration",
        //     throw new Error
        // })
    }

})

router.post("/login", async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(404).send({ message: "Invalid email or password" })
    }
    const user = await userModel.findOne({ email })
    if (!user) {
        return res.status(404).send({ message: "Invalid  email" })
    }

    const verifyPass = await verifyPassword(password, user.password)
    if (!verifyPass) {
        return res.status(404).send({ message: "Invalid  password" })
    }
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET)
    console.log(user);
    res.send({
        user,
        token
    })
})

router.post("/protected", authToken, adminVerify, (req, res) => {
    res.send(" protected route")
})
export default router