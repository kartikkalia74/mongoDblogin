const express = require('express');
const Route = express.Router();
const {user} = require('../../model/user');
const helphers = require('../../helphers/helphers');


Route.post('',(req,res)=>{
    const {firstname,lastname,password,username,mobile,confirm} = req.body;

    if(password!==confirm) return res.send('password not match');
    const newUser = new user({firstname,lastname,password:password,username,mobile})
    newUser.save()
    .then((result) => {
        res.send(result)
    }).catch((err) => {
       res.send(err)
    });
})

module.exports =Route;