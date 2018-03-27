'use strict'
module.exports = function(app){
    var Tp = require('../controllers/topicListController')
    app.route('/topics')
        .get(Tp.listAllTopic)
        .post(Tp.createATopic)
    app.route('/topics/:_id')
        //.get(Tp.listAllTopic)
        .get(Tp.readATopic)
        .post(Tp.updateATopic)
}