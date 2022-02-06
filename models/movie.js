const mongoose=require('mongoose');

//specifying movie database schema
const movieSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    img:{
        type:String,
    },
    summary:{
        type:String,
        required:true,
    }
});

//export module
module.exports=mongoose.model('Movie',movieSchema);