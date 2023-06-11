// Require modules
const express = require('express')

// Initialize app
const app = express()

// Create Route
app.get('/', function (req, res) {
    // This gets sent to client
    res.send('<h1 style="color:purple">Hey there!</h1>')
})

// Create Second Route
app.get('/second', function (req, res) {
    res.send('<h1 style="text-align:center">You Made It!</h1>')
})

// Listen 
app.listen(3000, function () {
    console.log('I am working!')
})