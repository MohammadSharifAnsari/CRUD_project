const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is compulsory'],
        maxLength:[20,'name length should less than 20'],
        minLength:[3,'name length should greater than 3'],
        trim:true
    },
    email:{
        type:String,
        required:[true,'email is must'],
        unique:[true,`email already exists`],
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:[true,'password is must'],
        select:false

        
    }
        
}, { timestamps: true });

module.exports=mongoose.model("user",userSchema);
