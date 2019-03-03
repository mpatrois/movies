var movies = require('../data/movies')
 
function index(req, res){
    let moviesResults = movies.filter((movie) => {
        if(req.query.director) {
            return movie.director.name.toLowerCase().includes(req.query.director.toLowerCase())
        }
        if(req.query.title) { 
            return movie.title.toLowerCase().includes(req.query.title.toLowerCase());
        }
        return true;
    })
    res.json(moviesResults); 
}

function show(req, res){
    var id = parseInt(req.params.id);
    let movie = movies.find((movie) => movie.id === id)
    if(movie !== undefined){
        res.json(movie);
    } else {
        res.status(404).json(`Ce film n'existe pas`);
    }
}

function store(req, res){
    const newMovie = {
        id: req.body.id,
        title: req.body.title,
        year: req.body.year,
        lang: req.body.lang,
        director: null,
        synopsis: req.body.synopsis,
        genre: req.body.genre
    }
    movies.push(newMovie);
    res.json(newMovie);
}

function deleteMovie(req, res){
    var deleteMovieID = parseInt(req.params.id);
    movies = movies.filter((movie) => {
        return parseInt(movie.id) !== deleteMovieID;
    })
    console.log("--->After deletion, movies list:\n" + JSON.stringify(movies, null, 4) );
    res.end( "Deleted movie: \n" + JSON.stringify(deleteMovieID, null, 4));
}

module.exports = {
    index,
    show,
    store,
    deleteMovie
}