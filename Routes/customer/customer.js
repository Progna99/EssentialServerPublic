const app=require("express");
const customer = app.Router();
const mongoose=require("mongoose");
const customerSchema= require('../../dbmodel/customer');

customer.get("/progna",(req,res,next)=>{
    const msg="YO";
    res.send(msg);
    next();
});

//User new sign in
customer.post('/customersignin',(req,res,next)=>{

    const newCustomer = new customerSchema({
            name : req.body.name,
            address: req.body.address,
            phonenumber: req.body.phonenumber,
            username: req.body.username,
            password:req.body.password
    });
    console.log(req.body); 
    console.log(newCustomer);
   //  res.send("Success");
  //  res.send(newCustomer);
    newCustomer.save().then(res.status(200).json({status:'Successfully Saved'})).catch();
});


//login

//will request a get request password willbe fetched via get request to ui and then by comparing password we will allow to login or logout
// customer.get("/customerlogin/:userid",(req,res,next)=>{

//     customerSchema.find({"username":userid}).then(result =>{
//             console.log(result.password);
//     res.status(200).send(result.password);        
//     });       
//    next();
// });

module.exports=customer;
