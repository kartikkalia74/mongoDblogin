
let validate ={};

validate.name =(name,callback)=> {
    console.log(name)
    let checkName ={
        length:name.length>2,
        isString:typeof(name)==="string",
        specialChar:/\W/g.test(name)
    }

    const error = ()=>{
        let  endName = {}; 
        if(!checkName.length){
            endName.length='length must be greater than 2';
        }
        if(!checkName.isString){
            endName.isString='endname must be string'
        }
        if(checkName.specialChar){
            endName.specialChar='no special character allows'
        }
            console.log(checkName,'checkname')    
        return endName ;
    }
   
    let errorMessage = checkName.length&&checkName.isString&&!checkName.specialChar?null:error();
    let isValid = checkName.length&&checkName.isString&&!checkName.specialChar?true:false;

    
  
    console.log(isValid,'isvalidll')

    callback(isValid,errorMessage)
}

validate.password = (password,callback)=>{
    console.log(password,'password')
        let checkPassword ={
            length:password.length>8,
            uppercase:/[A-Z]/g.test(password),
            lowercase:/[a-z]/g.test(password),
            specialCharacter:/[!@#$%^&*()_+]/g.test(password),
            result:function(){
                console.log('password')
                let message ={}
                 if(!this.length){ message.length='require length between 8 and 30 '}
                 if(!this.uppercase){message.uppercase='must contain uppercase character'}
                 if(!this.lowercase){message.lowercase='must contain lowercase character'}
                 if(!this.specialCharacter){message.specialCharacter='must contain special character'}
                 console.log(message,'mm')
                 return message
             }   
        }
        console.log(checkPassword)
        let isValid = checkPassword.length&&checkPassword.lowercase&&checkPassword.uppercase&&checkPassword.specialCharacter?true:false;
        let errorMessage = isValid?null:checkPassword.result();
        console.log(errorMessage,'kk')
        console.log(isValid)
        callback(isValid,errorMessage)
}
validate.username = (username) =>{
    let checkUsername  = {};
checkUsername.isString=typeof(username)==="string";
checkUsername.length=username.trim().length>=8&&username.trim().length<=30;
checkUsername.Uppercase =/[A-Z]/.test(username);
checkUsername.lowercase =/[a-z]/.test(username);
checkUsername.special =/[!~$%^&*+-_?#]/.test(username)
checkUsername.domain  =username.split('.')[1]!== undefined &&['com','yahoo'].includes(username.split('.')[1])?true:false;
}
validate.mobile = (mobileNo)=>{
    const regularExp = /^\d{10}/g;
    const mobileObject= {};
     mobileObject.isValid = typeof(mobileNo)==="string"&&regularExp.test(mobileNo)?true:false;
     mobileObject.errorMessage =  mobileObject.isValid?null:'mobileNo require 10 digits';
     
    return mobileObject
}

module.exports = validate;