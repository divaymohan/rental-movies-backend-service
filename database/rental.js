const mongoose =  require('mongoose');
const { movieSchema,Movie } = require('./movielist');
const { customerSchema,Customer } = require('./customer');

//schema--
        //customer
        //movie
        //ratelrate
        //dateout
        //datereturn
const rentalSchema =  mongoose.Schema({
    customer: {
        type: new mongoose.Schema({
            name: {
                type: String,
                minlength: 3,
                maxlength: 255,
                required:true,
                trim: true
            },
            contectNumber: {
                type: Number,
                min: 0000000000,
                max: 9999999999,
                required: true

            },
            isGold: {
                type: Boolean,
                default: false
            }
            
        })
    },
    movie: {
        type: new mongoose.Schema({
            title:{
                type: String,
                minlength: 3,
                maxlength: 255,
                require: true,
                trim: true
            },
            dailyRantalRate: {
                type: Number,
                min:0,
            }
        })
    },
    dateOut:{
        type: Date,
        default:Date.now
    },
    dateReturn: {
        type: Date
    },
    rentelRate:{
        type: Number,
        min: 0
    }
});

//model
const Rental =  mongoose.model('Rental',rentalSchema);

var date_diff_indays = function(date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(new Date());
    return Math.ceil((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
}


//get all list of rental
async function getRentals(){
    const rentals = await Rental.find();
    return rentals;
}
//get Rentals by id
async function getRentalById(id){
    const rental = await Rental.findById(id);
    if(!rental) return rental;
    return rental;
}
//add rentalid
async function addRental(newRental){
    const movie = await Movie.findById(newRental.movieId);
    if(!movie) return;
    const customer = await Customer.findById(newRental.customerId);
    if(!customer) return;
    const rental = new Rental({
        customer:{
            _id : customer._id,
            name: customer.name,
            contectNumber: customer.contectNumber,
            isGold: customer.isGold 
        },
        movie:{
            _id: movie._id,
            title: movie.title,
            dailyRantalRate: movie.dailyRantalRate
        },
        dateReturn: newRental.dateReturn
    });
    movie.numberInStock = movie.numberInStock-1;
    await movie.save(); 
    const result = await rental.save();
    return result;
}
//delete or close rental
async function closeRental(id){
    const rental = await Rental.findById(id);
    if(!rental) return;
    
    
    const pay = date_diff_indays(rental.dateOut);
    const returnObj = {
        moviename: rental.movie.title,
        pay: pay
    }        
    const movie = await Movie.findById(rental.movie._id);
    movie.numberInStock = movie.numberInStock+1;
    await movie.save();
    await Rental.deleteOne({_id: id});
    return returnObj;

}



//renew rental (update)


module.exports ={
    Rental: Rental,
    rentalSchema:rentalSchema,
    getRentals:getRentals,
    getRentalById:getRentalById,
    addRental: addRental,
    closeRental: closeRental
}