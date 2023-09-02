const jwt = require("jsonwebtoken")

const verifyJwt = (req, res, next) => {
    const token = req.headers.token

    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        if (err) {
            return res.status(403).send("invalid token")
            req.user = user
            next()
        }
        else {
            return res.status(401).send("you are not authenicated ")
        }

    })

}
