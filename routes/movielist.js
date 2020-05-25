const Joi = require('joi');
const {getMovies,getMoviesById,deleteMovie,addNewMovie,movieSchema} = require('../database/movielist');

const express = require('express');
const route = express.Router();

function validate(movie){
    const schema = {
        title: Joi.string().min(3).max(255).required(),
        genreId: Joi.string(),
        numberInStock: Joi.number().min(0).max(255),
        dailyRantalRate: Joi.number().min(0)
    }
    return Joi.validate(movie,schema);
}
route.get('/',async (req,res)=>{
    try{
        const movies = await getMovies();
        return res.send(movies);
    }catch(err){
        res.send(err);
    }
});
route.get('/:id',async (req,res)=>{
    try{
        const result =await getMoviesById(req.params.id);
        res.send(result);

    }
    catch(err){
        res.send(err.message);
    }
});
route.post('/',async (req,res)=>{
    const {error} = validate(req.body);
    if(error) res.status(400).send(error.details[0].message);
    try{
        console.log('i am going to add..');
        const result = await addNewMovie(req.body);
        res.send(result);
    }
    catch(err){
        res.send(err);
    }
});
route.delete('/:id',async (req,res)=>{
    try{
        const result = await deleteMovie(req.params.id);
        if(result.n==0) res.status(400).send(`no element found with id: ${req.params.id}`);
        else res.send(result);
    }
    catch(err){
        res.send(err.message);
    }
});




module.exports = route;