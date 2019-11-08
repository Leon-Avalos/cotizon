const jwt = require('jsonwebtoken');
const express = require('express')
const config = require("../config")
const router = express.Router()

/**
 * Creation of the jwt using certain username typed by the user
 */
router.post('/login', (req, res) => {
    // credentials from the request
    username = req.username
    password = req.password

    // harcoded credentials, it must be queried from the database
    dummyUser = 'admin'
    dummyPassword = '1234'

    if (username === dummyUser && password === dummyPassword) {
        let token = jwt.sign({ username: username },
            config.secret,
            {
                expiresIn: '24h' // 24 hours until the expiration
            }
        );
        res.json({
            success: true,
            message: 'Authentication successful!',
            token: token
        });
    } else {
        //Wrong credentials inserted
        res.send(403).json({
            success: false,
            message: 'Wron credentials'
          });
    }
})

router.get('/login/')

module.exports = router