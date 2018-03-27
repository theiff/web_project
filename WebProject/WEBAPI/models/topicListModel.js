'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Topicschema = new Schema({
    
    username:{
        type: String    
    },
    topicname: {
        type: String
    },
    detail: {
        type: String
    },
    comment: [
        {
            comname:{
                type: String
            },
            content:{
                type: String
            }
        }
    ]
    

})

module.exports = mongoose.model('Topics', Topicschema)