const router = require("express").Router();
const LoginRoute = require("./users");
const stockRoute = require('./stocks');
const lessonRoute = require('./lesson');

//routes
router.use("/", LoginRoute);
router.use('/stocks', stockRoute);
router.use("/", lessonRoute)

module.exports = router;
