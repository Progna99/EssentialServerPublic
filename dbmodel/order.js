const mongoose = require("mongoose");
const schema = mongoose.Schema;

const OrderSchema = new schema({
    customername: {type: String},
    customeraddress: {type: String},
    customerphone: {type: String},
    shopname:{type:String},
    shopemail:{type:String},
    item:[{
           name:{type:String},
           quantity:{type:String}
         }]
});

module.exports = mongoose.model('OrderTable',OrderSchema);