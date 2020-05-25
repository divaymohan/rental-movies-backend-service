const joi = require('joi');
const {addRental,getRentals,getRentalById,closeRental} = require('../database/rental');

const express =  require('express');
const route = express.Router();

function validate(rental){
    const schema = {
        customerId: joi.string(),
        movieId: joi.string(),
        dateOut: joi.date(),
        dateReturn: joi.date(),
        rentalRate: joi.number().min(0)
    }
    return joi.validate(rental,schema);
}

route.get('/',async (req,res)=>{
    try{
        const rentels = await getRentals();
        res.send(rentels);
    }
    catch(err){
        res.send(err.message);
    }
});
route.get('/:id',async(req,res)=>{
    try{
        const rentel = await getRentalById(req.params.id);
        res.send(rentel);
    }
    catch(err){
        res.send(err.message);
    }
});

route.post('/',async (req,res)=>{
    const {error}= validate(req.body);
    if(error) res.status(400).send(error.details[0].message);
    try{
        const result = await addRental(req.body);
        res.send(result);
    }
    catch(err){
        res.send(err.message);
    }
});
route.delete('/:id',async (req,res)=>{
    try{
        const pay = await closeRental(req.params.id);
        if(!pay) res.status(400).send(`No movie found with id: ${req.params.id}`);
        res.send(pay);
    }
    catch(err){
        res.send(err.message);
    }
});

module.exports = route;