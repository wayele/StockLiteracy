const router = require("express").Router();
const User = require("../../models/User");
var passport = require("../../config/passport");
var LocalStrategy = require("passport-local").Strategy;

router.post('/login', passport.authenticate("local"), function (req, res) {
    console.log("Yay! You are logged in");
    const user = {
        id: req.user._id,
        username: req.user.username,
        score: req.user.score,
        stocks: req.user.stocks
    }
    console.log(user)
    res.status(200).json({ sucess: true, msg: "Successfully loggen in!", user: user })
});

router.post('/signup', function (req, res) {
    if (!req.body.username || !req.body.password) {
        res.json({ success: false, msg: 'Please pass username and password.' });
    } else {
        var newUser = new User({
            username: req.body.username,
            password: req.body.password
        });
        // save the user
        newUser.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'Username already exists.' });
            }
            res.json({ success: true, msg: 'Successful created new user.' });
        });
    }
});

router.get("/populated", (req, res) => {
    console.log("Populated route")
    User.find({ _id: req.user._id })
        .populate("stocks")
        .then(dbPopulated => {
            console.log(dbPopulated)
            res.json(dbPopulated);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/logout", (req, res) => {
    console.log("Logout user")
    User.find({ _id: req.user._id })
    req.logout();
    res.redirect('/')
})


module.exports = router;