require('dotenv').config();
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const passport = require('./config/passport');
const helmet = require('helmet');
const path = require('path');
const secret = process.env.Session_Secret;
const db = require('./models');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(helmet());
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret,
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Requiring our routes
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);
require('./routes/board-api-routes.js')(app);
require('./routes/task-api-routes.js')(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
  });
});