'use strict';
var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', function (err) {
    console.log('DB connection failed:', err.message);
});
db.once('open', function () {
    console.log('DB connected...!!!!');
});

/* un-comment to connect to cloud database */
mongoose.connect('mongodb://admin:password1@ds011158.mongolab.com:11158/fourkdb');
/* un-comment to connect to local database */
//mongoose.connect('mongodb://localhost/fourkdb_local');
