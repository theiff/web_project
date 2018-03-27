var express = require('express')
app = express()
port = 3000
mongoose = require('mongoose')
Member = require('./models/loginListModel')
Topic = require('./models/topicListModel')
//routes = require('./routes')

bodyParser = require('body-parser')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/local', function(error){
    if(error) console.log('error');
    console.log('Connected!!!!!');
})

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

var routes = require('./routes/loginListRoute')
routes(app)

var routes2 = require('./routes/topicListRoute')
routes2(app)

// app.get('/hello', function (req, res) {
//     res.send('hello world')
//   })
// var routes2 = require('./routes/topicListRoute')
// routes2(app)
app.listen(port)

console.log('Done and started on' + port)