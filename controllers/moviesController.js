var movieModel = require("../models/moviesModel");

exports.index = function (req, res, next) {
  const allMovies = movieModel.getAllMovies();
  const allGenres = movieModel.getAllMoviesGenre();
  //   res.send(allMovies);
  // res.render("file", dataToShow) // html
  // res.render("sendAllMovies", dataToShow) // html
  // res.render("index", { title : "Nigeria"})
  res.render("sendAllMovies", { movies: allMovies, genres: allGenres });
};
exports.indexGenre = function (req, res, next) {
  const allMoviesGenre = movieModel.getAllMoviesGenre();
  res.send(allMoviesGenre);
};

// Retrieve the details for movie with id
exports.getMovieWithID = function (req, res, next) {
  const { id } = req.params;
  const theMovie = movieModel.getMoviesWithID(Number(id));
  const allGenres = movieModel.getAllMoviesGenre();

  // res.send(theMovie);
  res.render("showMovieWithId", {
    id: id,
    movies: theMovie,
    genres: allGenres,
  });
  // res.render("showMovieWithId", { movie : theMovie, genres : allGenres})
};
exports.search = function (req, res, next) {
  console.log(req.query);
  const { id, genre, title } = req.query;
  let theMovies;

  if (id) {
    theMovies = movieModel.getMoviesWithID(Number(id));
  }
  if (genre) {
    theMovies = movieModel.getMoviesWithGenre(genre);
  }
  if (title) {
    theMovies = movieModel.getMoviesByTitle(title);
  }
  const allGenres = movieModel.getAllMoviesGenre();
  // res.send(theMovie);
  res.render("showMovieSearch", {
    movies: theMovies,
    genres: allGenres,
    query: id ? id : genre ? genre : title ? title : "",
  });
};
