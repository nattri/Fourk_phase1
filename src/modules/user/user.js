'use strict';
var express = require('express');
var userService = require('./user.service');
var router = express.Router();

/*
 *   URL's starts with /api/user/
 */
router.route('/')
    .get(getUsers)
    .post(saveUser);

function getUsers(req, res) {
    userService.getUsers(function (err, data) {
        if (err) {
            console.dir('Error in fetching data');
            res.json({type: 'error', msg: err});
        } else {
            console.dir('Data fetched successfully');
            res.json(data);
        }
    });
}

function saveUser(req, res) {
    /* TODO: this will be dynamic data from req */
    var user = {
        name: 'Fourk',
        id: 1
    };
    userService.saveUser(user, function (err) {
        if (err) {
            console.dir('Error in saving user');
            res.json({type: 'error', msg: err});
        } else {
            console.log('user saved successfully');
        }
    });
}

module.exports = router;
