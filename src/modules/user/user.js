'use strict';
var express = require('express');
var userService = require('./user.service');
var router = express.Router();

/*
 *   URL's starts with /api/user/
 */

/* my comment */
router.route('/')
    .get(getUsers)
    .post(saveUser);

router.route('/:id')
    .delete(deleteUser)
    .put(updateUser);

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
    var user = {
        name: req.body.name
    };
    userService.saveUser(user, function (err) {
        if (err) {
            console.dir('Error in saving user');
            res.json({type: 'error', msg: err});
        } else {
            console.log('user saved successfully');
            res.json({type: 'success'});
        }
    });
}

function deleteUser(req, res) {
    var id = req.params.id;
    userService.deleteUser(id, function (err) {
        if (err) {
            console.dir('Error in deleting user');
            res.json({type: 'error', msg: err});
        }
        console.dir('User removed.');
        res.json({type: 'success'});
    });
}

function updateUser(req, res) {
    var id = '56c99353c3c657441ddffd51';
    var obj = {
        name: req.body.name
    };
    userService.updateUser(id, obj, function (err) {
        if (err) {
            console.dir('Error in updating user');
            res.json({type: 'error', msg: err});
        }
        console.dir('User updated successfully..!');
        res.json({type: 'success'});
    })
}

module.exports = router;
