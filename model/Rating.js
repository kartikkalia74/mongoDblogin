const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RateSchema = new Schema({
    author:{type:mongoose.Schema.Types.ObjectId  },
    rating:{type:Number,min:1 ,max:5}
})


const Rate = mongoose.model('rate',RateSchema);
module.exports = {Rate}