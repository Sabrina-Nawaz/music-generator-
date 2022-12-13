const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const cors = require("cors");
const session = require('express-session')

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// turn on routes
app.use(routes);
//Connect to public folder
app.use(express.static("public"));


// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//session middleware
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767s",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
});

//http://localhost:3001