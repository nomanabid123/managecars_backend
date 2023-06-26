const jwt = require('jsonwebtoken')

// Verify token
const verifyToken = (req, res, next) => { // Get auth header value
    const token = req.headers.authorization
    if (! token) {
        return res.status(403).json({message: "No token provided", success: false}) // 403 Forbidden
    }

    try {

        const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET_KEY) // Verify token
        req.user = decoded
        next()
    } catch (err) {
        return res.status(401).json({message: "Unauthorized", success: false})
    }
}

// Export module
module.exports = verifyToken
