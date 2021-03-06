const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');



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
const price = require('./Routes/price');
const location = require('./Routes/geoLocation/geojson');
const imgSave = require('./Routes/imgsave');
const videoSave= require('./Routes/saveVideo');
const audio = require('./Routes/audio');
const docs = require('./Routes/documents');
//middleware 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.use('/signup',signup)
app.use('/login',login)
app.use('/users',post)
app.use('/',users)
app.use('/comment',comment)
app.use('',signupMiddleware)
app.use('/location',location)
app.use('/price',price)
app.use('/imgsave',imgSave)
app.use('/videoSave',videoSave)
app.use('/audio',audio)
app.use('/document',docs)

module.exports= app;