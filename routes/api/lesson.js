const router = require("express").Router();
const lessonController = require("../../controllers/lessonController");

// Matches with "/api/stocks/sell/:id"
router
    .route("/learn")
    .get(lessonController.findAll)

module.exports = router;
