const db = require("../models");

// Defining methods for the stockController
module.exports = {
    findAll: function (req, res) {
        console.log(req.user);
        db.Lesson
            .find({})
            .then(dbLesson => res.json(dbLesson))
            .catch(err => res.status(422).json(err));
    }
}