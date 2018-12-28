const validator = require('validator');
const bcrypt = require('bcrypt-nodejs');

const helphers ={};
helphers.validateEmail = (email)=> validator.isEmail(email);

helphers.hash = (password) =>{
    return bcrypt.hashSync(password,null)
}

helphers.comparePassword = (password,hash)=>{
   return bcrypt.compareSync(password,hash)
}

module.exports=helphers;