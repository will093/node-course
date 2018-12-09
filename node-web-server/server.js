const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

// Specify that we want to use hbs as the view engine.
app.set('view engine', 'hbs');

// Specify where our partials live
hbs.registerPartials(`${__dirname}/views/partials`);

// Middleware to log requests to the server.
app.use((req, res, next) => {
    const now = new Date().toString();
    const log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log');
        }
    })
    next();
});

// Middleware to serve up maintenance page.
// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// })

// Middlewware to serve up files from our public folder
app.use(express.static(`${__dirname}/public`));

res.render('home.hbs', {
    pageTitle: 'Home page',
    welcomeMessage: 'Welcome!',
});

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