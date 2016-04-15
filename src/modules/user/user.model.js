var mongoose = require('mongoose');

/**
 *   User Schema
 *	 Main account for all users.
 *
 *	 @author: Piyush Yadav
 *	 @date: 15/04/2016 
 */
var UserSchema = new mongoose.Schema({
    
	// Account and Contact Information
	username		: { type: String, required: true, lowercase: true, index:{ unique: true } },	// fill with a random string if empty.
	email           : { type: String, required: true, lowercase: true, index:{ unique: true } },           
    password        : { type: String, required: true },    
	accessToken     : { type: String, required: true },					                            // Used for Remember Me

	roles           : [{ type: String}],
	isAdmin         : Boolean,
	
	phone           : {
	    isdCode         : String,
	    number          : { type: String, validate        : {
                                            validator       : function(v) {
                                                    return /\d{10}/.test(v);
                                                }, message: '{VALUE} is not a valid mobile number!' 
                                            }, required: [true, 'Mobile number required.'] }
    },
	
	
	/* 
	 *     Basic Info 
	 */
	name            : {
        first           : { type: String, required: true, trim: true },
        last            : { type: String, required: true, trim: true }
    },  
	dob				: Date,
	

	/* 
	 *     Lists (needs to be populated using populate function)
	 */
	following       : {
	    users           : [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
	    restaurants     : [{ type: mongoose.Schema.ObjectId, ref: 'Restaurant' }]
	},
	
	
	
    /* 
	 *     Social Login Accounts
	 */
    facebook        : {
        id			: String,
        token       : String,
        email       : String,
        name        : String
    },	
    
    google          : {
		id          : String,
        token       : String,
        email       : String,
        name        : String
    }
});
 
module.exports = mongoose.model('User', UserSchema);





var LoginAttemptSchema = new mongoose.Schema({
    
    user            : { type : mongoose.Schema.ObjectId, ref: 'User', required: true },
    loginSuccess    : Boolean,
    timeStamp       : { type: Date, default: Date.now},
    ipAddress       : String,
    sysName         : String
    
});

module.exports = mongoose.model('LoginAttempt', LoginAttemptSchema)