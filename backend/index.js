const express = require('express');
const jwt = require('jsonwebtoken');

const PORT = 3000;
const app = express();

app.use(express.json())

app.get('/', function(req, res){
    res.send("Welcome to the API");
})

const userRouter = require('./routes/user_router');
app.use(userRouter);

app.listen(PORT, ()=> {
    console.log("El api esta corriendo: http://localhost:3000");
})








