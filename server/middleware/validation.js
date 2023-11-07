// middleware/validation.js
const { body, validationResult } = require('express-validator');

const validationMiddleware = [
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = validationMiddleware;
