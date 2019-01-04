const express = require('express');
const Route = express.Router();
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
const fs = require('fs');

Route.post('',multipartMiddleware,(req,res)=>{
    console.log(req.files)
    const {path,headers,size,name,type}=req.files.audio;
    const mb = parseFloat(size)/(1048576);
    console.log(mb)
    const contentType = headers['content-type'].split('/');
    const [dataType,fileType] =contentType;
    console.log(dataType)
    if(dataType==="audio"){
        if(mb<6){
            const nameWithoutextension=name.split('.')[0];
            console.log(type,'tyy')
            fs.readFile(path,(err,data)=>{
                if(err) throw err;
                const newPath = `${__dirname}/uploads/audio/${nameWithoutextension}.mp3`;
                fs.writeFile(newPath,data,function(err){
                if(err) throw err;
                res.send('success')
            })
        })
        }else{
            res.send({error:'size exceeded'})
        }
        
    }else{
        res.send({error:'invalid audio format'})
    }
    
})

module.exports=Route;