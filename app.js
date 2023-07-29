
require('dotenv').config();
const connectedtodb=require('./databaeseconnect/db.js');
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const router=require('./routes/route.js');

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

connectedtodb();

app.use('/',router);

module.exports=app;

