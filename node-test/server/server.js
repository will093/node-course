const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.get('/users', (req, res) => {
    res.send([
        { name: 'Will', age: 27 },
        { name: 'Jeffrey', age: 24 }
    ]);
});



app.listen(3000);

module.exports.app = app;