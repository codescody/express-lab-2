const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/magic', function(req, res) {
  res.send('Question')
})

app.get('/greeting', function(req, res) {
    res.send('Hello, stranger')
})

app.get('/greeting/:name', function(req, res) {
    res.send('Hello, ' + (req.params.name) + ' its so great to see you!')
})

app.get('/magic/:question', function(req, res) {
  res.send((req.params.question) + " " + eightBallResponse[Math.floor(Math.random()*eightBallResponse.length)])
})

const eightBallResponse = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.listen(3000)