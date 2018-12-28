const express = require('express');
const Route = express.Router();
const {commentModel} = require('../../model/comment');
const {post} = require('../../model/post');
const comment = (req,res)=>{
    console.log('req')
    const {authorId,comment,postId} = req.body;
    console.log(postId)
    const newComment = new commentModel({author:authorId,comment});
        newComment.save()
        .then((comment) =>post.findByIdAndUpdate(postId,{$push:{comment:comment._id}},{new:true},function(err,post){
            if(err) throw err;
           return res.send(post);
        }))
        .catch((err) => res.send(err))
}



module.exports = comment;