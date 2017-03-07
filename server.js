var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('App Running...')
})

app.listen(3443, function () {
  console.log('Example app listening on port 3443!')
})