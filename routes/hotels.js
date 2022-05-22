// All routes of movies

var express = require("express"); // we are using express
var router = express.Router(); // we need the router on express
var hotelsController = require("../controllers/hotelsController")

// get all hotels
router.get("/", hotelsController.index);

// get all hotels reviews by the id
router.get("/:id/reviews", hotelsController.reviews);

module.exports = router;