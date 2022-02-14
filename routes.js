// Required Modules
const router = require('express').Router();
const path = require('path');
const { createNewNote, validateNote } = require('./lib/notes.js');
const notes = require('./db/db.json');

// GET the saved notes from db folder
router.get('/api/notes', (req, res) => {
  res.json(notes);
});

// POST a new note to the notes json in db folder
router.post('/api/notes', (req, res) => {
  req.body.id = notes.length.toString();
  if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

// Note Delete route
router.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  notes.map((element, index) => {
    if (element.id == id) {
      notes.splice(index, 1);
      return res.json(element);
    }
  });
});

// API ROUTES
// get request to '/'
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// get request to '/notes'
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

module.exports = router;

module.exports = router;