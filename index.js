// Get enviornment variables
require('dotenv').config()

// Require modules
const express = require('express')

// Initialize app
const app = express()

// Create Route
app.get('/', function (req, res) {
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: white;">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1>White Page</h1>
        </body>
    `)
})

// Create Second Route
app.get('/second', function (req, res) {
    res.send('<h1 style="text-align:center">You Made It!</h1>')
})

// Teal Page
app.get('/teal', function (req, res) {
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: teal;">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="color: teal;">Teal Page</h1>
        </body>
    `)
})

// Crimson Page
// app.get('/teal', function (req, res) {
//     res.send(`
//         <body style="margin: 0;">
//             <div style="border: 1px solid black; height: 10vh; background-color: crimson;">
//                 <h2 style="text-align: center;">NAV BAR</h2>
//             </div>
//             <h1 style="color: crimson;">Crimson Page</h1>
//         </body>
//     `)
// })


// Listen 
// app.listen(3000, function () {
//     console.log('I am working!')
// })
app.listen(process.env.PORT)