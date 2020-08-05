const router = require("express").Router();
const User = require("../../models/User");
var passport = require("../../config/passport");
const { response } = require("express");
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
    // User.findOne({
    //     username: req.body.username
    // }, function (err, user) {
    //     console.log("This is my: " + user)
    //     if (err) throw err;

    //     if (!user) {
    //         res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
    //     } else {
    //         console.log("++++GOT TO HERE++++");
    //         // check if password matches
    //         user.comparePassword(req.body.password, function (err, isMatch) {
    //             console.log("Are we here????")
    //             if (isMatch && !err) {
    //                 console.log("Yay! You are logged in");
    //                 res.status(200).json({ sucess: true, msg: "Successfully loggen in!" })
    //                 // res.redirect('/stocks')
    //             } else {
    //                 res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
    //             }
    //         });
    //     }
    // });
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

// This populate works but it is populating users instead of stocks (needs more looking into)

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


module.exports = router;