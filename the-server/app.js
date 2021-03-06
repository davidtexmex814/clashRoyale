require("dotenv").config();
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

const app = express();

// Passport configuration
require("./passport")(app);

// Mongoose configuration
const mongoose = require("mongoose");
mongoose.connect(process.env.DBURL);

const whitelist = [process.env.DBURLANGULAR];
var corsOptions = {
  origin: function(origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));

// Session
app.use(
  session({
    secret: "lab-angular-authentication",
    resave: true,
    saveUninitialized: true,
    cookie: { httpOnly: true, maxAge: 2419200000 }
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "public")));


// uncomment after placing your favicon in /public
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const index = require("./routes/index");
app.use("/", index);

const clash = require("./routes/clash");
app.use("/", clash);

const auth = require("./routes/auth");
app.use("/routes/auth", auth);

const User = require('./models/User');
const Messages = require('./models/Messages')
const MessagesGlobal = require('./models/MessagesGlobal')
// // app.use('/routes/crud', require('./routes/crud')(Messages));
app.use('/routes/messages', require('./routes/extendMessages'));
app.use('/routes/messages', require('./routes/global'));

app.use(function(req, res) {
res.sendfile(__dirname + '/public/index.html');
});

module.exports = app;
