//Enable strict mode
"use strict";

//Require express and path
const express = require('express');
const path = require('path');

//Declare a variable for express use
const app = express();

//Set the port to 3000
const PORT = process.env.PORT || 3000;

//Access the images folder under public to add images to the site
app.use(express.static('public'));
app.use('/public/images/', express.static('./public/images'));

//Access views under the public folder to add views to the site
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// Navigation to the site's views
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/grooming', function(req, res) {
    res.render('grooming', { });
 });

 app.get('/boarding', function(req, res) {
    res.render('boarding', { });
 });

 app.get('/training', function(req, res) {
    res.render('training', { });
 });


//Set the app to listen on port 3000
app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});