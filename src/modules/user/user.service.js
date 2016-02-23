'use strict';

var User = require('./user.model');

module.exports = {
    getUsers: getUsers,
    saveUser: saveUser
};

function getUsers(callback) {
    User.find(function (err, data) {
        if(callback){
            callback(err, data);
        }
    });
}

function saveUser(obj, callback){
    var user = new User(obj);
    user.save(function (err, data) {
        if(callback){
            callback(err, data);
        }
    });
}
