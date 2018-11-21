
const fs = require('fs');
const notes = require('./notes.js');

const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
const command = argv._[0];

// console.log('Command:');
// console.log(process.argv);
// console.log(argv);

if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);

    if (note) {
        console.log('Note');
        console.log('--');
        console.log(`title: ${note.title}`);
        console.log(`body: ${note.body}`);
    } else {
        console.log('Title already in use');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognised');
}