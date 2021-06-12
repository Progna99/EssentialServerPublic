const app=require("express");
const shop = app.Router();

//New Shop Register Request
    shop.post('/shopsignin',(req,res,next)=>{

        const newShop = new customerSchema({
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

module.exports=shop;
