const express = require('express');
const Route = express.Router();
const {location} = require('../../model/city');
//near points
Route.get('/location',(req,res)=>{
//grt the near points from current location
location.find({location:{
    $near:{
        $geometry:{
            type:'point',
            coordinates:[ 20,41]
        },$maxDistance:10000000
    }
}}).then((results)=>res.send(results))
    

})
//get the location point near to current point
Route.get('',(req,res)=>{
    location.aggregate([{$geoNear:
        {near:{
            type:'point',
            coordinates:[20,41]
        },distanceField:"dist.calculated",
             maxDistance:20000000,
             sperical:true
    }},{$sort:{'dist.calculated':1}},{$limit:1},{$project:{name:1,dist:1}}])
    .then((result)=>res.send(result))
});
module.exports =Route