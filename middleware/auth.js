const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {

    const token = req.body.token || req.query.token || req.headers["x-access-token"]

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