const express=require("express");
const app= express();
const mongoose=require("mongoose");
app.use(express.json());
const shopRoutes = require("./Routes/shop/shop");
const customerRoutes = require("./Routes/customer/customer");
const orderRoutes= require("./Routes/order/order");
var port = process.env.PORT || 8080;
//mongoDB PASS  PrognaSU nMo0Rgt1G7sC5UWM
app.listen(port,()=>{
        console.log("Server is Running at Port " + port);
});
mongoose.connect('mongodb+srv://PrognaSU:nMo0Rgt1G7sC5UWM@cluster0.bzjvh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(()=>{console.log("Yayyy! Connected to mongodb")}).catch((err)=>{console.log(err)});

app.use("/api",shopRoutes);
app.use("/api",customerRoutes);
app.use("/api",orderRoutes);







// //------------API --------
// app.get("/api/data",(req,res)=>{
//     const Datapacket=[{
//         name: "xyz", age: "23"
//     },
//     {
//         name: "uvw", age: "21"
//     }]
//     res.send(Datapacket);
// });
