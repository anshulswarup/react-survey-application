const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport'); // We use this to ensure passport.js file is executed once

mongoose.connect(keys.mongoURI);
const app = express();

app.use(bodyParser.json());
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
require('./routes/billingRoutes')(app);

//Handing React Routes in production

if (process.env.NODE_ENV === 'production') {
  //Express will serve up production assets
  // like main.js and main.css file
  app.use(express.static('client/build'));
  //Express will serve up index.html file
  //if it does not recognize the route

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT);
