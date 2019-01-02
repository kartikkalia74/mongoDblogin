const express = require('express');
const Route = express.Router();
const {location} = require('../../model/city');

Route.get('',(req,res)=>{


    location.create(req.body)
    .then(()=>{
         location.find({location:{
            $geoIntersects:{
                $geometry:{
                type:'Point',
                coordinates:[ -79.72211,10.67995] 
                }
            }
        }
    }
        ,function(err,response){
            if(err){console.log(err)}
            console.log(JSON.stringify(response,0,2))
        }
    )
    })
    .catch()
   })



module.exports =Route