// middleware/bodyParsing.js
const bodyParser = require('body-parser');

const bodyParsingMiddleware = [
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json()
];

module.exports = bodyParsingMiddleware;
