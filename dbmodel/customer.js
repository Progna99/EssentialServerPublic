const mongoose = require("mongoose");
const schema = mongoose.Schema;

const CustomerSchema = new schema({
    name: {type: String, unique: true},
    address: {type: String, unique: true},
    phonenumber: {type: String, unique: true},
    username:{type: String, unique: true},
    password:{type: String, unique: true}
});

module.exports = mongoose.model('CustomerTable',CustomerSchema);