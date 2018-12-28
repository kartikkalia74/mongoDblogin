const express = require('express');
const Route = express.Router();

const {user} = require('../../model/user');
const {post} = require('../../model/post');
const Comment = require('../comment/comment');
const rating = require('../../Routes/Rating/rating')


//adding userPost to database
Route.post('/post',(req,res)=>{
    const {title,postContent,imageName,userId}  =req.body
    let userPost = new post({title,postContent,imageName,user:userId})

    userPost.save()
    .then((result)=>{
        console.log(result)
       return  user.findById(result.user,function(err,res){
           if(err) throw err;
            res.post.push(result._id)
            return res.save()
           
        })
        .then((user)=> res.send(user))
    })
})
// getting the post with comments and rating and user
Route.get('/post',(req,res)=>{
    const {postId} = req.query;
    post.findById(postId).populate('user').populate('comment').populate('rating')
    .then((post)=>res.send(post))
    .catch((err)=>res.send(err))
})
//getting  a post with user
Route.get('/post',(req,res)=>{
    const {id}= req.query;
    console.log(id)
    post.findById(id).populate({path:'user',select:'firstname lastname' })
    .catch(err=>res.send(err))    
    })

  //geting a list of post of user  
Route.get('/users',(req,res)=>{
    const {userId} = req.query;
    post.find({user:userId})
    .then(postLists =>res.send(postLists))
    .catch(err => console.log(err))
})
Route.post('/rating',rating)

Route.post('/comment',Comment)
module.exports = Route;