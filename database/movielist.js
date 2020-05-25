const mongoose = require('mongoose');
const { genreSchema} = require('./genre');
//schema
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        trim: true,
        minlength: 0,
        maxlength: 255
    },
    genre: {
        type: genreSchema,
        require: true
    },
    numberInStock:{
        type: Number,
        min: 0,
        max: 255

    },
    dailyRantalRate:{
        type: Number,
        min: 0
    }
});
//model
const Movie = mongoose.model('Movie',movieSchema);
const Genre = mongoose.model('Genre',genreSchema);


//get movies
async function getMovies(){
    return await Movie.find();
}
//getById
async function getMoviesById(id){
    const movie = await Movie.findById(id);
    if(!movie) return;
    return movie;
}
//delete
async function deleteMovie(id){
    return await Movie.deleteOne({_id:id});
}
//addNew
async function addNewMovie(mov){
    //console.log('here from add');
    const genre = await Genre.findById(mov.genreId);
    //console.log(genre);
    const movie = new Movie({
        title: mov.title,
        genre: {
            _id: genre._id,
            genreName: genre.genreName
        },
        numberInStock: mov.numberInStock,
        dailyRantalRate: mov.dailyRantalRate
    });
    //console.log(movie);
    const result =  await movie.save();
    return result;
}
//update movies


module.exports = {
    movieSchema: movieSchema,
    Movie: Movie,
    getMovies: getMovies,
    getMoviesById: getMoviesById,
    deleteMovie: deleteMovie,
    addNewMovie: addNewMovie

}