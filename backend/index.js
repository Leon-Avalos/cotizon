const express = require('express')

const PORT = 3000
const app = express()
app.use(express.json())

app.listen(PORT, ()=> {
    console.log("El api esta corriendo: http://localhost:3000")
})






