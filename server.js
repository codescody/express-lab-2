const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/greeting', function(req, res) {
    res.send('Hello, stranger')
})

app.get('/greeting/:name', function(req, res) {
    res.send('Hello, ' + (req.params.name) + ' its so great to see you!')
})



app.listen(3000)