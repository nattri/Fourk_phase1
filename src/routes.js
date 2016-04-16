'use strict';

module.exports = function (app) {
    /* authenticate for all request */
    app.use('/api', function (req, res, next) {
        console.log('authenticating......');
        next();
    });

    /* place all routes here */
    //app.use('/api/login', require('./modules/login/login'));
    app.use('/api/user', require('./modules/user/user'));


    /* code changed shw*/
};
