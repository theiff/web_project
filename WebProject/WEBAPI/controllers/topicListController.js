'use strict'
var mongoose = require('mongoose')
var topic = mongoose.model('Topics')


exports.listAllTopic = function(req, res){
    //console.log('hello')
    topic.find({}, function(err, top){
        if(err) throw err
        console.log(top)
        res.json(top)
    }
)
}


exports.createATopic = function(req, res){
    var newTopic = new topic(req.body)
    newTopic.save(function(err, top){
        if(err) throw err
        console.log(top)
        res.json(top)
    })
}

exports.readATopic = function(req, res){
    //console.log(req.params.userId)
    topic.findById(req.params._id, function(err, user){
        if(err) throw err
        console.log(user)
        res.json(user)
    })
}


exports.updateATopic = function(req, res){
    //console.log(req.params.userId)
    var newTopic = {}
    newTopic = req.body
    //console.log(newUser)
    topic.findByIdAndUpdate(req.params._id, newTopic, {new: true}, function(err, top){
        if(err) throw err
        console.log(top)
        res.json(top)
    })
}