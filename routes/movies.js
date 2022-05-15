// All routes of movies

var express = require("express"); // we are using express
var router = express.Router(); // we need the router on express
var moviesController = require("../controllers/moviesController");

// get all movies
router.get("/", moviesController.index);

// Retrieve the details of movie by id, genre or title
router.get("/search", moviesController.search);

// get all movies genres
router.get("/genres", moviesController.indexGenre);

// Retrieve the details for movie with id
router.get("/:id", moviesController.getMovieWithID);
module.exports = router;
