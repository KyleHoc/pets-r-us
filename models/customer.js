//Require mongoose
const mongoose = require('mongoose');

//Declare a customer schema with customerId and email fields
let customerSchema = new mongoose.Schema({
    customerId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true }
});

//Export customer module
module.exports = mongoose.model('Customer', customerSchema);