const jwt = require('jsonwebtoken');
const express = require('express')
const config = require("../config")
const router = express.Router()

router.post('/login', (req, res) => {
    username = req.username
    password = req.password

    dummyUser = 'admin'
    dummyPassword = '1234'

    if (username === dummyUser && password === dummyPassword) {
        let token = jwt.sign({ username: username },
            config.secret,
            {
                expiresIn: '24h'
            }
        );

        res.json({
            success: true,
            message: 'Authentication successful!',
            token: token
        });
    } else {
        res.send(403).json({
            success: false,
            message: 'Wron credentials'
          });
    }
})

router.get('/login/')

module.exports = router