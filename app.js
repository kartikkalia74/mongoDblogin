const express = require('express');
const app = express();
const bodyParser = require('body-parser');


//require modules
const {mongoose} = require('./db/db')
const signup =require('./Routes/signup/signup');
const login = require('./Routes/login/login');
const helphers = require('./helphers/helphers');
const validate = require('./validate/validate');
const signupMiddleware = require('./signupMiddleware');
const post = require('./Routes/post/userPost');
const users = require('./signupMiddleware');
const comment = require('./Routes/comment/comment');
const {location} = require('./model/city');
//middleware 
app.use(bodyParser.json())


app.use('/signup',signup)
app.use('/login',login)
app.use('/users',post)
app.use('/',users)
app.use('/comment',comment)
app.use('',signupMiddleware)
app.post('/test',(req,res)=>{
    const {name,role} = req.body;
   location.create({name:'min',location:denver})
   .then(()=> location.findOne())
})
module.exports= app;