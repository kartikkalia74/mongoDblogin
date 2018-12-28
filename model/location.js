const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const citySchema = new Schema({
    type:{type:String,
            enum:["Point"],
            required:true
        },
        coordinates:{type:[Number],
        required:true},
    
})
const city = mongoose.model('city',citySchema)

module.exports ={ citySchema};
