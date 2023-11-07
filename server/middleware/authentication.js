// middleware/authentication.js
// ... (Passport and JWT setup)
const passport = require('passport');
const jwt = require('jsonwebtoken');

const passportAuthenticationMiddleware = passport.authenticate('jwt', { session: false });

module.exports = passportAuthenticationMiddleware;
