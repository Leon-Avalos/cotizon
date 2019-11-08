const jwt = require('jsonwebtoken');
const config = require("./config.js")

let verifyToken = (req, res, next) => {
    // Gets every header that matches
    let token = req.headers['x.access-token'] || req.headers['authorization']

    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }
    // Verifies if token exists
    if (token) {
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Token is not valid'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(403).json({
            success: false,
            message: 'Token not supplied'
        });
    }
}

module.exports = {
    verifyToken : verifyToken
}