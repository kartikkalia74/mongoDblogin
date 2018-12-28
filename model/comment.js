const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    author:{type:mongoose.Schema.Types.ObjectId, required:true},
    comment:{type:String,required:true}
})



const commentModel = mongoose.model('comment',commentSchema);

module.exports = {commentModel}