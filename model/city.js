const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {pointSchema} = require('./location') ;




const locationSchema = new Schema({
    name:String,
    location:pointSchema
})
locationSchema.index({location:'2dsphere'})
const location = mongoose.model('location',locationSchema);

module.exports={location}