const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport'); // We use this to ensure passport.js file is executed once

mongoose.connect(keys.mongoURI);
const app = express();

//Enable browser to use cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

//Tell passport to use cookies
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
