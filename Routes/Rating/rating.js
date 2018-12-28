const {Rate} = require('../../model/Rating');
const {post} = require('../../model/post');
const rating = (req,res)=>{
    const {authorId,rating,postId} = req.body;
    const newRating = new Rate({author:authorId,rating:rating});
    newRating.save()
    .then((rating) => 
        post.findByIdAndUpdate(postId,{$push:{rating:rating._id}},{new:true},function(err,post){
            if(err) throw err;
            return res.send(post)
        })
    )
    .catch((err) => {
        console.log(err)
    });
}


module.exports =rating