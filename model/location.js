const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const pointSchema = new Schema({
    type:{type:String,
            required:true
        },
        coordinates:{type:[Number]
        }
    
})



module.exports ={ pointSchema};
