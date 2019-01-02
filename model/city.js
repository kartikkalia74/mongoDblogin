const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {pointSchema} = require('./location') ;



const locationSchema = new Schema({
    name:String,
    location:pointSchema
})

const location = mongoose.model('location',locationSchema);
locationSchema.indexes({location:"2d"})
module.exports={location}