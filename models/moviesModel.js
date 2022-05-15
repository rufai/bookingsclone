var moviesDB = require("../database/movies")

exports.getAllMovies = function(){
    return moviesDB.movies
}
exports.getAllMoviesGenre = function(){
    return moviesDB.genres
}
exports.getMoviesWithID = function(id){
    return moviesDB.movies.filter(movie => movie.id === id)
}
exports.getMoviesWithGenre = function(genre){
    return moviesDB.movies.filter(movie => movie.genres.includes(genre) )
}
exports.getMoviesByTitle = function(title){
    return moviesDB.movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()) )
}