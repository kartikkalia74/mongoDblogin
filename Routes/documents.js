const express = require('express');
const Route= express.Router();
const multipart = require('connect-multiparty');
const multipartMiddleWare =multipart();
const fs = require('fs');
Route.post('',multipartMiddleWare,(req,res)=>{
    const {path,size,name,headers} = req.files.documents;
    const possibleFileTypes =['pdf,ppt,doc,xls','msword','vnd.ms-powerpoint','vnd.ms-powerpoint'];
    const sizeInMb = parseFloat(size)/(1048576);
    const contentType = headers['content-type'].split('/');
    const [dataType,fileType] = contentType
    console.log(fileType,'filetype')
    console.log(dataType,'dataType')
    console.log(possibleFileTypes.indexOf(fileType),'indexd')
    if(dataType==="application"){
        if(possibleFileTypes.indexOf(fileType)>-1){
            if(sizeInMb<3){
                fs.readFile(path,function(err,data){
                    if(err) throw err;
                    
                    const newPath = `${__dirname}/uploads/documents/${name}`;
                    fs.writeFile(newPath,data,function(err){
                        if(err) throw err;
                        res.send('success')
                    })
                })
            }else{
                res.send({error:'size exceeded'})
            }
            
            
        }else{res.send({error:'invalid file type'})}
        }else{
            res.send({error:'invalid document'})
        }
       
    
    console.log(req.files)
})

module.exports = Route;