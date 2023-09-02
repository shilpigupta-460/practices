import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const authToken = async (req, res, next) => {
    try {
        const match = await JWT.verify(req.headers.authorization, process.env.JWT_SECRET)
        req.user = match
        next()
    }
    catch (err) {
        console.log(err);
    }
}
export const adminVerify = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);

        if (user.role !== 1) {
            return res.status(401).send("UnAuthorized Access Admin only ")
        }
        else { next() }


    }
    catch (err) {
        next(err)
    }
}