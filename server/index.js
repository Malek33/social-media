const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const cors = require('cors');
// Other necessary libraries

// Import middleware
const errorHandlingMiddleware = require('./middleware/errorHandling');
const passportAuthenticationMiddleware = require('./middleware/authentication');
const requestLoggingMiddleware = require('./middleware/requestLogging');
const bodyParsingMiddleware = require('./middleware/bodyParsing');
const corsMiddleware = require('./middleware/cors');
const validationMiddleware = require('./middleware/validation');

// Use middleware
app.use(errorHandlingMiddleware);
app.use(passportAuthenticationMiddleware);
app.use(requestLoggingMiddleware);
app.use(bodyParsingMiddleware);
app.use(corsMiddleware);

// Database connection
mongoose.connect('mongodb://localhost:27017/social_media_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Database connection error:', err));

// Passport middleware setup
app.use(passport.initialize());
require('./config/passport')(passport); // Setting up Passport strategies

// Routes
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const messageRoutes = require('./routes/message');
// ... other routes

app.use('/user', userRoutes);
app.use('/post', postRoutes);
app.use('/message', messageRoutes);
// ... other route usages

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
