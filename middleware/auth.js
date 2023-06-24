const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
const token =req.headers.authorization

    console.log(token)
    if (!token) {
        return res.status(403).json({message: "No token provided", success: false})
    }

    try {
        const decoded = jwt.verify(token.split(' ')[1], "brownfoxjumpsoverthelazydog")
        req.user = decoded
        next()
    }
    catch (err) {
        return res.status(401).json({message: "Unauthorized", success: false})
    }
}

module.exports = verifyToken