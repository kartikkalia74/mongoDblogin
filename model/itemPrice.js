const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const priceSchema = new Schema({
    item:{type:String},
    price:{type:Number},
    quantity:{type:Number},
    date:{type:Date,default:Date.now}
})
const price = mongoose.model('price',priceSchema);

module.exports ={price};