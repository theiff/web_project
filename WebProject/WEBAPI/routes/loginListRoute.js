'use strict'
module.exports = function(app){
    var mem = require('../controllers/loginListController')
    app.route('/joiners')
        .get(mem.findUserList)
        .post(mem.addNewmember)
}