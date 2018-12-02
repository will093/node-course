const express = require('express');
const hbs = require('hbs');

var app = express();

// Specify that we want to use hbs as the view engine.
app.set('view engine', 'hbs');
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home page',
        welcomeMessage: 'Welcome!',
        currentYear: new Date().getFullYear(),
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About page',
        currentYear: new Date().getFullYear(),
    });
});

app.get('/bad', (req, res) => {
    res.send({ errorMessage: 'Bad error' });
});

app.listen(3000);