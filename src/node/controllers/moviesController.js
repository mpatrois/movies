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

function update(req, res){
    var id = parseInt(req.params.id);
    let movie = movies.find((movie) => movie.id === id);
    const newMovieData = JSON.parse(req.body.movie_data);
    if(movie !== undefined){
        movie.title = newMovieData.title,
        movie.year = newMovieData.year,
        movie.lang = newMovieData.lang,
        movie.director = newMovieData.director,
        movie.synopsis = newMovieData.synopsis,
        movie.genre = newMovieData.genre
        movie.posterPath = req.file ? '/' + req.file.path : movie.posterPath
        res.json(movie);
    } else {
        res.status(404).json(`Ce film n'existe pas`);
    }
}

function store(req, res){
    const maxId = Math.max(...movies.map((movie)=>movie.id));
    const newMovieData = JSON.parse(req.body.movie_data);
    const newMovie = {
        id: maxId+1,
        title: newMovieData.title,
        year: newMovieData.year,
        lang: newMovieData.lang,
        director: newMovieData.director,
        synopsis: newMovieData.synopsis,
        genre: newMovieData.genre,
        posterPath: req.file ? '/' + req.file.path : undefined
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
    deleteMovie,
    update
}