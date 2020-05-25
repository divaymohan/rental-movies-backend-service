const mongoose =  require('mongoose');
const genre = require('./routes/genre'); 
const movie = require('./routes/movielist');
const customers = require('./routes/customer');
const rental = require('./routes/rantal');
const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/movies/genre',genre);
app.use('/api/movies/movies',movie)
app.use('/api/movies/customers',customers);
app.use('/api/movies/rental',rental);

//connect to database
mongoose.connect('mongodb://localhost/playground')
    .then(()=> console.log('Database Connected.'))
    .catch(err=>console.error(err.message));

app.get('/',(req,res)=>{
    res.send(`i am from movie api`);
});

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`listening at port : ${port}`);
});
