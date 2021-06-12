const app=require("express");
const customer = app.Router();

customer.get("/customer",(req,res,next)=>{
    const msg="Customer Route it is";
    res.send(msg);
    next();
});




module.exports=customer;
