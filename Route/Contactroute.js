const express = require('express');
const data = require('../model/contactmodel');
const route = express.Router();


// Define the route for GET request
route.get('/msg', (req, res) => {
    res.send("Data sent successfully");
});
// save component
route.post('/getmessage', async (req, res) => {
    const {fname , lname , email , subject , message} = req.body
    if(fname && lname && email && subject && message){
        const saveData = await data.create({fname,lname , email , subject , message})
        await saveData.save()
    }else{
        console.log("data not received")
    }
    
    console.log(req.body);
    
});

// Export the route so it can be used in the main app
module.exports = route;
