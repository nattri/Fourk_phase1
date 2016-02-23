var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    id: Number
});

module.exports = mongoose.model('User', userSchema);