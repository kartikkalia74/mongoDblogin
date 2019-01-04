const express = require('express');
const Route = express.Router();
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
const fs = require('fs');

Route.post('',multipartMiddleware,(req,res)=>{
    console.log(req.files)
    const {headers,size,path,name} = req.files.video;
   
    const contentType = req.files.video.headers['content-type'].split('/');
    console.log(contentType)
    const [dataType,videoType] = contentType;
    if(dataType==="video"){
        const fileSize = req.files.video.size/1048576;
        
        if(fileSize<6){
            fs.readFile(req.files.video.path,function(err,data){
                let videoNameWithExtension = req.files.video.name;
                let videoName=videoNameWithExtension.split('.')[0]
                
                console.log(videoName,'videoname')
                const newpath= `${__dirname}/uploads/${videoName}.mp4`;
        
                fs.writeFile(newpath,data,function(err){
                    if(err) throw err;
                    res.send('success')
                })
            }
                )
        }else{res.send({error:"size exceeded"})}
    }else{res.send({error:'invalid file format'})}
    
   
    

})
module.exports = Route;