const mongoose = require('mongoose');
const { dbUri, mongooseOptions } = require('./config.db');

const dbConnetion = () =>{
    mongoose.connect(dbUri, mongooseOptions)
    .then(() => {
                  console.log("Successfully connect to MongoDB - proyecto final RiojanBars.");
                         // initial();
                 })
    .catch(err => {
                    console.error("Connection error", err);
                    process.exit();
                  });
 
};

module.exports = {
    dbConnetion
};
