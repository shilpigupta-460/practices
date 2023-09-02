import JWT from 'jsonwebtoken'

export const isAuthicate = async (req, res, next) => {
    try {
        const match = await JWT.verify(req.headers.authorization, ' nashud')
        req.user = match
        next()
    }
    catch (err) {
        console.log(err);
    }
}
