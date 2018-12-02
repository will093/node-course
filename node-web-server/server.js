const express = require('express');
const hbs = require('hbs');

var app = express();


// Specify that we want to use hbs as the view engine.
app.set('view engine', 'hbs');

// Specify where our partials live
hbs.registerPartials(`${__dirname}/views/partials`);

// Specify our public folder
app.use(express.static(`${__dirname}/public`));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home page',
        welcomeMessage: 'Welcome!',
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About page',
    });
});

app.get('/bad', (req, res) => {
    res.send({ errorMessage: 'Bad error' });
});

app.listen(3000);