const app=require("express");
const shop = app.Router();
const mongoose=require("mongoose");
const shopSchema= require("../../dbmodel/shop");

//New Shop Register Request
    shop.post('/shopsignin',(req,res,next)=>{

        const newShop = new shopSchema({
                name : req.body.name,
                address: req.body.address,
                phonenumber: req.body.phonenumber,
                username: req.body.username,
                password:req.body.password
        });
        console.log(req.body); 
        console.log(newShop);
        res.status(200).send(newShop);
        next();
});

customer.get("/shoplogin/:userid",(req,res,next)=>{

        shopSchema.find({"username":userid}).then(result =>{
                console.log(result.password);
        res.status(200).send(result.password);        
        });       
        next();
    });
    
    // Fetch All shop data for testing
    customer.get("/allshop",(req,res,next)=>{
        shopSchema.find({}).then( result =>{
            console.log(result);
            res.status(200).send(result); next();
        }).catch((err)=>{console.log(err)});
    });


module.exports=shop;
