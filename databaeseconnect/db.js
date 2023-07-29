
const mongoose=require('mongoose');

const connectedtodb=async()=>{

try{

       await mongoose.connect(process.env.DB_URL);
       console.log(`connected to database ${process.env.DB_URL}`);

}
catch(err){

    conasole.log("ERRR=>",err);
}


}
module.exports=connectedtodb;