const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to define the year globally for all views
app.use((req, res, next) => {
    res.locals.year = new Date().getFullYear();
    next();
});

const customerRoutes = require('../routes/customerRoutes');
const showRoutes = require('./routes/show');

app.use(customerRoutes);
app.use(showRoutes);

app.get('/Customer_Dashboard', (req, res) => {
    res.render('Customer_Dashboard');
});

// Handle search form submission
app.post('/showResults', (req, res) => {
    const searchQuery = req.body.searchQuery;
  
    // Perform a database query based on the search query
    const sql = `
      SELECT phone_number,name,price FROM crop WHERE name LIKE ?
    `;
    
    db.query(sql, [`%${searchQuery}%`, `%${searchQuery}%`, `%${searchQuery}%`, `%${searchQuery}%`, `%${searchQuery}%`], (err, results) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      // Process the results and send them back to the client
      res.render('showResults', { results })
    });
});
