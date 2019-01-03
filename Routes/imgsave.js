const express = require('express');
const Route = express.Router();
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart()
const fs = require('fs');
const im = require('imagemagick');

Route.post('',multipartMiddleware,(req,res)=>{
  
  
console.log('p',req.files.img.path,'gh',req.headers)
fs.readFile(req.files.img.path,function(err,data){
    if(err) throw err
  let imageName = req.files.img.name;  
    
  let newPath =__dirname+"/uploads/new/"+imageName;
  let thumbPath =__dirname+"/uploads/thumb/"+imageName;
  console.log(newPath);
  fs.writeFile(newPath,data,function(err){
      if(err)throw err
        im.resize({srcPath:newPath,
        dstPath:thumbPath,
    width:200},function(err,stdout,stderr){
        if(err) throw err;
        console.log('resize image to fit 200')
    })
  })
})
res.send('sucess')
})


module.exports= Route;