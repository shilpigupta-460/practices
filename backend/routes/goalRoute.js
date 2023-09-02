import express from "express"
import userModel from '../models/userModel.js'
import goalModel from '../models/goalModel.js'
const router = express.Router()

router.post("/", (req, res) => {
    //const { goal } = req.body
    res.json({ message: 'goal send' })
})
router.post("/:id", (req, res) => {
    //const { goal } = req.body
    res.json({ message: `goal send with Id: ${req.params.id}` })
})

export default router;