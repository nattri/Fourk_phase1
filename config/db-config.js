'use strict';
var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', function (err) {
    console.log('DB connection failed:', err.message);
});
db.once('open', function () {
    console.log('DB connected...!!!!');
});

//mongoose.connect('mongodb://nattri:password1@ds011158.mongolab.com:11158/fourkdb'); // connect to database
mongoose.connect('mongodb://localhost/fourkdb_local'); // connect to database
