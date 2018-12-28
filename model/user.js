const mongoose = require('mongoose');
const helphers = require('./../helphers/helphers');
const Schema = mongoose.Schema;
const validate = require('./../validate/validate');
mongoose.set('useFindAndModify',false)
var userSchema = new Schema({
    firstname:{type:String,required:[true,'firstname required']},
    lastname:{type:String},
    username:{type:String,unique:true,require:[true,'username required'],
    validate:{
        validator:function(v){
            return helphers.validateEmail(v)
        },
        message:(props)=>`${props.value} is not valid username`
    }},
    password:{type:String,required:true,
        validate:{
            isAsync:true,
            validator:function(v,cb){
               validate.password(v,function(isvalid,errMessage){
                   let  msg = 'password must contain uppercase ,lowercase character and special character ';
                if(errMessage){
                    msg =Object.values(errMessage)[0]
                }
                  console.log(isvalid,'validater')
                    cb(isvalid,msg)
               })
            },
            message:'default error'
        }},
    mobile:{
        type:String,
        required:[true,'user phone no. required'],
        validate:{
            validator:function(v){
            return /^\d{10}$/g.test(v)
            },
            message:(props)=>`${props.value} is not valid phone no.`
        }
    },
    ishash:{type:Boolean,
                default:false}
    ,
    post:[{type:mongoose.Schema.Types.ObjectId, ref:'post'}]
},{
    toObject:{virtuals:true},
    toJSON:{virtuals:true}
})
userSchema.pre('save',function(next){
    const user = this;
    if(!user.ishash){
    user.password =helphers.hash(this.password)
    user.ishash =true;
    }
    next()
})
/* userSchema.virtual('name')
.get(function(){return `${this.firstname} ${this.lastname}`}) */

const  user = mongoose.model('user',userSchema);

module.exports= {user};
