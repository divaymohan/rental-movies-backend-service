const mongoose = require('mongoose');

//schema
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true,
        trim: true,
    },
    contectNumber: {
        type: Number,
        required: true,
        min: 0000000000,
        max: 9999999999
    },
    isGold:{
        type: Boolean,
        default: false
    }
});
//model
const Customer = mongoose.model('Customer',customerSchema);
//get
async function getCustomer(){
    const customers = await Customer.find();
    return customers;
}
//getbyid
async function getCustomerById(id){
    const result = await Customer.findById(id);
    return result;
}
//delete
async function deleteCustomer(id){
    const result = Customer.deleteOne({_id: id});
    return result;
}
//update
async function updateCustomer(id,cust){
    const customer = await Customer.findById(id)
    if(!customer) return;
    if(cust.name){
        customer.name = cust.name;
    }
    if(cust.contectNumber){
        customer.contectNumber = cust.contectNumber;
    }
    if(cust.isGold){
        customer.isGold = cust.isGold;
    }
    return await customer.save();
}


//addnew
async function addNewCustomer(cust){
    const customer = new Customer({
        name: cust.name,
        contectNumber: cust.contectNumber,
        isGold: cust.isGold
    });
    const result =  await customer.save();
    return result;
}

module.exports = {
    customerSchema: customerSchema,
    Customer: Customer,
    addNewCustomer: addNewCustomer,
    getCustomer: getCustomer,
    getCustomerById:getCustomerById,
    updateCustomer: updateCustomer,
    deleteCustomer: deleteCustomer
}
