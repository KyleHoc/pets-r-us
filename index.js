//Enable strict mode
"use strict";

//Require express, path, and mongoose
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

//Import customer model
const Customer = require('./models/customer');

//Declare a variable for express use
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Declare MongoDB connection and port variables
const CONN = 'mongodb+srv://web340_admin:d46WcswC8POiYFMO@cluster0.tydee4p.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

//Connect to MongoDB and output a message stating success for failure to do so
mongoose.connect(CONN).then(() => {
    console.log('Connection to MongoDB database was successful\n  If you see this message it means you were able to connect to your MongoDB Atlas cluster');
}).catch(err => {
    console.log('MongoDB Error: ' + err.message);
})

//Access the images folder under public to add images to the site
app.use(express.static('public'));
app.use('/public/images/', express.static('./public/images'));

//Access views under the public folder to add views to the site
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// Navigation to the site's views
app.get('/', (req, res) => {
   res.render('index', {
      title: 'Pets-R-Us: Home'
  })
})

app.get('/grooming', function(req, res) {
    res.render('grooming', {
      title: 'Pets-R-Us: Grooming'
     });
 });

 app.get('/boarding', function(req, res) {
    res.render('boarding', {
      title: 'Pets-R-Us: Boarding'
     });
 });

 app.get('/training', function(req, res) {
    res.render('training', {
      title: 'Pets-R-Us: Training'
     });
 });

 app.get('/registration', function(req, res) {
    res.render('registration', {
      title: 'Pets-R-Us: Register'
     });
 });

 //Display customers page and get all customers from the database
 app.get('/customers', async (req, res) => {
    const allCustomers = await Customer.find()
            res.render('customers', {
                title: 'Pets-R-Us Customers: List',
                customers: allCustomers
         })
})




 //Post request for registration
 app.post('/customers', (req, res, next) => {
   //Declare a new customer with a customerId and email
   const newCustomer = new Customer({
       customerId: req.body.customerId,
       email: req.body.email
   });

   //Output the new Customer to the console
   console.log(newCustomer);

   //Register customer to database
   Customer.create(newCustomer)
   .then((result) => {
      //If successful, redirect to landing page
      res.render('index', {
         title: 'Pets-R-Us: Registration'
     })
   })
   .catch((err) => {
      //If unsuccessful, output error message to console
      console.log(err);
   })
})

//Set the app to listen on port 3000
app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});