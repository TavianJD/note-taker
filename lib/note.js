const fs = require("fs");
const path = require("path");

function validateNote(note) {
    if(!note.title || typeof note.title !== "string") {
        return false;
    }

    if(!note.text || typeof note.text !== "string") {
        return false;
    }

    return true;
};

function createNewNote(note, notesArray) {
    const newNote = note;
    notesArray.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notesArray, null, 2)
    );

    return newNote;
};

module.exports = {
    validateNote,
    createNewNote
}