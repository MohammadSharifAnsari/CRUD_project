

const userModel=require('../models/userschema.js');
const bcrypt=require('bcrypt');
//its behave like a table

exports.createuser=async function(req,res,next){

    try{

    let {email,name,password}=req.body;
    password= await bcrypt.hash('password',10);    


           const userdocs=await userModel.create({name:name,email:email,password:password});
return res.status(200).json({
    success:true,
    message:"user is created",
    user:userdocs
})

    }
    catch(err){
return res.status(401).json({

    success:false,
    message:err.message

})


    }


}
exports.getuser=async function(req,res,next){

    const {email}=req.body;
    try{

     const userdocs=await userModel.findOne(req.body).select('+password');
console.log(userdocs);
return res.status(202).json({
    success:true,
    user:userdocs
})

    }
    catch(err){

        return res.status(401).json({

            success:false,
            message:err.message
    })
    }


}
exports.deleteuser=async function(req,res){

    try{
        const {email}=req.body;

       const userdocs= await userModel.deleteOne({email});
       
       
       console.log(userdocs);
res.status(200).json({
    success:true,
    userdocs:userdocs
})

    }
    catch(err){
        return res.status(401).json({

            success:false,
            message:err.message
    })
    }


}

 exports.update=async (req,res)=>{

try{
const id=req.params.id;
let {name,email,password}=req.body;
password=await bcrypt.hash('password',10);

    const userdocs=await userModel.findOneAndUpdate({_id:id},{
        name:name,
        email:email,
        password:password
    });

  return res.status(203).json({
    success:true,
    message:"user upodated"
  })



}

    catch(err){
        return res.status(401).json({

            success:false,
            message:err.message
    })
    }



}
