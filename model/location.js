const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const pointSchema = new Schema({
    type:{type:String,
            required:true
        },
        coordinates:{type:[Number],
        index:'2d'}
    
})



module.exports ={ pointSchema};
