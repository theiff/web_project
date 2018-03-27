'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var amember = new Schema({
    name: {
        type: String
    },
    password: {
        type: String
    }

})

module.exports = mongoose.model('joiners', amember)