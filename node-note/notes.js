const fs = require('fs')

const fetchNotes = () => {
    try {
        const notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
    let notes = fetchNotes();

    const note = {
        title,
        body
    }

    const duplicateTitle = notes.some(n => n.title === title);
    if (!duplicateTitle) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}

const getAll = () => {

}

const getNote = (title) => {
    const notes = fetchNotes();
    const note = notes.find(n => n.title === title);
    return note;
}   

const removeNote = (title) => {
    const notesOld = fetchNotes();
    notesNew = notesOld.filter(n => n.title !== title);
    saveNotes(notesNew);
    return notesOld.length !== notesNew.length;
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};
