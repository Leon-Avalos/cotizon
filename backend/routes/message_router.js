const express = require('express')
const config = require("../config")
const router = express.Router()

router.post('/contact', (req, res) =>{
    let name = req.param('name')
    let email = req.param('email')
    let msg = req.param('msg-content')

    if (name == '' || email == '' || msg == ''){
        res.status(406).json({
            success: false,
            message: 'Missing some data'
        })
    }else{
        res.json({
            success: true,
            message: 'The message has ben sent'
        })
    }
})
