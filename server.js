const express = require("express");
const session = require("express-session")
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require("passport");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session())
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/stocklit")
//   .then(() => console.log("MongodB connected successfully"))
//   .catch(err => console.log(err));
mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_7zxx3ffc:2hne8u9d2v88e5tb06nh0a4582@ds143231.mlab.com:43231/heroku_7zxx3ffc");


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
