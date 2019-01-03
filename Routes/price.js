const express = require('express');
const Route  = express.Router();
const {price} = require('../model/itemPrice');

Route.post('',(req,res)=>{
    console.log(req.body,'kp')
    const pr =[{  "item" : "abc", "price" : 10, "quantity" : 2},
	{  "item" : "jkl", "price" : 20, "quantity" : 1},
	{  "item" : "xyz", "price" : 5, "quantity" : 10},
	{  "item" : "xyz", "price" : 5, "quantity" : 20},
	{  "item" : "abc", "price" : 10, "quantity" : 10}
	]
    price.insertMany(pr).then(result=>res.send(result))
})

Route.get('',(req,res)=>{
    
    price.aggregate([{$group:{
        _id:{month:{$month:"$date"},day:{$dayOfMonth:"$date"},year:{$year:"$date"}},
        price:{$push:"$price"},
        totalprice:{$sum:{$multiply:["$price","$quantity"]}}
    }}]).then((result)=>res.send(result))
})


module.exports = Route;