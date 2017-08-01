var express = require('express')
var serveStatic = require('serve-static')
var app = express()


app.set('views','./Views')
app.set('view engine','pug')
app.use(serveStatic('Settings'))
app.get('/', function (req, res) {
  res.render('index',{title:'PluckyMagnet'})
})
app.listen(3000)
console.log('running at port 3000')