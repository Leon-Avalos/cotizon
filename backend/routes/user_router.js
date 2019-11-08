const jwt = require('jsonwebtoken');
const express = require('express')
const config = require("../config")
const router = express.Router()

router.get('/login', (req, res) => {
    username = req.username
    let token = jwt.sign({username: username},
        config.secret,
        { expiresIn: '24h' // expires in 24 hours
        }
      );
      // return the JWT token for the future API calls
      res.send(token)
})

module.exports = router