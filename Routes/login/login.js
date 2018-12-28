const express = require('express');
const Route = express.Router();
const {user} = require('../../model/user');
const helphers = require('../../helphers/helphers');


Route.post('',(req,res)=>{
    const {username,password} = req.body;
   console.log('inner')
    user.findOne({username:username},{password:1})
    .then((result)=>{
        console.log('winn')
        console.log(result)
        if(result && helphers.comparePassword(password,result.password)){
            return res.send('success')
        }
            return res.send(`no user exists with ${username}`)
    }
    )
    .catch((err)=>{
        console.log(err,'err')
        return res.send(err)})
})

/* Route.post('user',(req,res)=>{
    
    user.find({},{username:req.query.username})
    .then((result)=>
    res.send(result))
    .catch((err)=>res.send(err))
})
 */
Route.put('/user/:mobile',(req,res)=>{
    console.log('login')
    const {mobile} = req.params;
    const {username} = req.body;
    console.log(mobile);
    user.findOneAndUpdate({username:username},{mobile},{new:true})
    .then((result)=>
    res.send(result))
    .catch((err)=>res.send(err))
})

Route.delete('/user',(req,res)=>{
    const {username} = req.body;
    user.findOneAndRemove({username:username})
    .then((result)=>res.send(result))
    .catch((err)=>res.send(err))
})
module.exports= Route;