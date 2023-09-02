import express from "express"
import { register } from '../controllers/authController.js'
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({ message: " auth is ready" })

})
router.post("/register", register)

export default router
