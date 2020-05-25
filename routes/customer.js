const mongoose = require('mongoose');
const joi = require('joi');

const {getCustomer,getCustomerById,deleteCustomer,updateCustomer,addNewCustomer,customerSchema,Customer} = require('../database/customer');
 
const express = require('express');
const route = express.Router();

//validate method
function validate(cust){
    const schema = {
        name: joi.string().min(3).max(255).required().trim(),
        contectNumber: joi.number().min(0000000000).max(9999999999).required(),
        isGold: joi.bool()
    }
    const result = joi.validate(cust,schema);
    return result;

}

//get
route.get('/',async (req,res)=>{
    try{
        const customers = await getCustomer();
        res.send(customers);
    }
    catch(err){
        res.send(err.message);
    }
});
//get by id
route.get('/:id',async (req,res)=>{
    try{
        const customer = await getCustomerById(req.params.id);
        res.send(customer);
    }
    catch(err){
        res.send(err.message);
    }
});
//delete
route.delete('/:id',async (req,res)=>{
    try{
        const result = await deleteCustomer(req.params.id);
        if(result.n == 0) return res.status(400).send(`No item found with id :: ${req.params.id}`);
        return res.send(result);
    }
    catch(err){
        res.send(err.message);
    }
});
//add new
route.post('/',async (req,res)=>{
    const {error,value} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    try{
        const result = await addNewCustomer(req.body);
        return res.send(result);
    }
    catch(err){
        res.send(err.message);
    }
});


module.exports = route;