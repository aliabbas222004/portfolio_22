const {Schema,model}=require('mongoose');
const { type } = require('os');
const userContactSchema=new Schema({
    
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    }

},{timestamps:true});


const userContact=model('activerequest',userContactSchema);

module.exports=userContact;