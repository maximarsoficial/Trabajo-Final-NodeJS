const { Schema, model } = require('mongoose');

const RiojanBarsSchema = Schema({
    name: {
        type: String
    },
    location: {
        type: String
    },
    photo_url: {
        type: String,
    },
    lat: {
        type: Number
    }, 
    long : {
        type: Number
    },
    description: {
        type: String
    },
    schedules: {
        type: String
    }
},
    {timestamps: true},
     {collection: 'riojanBars'});


module.exports = model('BaresRiojanos', RiojanBarsSchema);