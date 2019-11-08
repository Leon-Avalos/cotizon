const express = require('express');
let middleware = require('./middleware');

const PORT = 3000;
const app = express();

app.use(express.json())

// The main route
app.get('/', function(req, res){
    res.send("Welcome to the API");
})

// Invocation and use of the User Router where we 
// assign the token if the user meets the requirements.
const userRouter = require('./routes/user_router');
app.use(userRouter);

// Use of the middleware verifier on a hypothetical route
app.get('/user/data', middleware.verifyToken)

app.listen(PORT, ()=> {
    console.log("El api esta corriendo: http://localhost:3000");
})










