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
}