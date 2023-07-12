//Require mongoose
const mongoose = require('mongoose');

//Declare a customer schema with customerId and email fields
let appointmentSchema = new mongoose.Schema({
    userName: { type: String, required: true, unique: true },
    firstName: { type: String, required: true, unique: true },
    lastName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    service: { type: String, required: true, unique: true }
});

//Export customer module
module.exports = mongoose.model('Appointment', appointmentSchema);