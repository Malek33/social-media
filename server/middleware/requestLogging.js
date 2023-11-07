// middleware/requestLogging.js
const requestLoggingMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.path} ${new Date()}`);
    next();
  };

  module.exports = requestLoggingMiddleware;
