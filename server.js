require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());



//routes 

app.use('/api', require('./routes/toDoListRouter'))


const URI = process.env.MONGODB_URL;
mongoose.connect(URI, err =>{
    if(err) throw err;
    console.log("connected to mongodb");
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log("Server is up and running on", PORT)
})