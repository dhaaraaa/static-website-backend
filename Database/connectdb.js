const mongoose = require('mongoose');

require('dotenv').config();

const mongoose_url = process.env.MONGOOSE_URL;
const connectdb = async() =>{
    try{
       await mongoose.connect(mongoose_url)
        console.log("mongodb connected successfully")
    }catch(err){
        console.log(err,"error") 
    }
    
}

module.exports=connectdb