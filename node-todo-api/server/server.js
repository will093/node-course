let express = require('express');
let bodyParser = require('body-parser');
let { ObjectID } = require('mongodb');

let mongoose = require('./db/mongoose');
let { Todo } = require('./models/todo');
let { User } = require('./models/user');

let app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then(doc => {
        res.send(doc);
    }, e => {
        res.status(400).send(e);
    })
})

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (e) => {
        res.status(400).send(e);
    })
})


app.get('/todos/:id', (req, res) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        console.log(todo);
        if (!todo) {
            res.send(404).send();
        }
        res.send({todo});
    })
    .catch((e) => {
        res.send(400).send();
    })
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
})

module.exports = { app };