const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title:{type:String,required:true},
    postContent:{type:String,required:true},
    imageName:{type:String},
    user:{type:mongoose.Schema.Types.ObjectId ,ref:'user'},
    comment:[{type:mongoose.Schema.Types.ObjectId ,ref:'comment'}],
    rating:[{type:mongoose.Schema.Types.ObjectId,ref:'rate'}]
})


const post = mongoose.model('post',postSchema);
module.exports = {post}