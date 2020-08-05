const router = require("express").Router();
const stockController = require("../../controllers/stockController");
const userController = require("../../controllers/userController");

// Matches with "/api/stocks"
router.route("/")
  .get(stockController.findAll)
  .post(stockController.add)

// Matches with "/api/stocks/sell"
router
  .route("/sell")
  .put(userController.sell)

// Matches with "/api/stocks/buy" for submit stocks
router
  .route("/buy")
  .put(userController.update)

// to buy buy id??
// router
//   .route("/buy/:id")
//   .put(userController.update)

// router
//   .route("/populated")
//   .get(stockController.populate)


module.exports = router;
