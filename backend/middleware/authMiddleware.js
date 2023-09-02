import Jwt from 'jsonwebtoken'

const verifyToken = async (req, res) => {

    if (req.headers.authorization) {
        try {
            const token = req.headers.authorization.split('')[1]
            const decoded = Jwt.verify(token, process.env.JWT_SECRET)
        }
        catch (err) {
            console.log(err);
        }

    }
}
export default verifyToken