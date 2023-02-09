exports.setAuthentication = (req, res) => {
    var app = require('../redan-srv-main');

    app.locals.AuthenticatedUser = 'none';
    app.locals.isAuthenticated = false;
};
