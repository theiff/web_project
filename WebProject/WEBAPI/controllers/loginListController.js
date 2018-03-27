'use strict'
var mongoose = require('mongoose')
var member = mongoose.model('joiners')

exports.findUserList = function (req,res)
{
    
    member.findOne({}, null, function(err,member)

    {
        if(err) throw err
        res.json(member)
    })
}

exports.addNewmember = function(req, res){
    var newMember = new member (req.body)
    newMember.save(function(err,member){
        if (err) throw err
        res.json(member)
    })
}
