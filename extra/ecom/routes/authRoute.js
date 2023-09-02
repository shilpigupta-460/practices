const express = require('express')
const User = require("../models/User")
const router = express.Router()
const cryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')
//Register

router.post("/register", async (req, res) => {
    const { username, password, email } = req.body
    const newUser = new User({
        username, email,
        password: cryptoJS.AES.encrypt(password, process.env.PASS_SECRET).toString()
    })
    try {
        const savedUser = await newUser.save()

        res.status(200).json(savedUser)
    }
    catch (err) {
        res.status(500).json(err)

    }
})
// Login
router.post("/login", async (req, res) => {
    // const { username, password } = req.body

    try {

        // hashpassword !== password && res.status(401).json({ message: "wrong credential" })


        const user = await User.findOne({ username: req.body.username })
        !user && res.status(401).json({ message: "wrong  name credential" })
        const hashpassword = cryptoJS.AES.decrypt(user.password, process.env.PASS_SECRET).toString(cryptoJS.enc.Utf8)


        hashpassword != req.body.password && res.status(401).json({ message: "wrong pass credential" })
        const { password, ...others } = user._doc
        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin
            },
            process.env.JWT_SECRET,
            { expiresIn: "2d" })


        res.status(200).json({ ...others, accessToken })



    }
    catch (err) {
        res.status(500).json(err)

    }
})


module.exports = router