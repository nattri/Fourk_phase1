'use strict';

var User = require('./user.model');

module.exports = {
    getUsers: getUsers,
    saveUser: saveUser,
    deleteUser: deleteUser,
    updateUser: updateUser
};

function getUsers(callback) {
    User.find(function (err, data) {
        if (callback) {
            callback(err, data);
        }
    });
}

function saveUser(obj, callback) {
    var user = new User(obj);
    user.save(function (err, data) {
        if (callback) {
            callback(err, data);
        }
    });
}

function deleteUser(id, callback) {
    User.findById(id, function (err, doc) {
        doc.remove(callback);
    });
}

function updateUser(id, obj, callback) {
    User.findByIdAndUpdate(id, obj, function (err, doc) {
        if (callback) {
            callback(err, doc);
        }
    });
}