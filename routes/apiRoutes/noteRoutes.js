const router = require("express").Router();
const notes = require("../../db/db.json");
// require from notes.js
const { validateNote, createNewNote } = require("../../lib/note");

router.get("/notes", (req, res) => {
    let results = notes;
    
    res.json(results);
});

router.post("/notes", (req, res) => {
    if(!validateNote(req.body)) {
        res.status(400).send("The note is not properly formatted.");
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

module.exports = router;