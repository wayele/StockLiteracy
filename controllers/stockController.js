const db = require("../models");

// Defining methods for the stockController
module.exports = {
    add: function (req, res) {
        db.Stock
            .put(req.body)
            .then(dbStock => res.json(dbStock))
            .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        console.log(req.user);
        db.Stock
            .find({})
            .then(dbStock => res.json(dbStock))
            .catch(err => res.status(422).json(err));
    },
    // populate: function (req, res) {
    //     db.User
    //         .find({})
    //         .populate("stocks")
    //         .then(dbPopulated => {
    //             console.log(dbPopulated)
    //             res.json(dbPopulated);
    //         })
    //         .catch(err => res.status(422).json(err));
    // }
    // update: function (req, res) {
    //     db.Stock
    //         .put({ _id: req.params.id })
    //         // .then(dbStock => dbStock.remove())
    //         .then(dbStock => res.json(dbStock))
    //         .catch(err => res.status(422).json(err));
    // }
}