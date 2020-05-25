const mongoose = require('mongoose');

//schema
const schema =  new mongoose.Schema({
    genreName: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 20
    }
});

//model
const Genre = mongoose.model('Genre',schema);

//get all genre
async function getGenre(){
    return await Genre.find();
}
//getbyid
async function getGenreById(id){
    const genre = await Genre.findById(id);
    if(!genre) return;
    return genre; 
}
//add new
async function addGenre(newGenre){
    const genre = new Genre({
        genreName: newGenre.genreName
    });
    const result = await genre.save();
    return result;
}

//delete one
async function deleteGenre(id){
    return await Genre.deleteOne({_id: id});
}
//update one
async function update(id,newGenre){
    const genre = await Genre.findById(id);
    if(!genre) return;
    genre.genreName = newGenre.genreName;
    return await genre.save();
}
//export all methods
module.exports = {
    getGenre: getGenre,
    getbyid: getGenreById,
    addGenre: addGenre,
    deleteGenre: deleteGenre,
    update: update,
    genreSchema: schema,
    Genre: Genre
}