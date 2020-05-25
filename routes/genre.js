const express =  require('express');
const { getGenre, getbyid, addGenre, deleteGenre, update } = require('../database/genre');
const route = express.Router();
const joi = require('joi');

//validating request
function validate(genre){
    const schema = {
        genreName: joi.string().min(2).max(255).required()
    }
    return joi.validate(genre,schema);
}

//get all genre
route.get('/',async (req,res)=>{
    try{
        const genres = await getGenre();
        res.send(genres)
    }
    catch(err){
        res.send(err.message);
    }
});
//get genre by id
route.get('/:id',async (req,res)=>{
    try{
        const genre = await getbyid(req.params.id);
        if(!genre) res.status(400).send(`No genre found with id: ${req.params.id}`);
        res.send(genre);
    }
    catch(err){
        res.send(err.message);
    }
});
//delete by id
route.delete('/:id',async (req,res)=>{
    try{
        const result = await deleteGenre(req.params.id);
        if(result.n==0) res.status(400).send(`No genre found with id:${req.params.id}`);
        res.send(result);
    }
    catch(err){
        res.send(err.message);
    }
});
//update
route.put('/:id',async (req,res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    try{
        const result = await update(req.params.id,req.body);
        if(!result) res.status(400).send(`No genre found with id:${req.params.id}`);
        res.send(result);
    }
    catch(err){
        res.send(err.message);
    }
   

});
//create
route.post('/',async (req,res)=>{
    try{
        const {error,value} = validate(req.body);
        if(error) res.status(400).send(error.details[0].message);
        const result = await addGenre(req.body);
        res.send(result);
    }
    catch(err){
        res.send(err.message);
    }
    
});



module.exports = route;

