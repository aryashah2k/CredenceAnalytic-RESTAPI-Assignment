const express=require('express');
const mongoose=require('mongoose');

//initialize database connection url
const dbURL= 'mongodb://localhost/MoviesDB'

//initialize app
const app=express();

//connect to db using mongoose
mongoose.connect(dbURL,{useNewUrlParser:true});

//create connection object
const con=mongoose.connection

//Log db connection
con.on('open',function(){
    console.log('Connected to database')
});

//to recognize input request as JSON
app.use(express.json());

//create and use router object from routes folder
const movieRouter=require('./routes/index');
app.use('/movies',movieRouter);

//listen on port 3000
app.listen(3000,()=>{
    console.log('Server up and running on port 3000');
});
