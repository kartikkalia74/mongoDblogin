const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {citySchema} = require('./location') ;

const locationSchema = new Schema({
    name:String,
    location:citySchema
})

const location = mongoose.model('location',locationSchema);

module.exports={location}