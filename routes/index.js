const express=require('express');

//create model object
const Movie=require('../models/movie');

//create router object
const route=express.Router();

//Enpoint to return all movies present in database
route.get('/', async(req,res)=> {
    try{
        const movies=await Movie.find();
        res.json(movies);
    }
    catch(error){
        res.send('Error '+error);
    }
});

//Create method to insert movie into database
route.post('/', async(req,res)=> {
    const movie=new Movie({
        name:req.body.name,
        img:req.body.img,
        summary:req.body.summary
    })

    try{
        const data=await movie.save();
        res.json(data);
    }
    catch(error){
        res.send('Error '+error);
    }
});

//Get particular movie by id
route.get('/:id', async(req,res)=> {
    try{
        const movie=await Movie.findById(req.params.id);
        res.json(movie);
    }
    catch(error){
        res.send('Error '+error);
    }
});

//Update method to change data by id
route.patch('/:id', async(req,res)=> {
    try{
        const movie=await Movie.findById(req.params.id);
        movie.img=req.body.img;
        movie.summary=req.body.summary;
        
        const data=await movie.save();
        res.json(data);
    }
    catch(error){
        res.send('Error '+error);
    }
});

//delete method to delete movie my id
route.delete('/:id', async(req,res)=> {
    try{
        const movie=await Movie.findById(req.params.id);
    
        const data=await movie.remove();
        res.json(data);
    }
    catch(error){
        res.send('Error '+error);
    }
});

//export module
module.exports=route
