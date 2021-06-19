const app=require("express");
const order = app.Router();
const orderSchema=require('../../dbmodel/order');
const shopSchema=require('../../dbmodel/shop');

 // 4 shop button in app will give shop names those are static values
  order.post('/submitorder/:shopname',(req,res,next)=>{
        var shop=req.params.shopname;
        const neworder = new orderSchema({
            customername: req.body.customername,
            customeraddress: req.body.customeraddress,
            customerphone: req.body.customerphone,
            shopname: shop,
            item:req.body.item
        });
        console.log(req.body);
        console.log(neworder);
        neworder.save().then(()=>{
            res.status(200).send("Successfully Saved");
            next();
        }).catch(err=>{console.log(err)});
  });
    // Order display for approval or just show orders for specific shop
    order.get("/approval/:shopmail",(req,res,next)=>{
        var shopid=req.params.shopmail;
        shopSchema.find({"username":shopid}).then( firstresult =>{
            orderSchema.find({"shopname":firstresult[0].name}).sort({_id:-1}).limit(1)
            .then((result)=>{
                 console.log(result[0]);
                 res.status(200).send(result[0]);
                 next();
            });         
        });    
    });
    order.get("/allorder",(req,res,next)=>{
        orderSchema.find({}).then((result)=>{
             console.log(result[0]);
             res.status(200).send(result[0]);
             next();
        });         
    });

module.exports = order;