
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
const command = argv._[0];

if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);

    if (note) {
        console.log('Note');
        notes.logNote(note);
    } else {
        console.log('Title already in use');
    }
} else if (command === 'list') {
    const allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`)
    allNotes.forEach(n => notes.logNote(n));
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