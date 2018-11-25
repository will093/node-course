
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
        notes.logNote(note);
    } else {
        console.log('Title already in use');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    const note = notes.getNote(argv.title);
    if (note) {
        console.log('Note');
        notes.logNote(note);
    } else {
        console.log(`Note ${argv.title} note found`);
    }
} else if (command === 'remove') {
    const success = notes.removeNote(argv.title);

    const message = success ? `Note ${argv.title} was removed` : `Note ${argv.title} was not found.`;
    console.log(message);
} else {
    console.log('Command not recognised');
}