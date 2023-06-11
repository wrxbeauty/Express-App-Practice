// Require modules
const express = require('express')

// Initialize app
const app = express()

// Create Route
app.get('/', function (req, res) {
    // This gets sent to client
    res.send('Hey there!')
})
