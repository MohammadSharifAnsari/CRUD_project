
const express=require('express');
const router = express.Router();
const {createuser,getuser, deleteuser,update}=require('../controller/usercontrol.js');

router.post('/createuser',createuser);
router.get('/getuser',getuser);
router.post('/deleteuser',deleteuser);
router.put('/update/:id',update)




module.exports=router;