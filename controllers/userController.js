const db = require("../models");

// Defining methods for the userController
module.exports = {
  find: function (req, res) {
    db.User
      .findOne(req.params.username)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User
      .create(req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  // changed here
  update: function (req, res) {
    console.log("user controller update body")
    console.log(req.body);
    console.log("user controller update user")
    console.log(req.user);
    db.User
      .findOneAndUpdate({ _id: req.user._id }, { $push: { stocks: req.body } }, { new: true })
      .then(dbUSer => res.json(dbUSer))
      .catch(err => res.status(422).json(err));
  },

  sell: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.user._id }, { stocks: [] }, { new: true })
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }
};
