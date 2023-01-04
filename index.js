const mongoose = require("mongoose");
require('dotenv').config();

(async() =>{
    await mongoose.connect(process.env.DB_URL)
    console.log('Connection avec la base de données réussie')
    

})()

console.log(process.env.DB_URL)