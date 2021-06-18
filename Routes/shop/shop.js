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

shop.get("/shoplogin/:userid",(req,res,next)=>{
        var id=req.params.userid;
        shopSchema.find({"username":id}).then(result =>{
                console.log(result[0].password);
                res.status(200).send(result[0].password); 
    });
});
    // Fetch All shop data for testing
    shop.get("/allshop",(req,res,next)=>{
        shopSchema.find({}).then( result =>{
            console.log(result);
            res.status(200).send(result); next();
        }).catch((err)=>{console.log(err)});
    });


module.exports=shop;
