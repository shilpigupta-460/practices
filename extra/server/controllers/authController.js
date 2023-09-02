import User from '../Models/userModel.js'
import JWT from 'jsonwebtoken'
// export const authToken = async((req, res, next) => {

//     try {
//         const token = JWT.verify(req.headers.authorization, process.env.JWT_SECRET)
//         req.user = token
//         next()
//     }
//     catch (err) { console.log(err); }


// })


export const register = async (req, res,) => {
    const user = new User(req.body)
    const result = await user.save()
    res.status(200).json({ message: " user add" })

}
