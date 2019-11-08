const express = require('express');
let middleware = require('./middleware');

const PORT = 3000;
const app = express();

app.use(express.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

// The main route
app.get('/', function (req, res) {
    res.send("Welcome to the API");
})

// Invocation and use of the User Router where we 
// assign the token if the user meets the requirements.
const userRouter = require('./routes/user_router');
app.use(userRouter);

app.get('/user/data', middleware.verifyToken);

app.listen(PORT, () => {
    console.log("El api esta corriendo: http://localhost:3000");
})