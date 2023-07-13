//Require mongoose
const mongoose = require('mongoose');

//Declare an appointment schema with userName, firstName, lastName, email, and service fields
let appointmentSchema = new mongoose.Schema({
    userName: { type: String, required: true, unique: true },
    firstName: { type: String, required: true, unique: true },
    lastName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    service: { type: String, required: true, unique: true }
});

//Export appointment module
module.exports = mongoose.model('Appointment', appointmentSchema);