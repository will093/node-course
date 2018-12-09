const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

// Set port from environment if it is defined, in order to work with Heroku.
const port = process.env.PORT || 3000;
const app = express();

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

app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        pageTitle: 'Projects page',
    });
});

app.get('/bad', (req, res) => {
    res.send({ errorMessage: 'Bad error' });
});

app.listen(port, () => {
    console.log(`Server is now up on port ${port}`);
});