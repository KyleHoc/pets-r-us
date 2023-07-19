//Require mongoose
const mongoose = require('mongoose');

//Declare an appointment schema with userName, firstName, lastName, email, and service fields
let appointmentSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    service: { type: String, required: true }
});

//Export appointment module
module.exports = mongoose.model('Appointment', appointmentSchema);