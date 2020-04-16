const router = require('express').Router();

const { 
    renderNoteForm, 
    createNewNote, 
    renderNotes, 
    renderEditForm, 
    updateNote, 
    deleteNote 
} = require('../controllers/notes.controller');

const { isAuthenticated } = require('../helpers/auth');

// New notes
router.get('/notes/add', isAuthenticated, renderNoteForm);
router.post('/notes/new-note', isAuthenticated, createNewNote);

// Get notes
router.get('/notes', isAuthenticated, renderNotes);

// Edti notes
router.get('/notes/edit/:id', isAuthenticated, renderEditForm);
router.put('/notes/edit/:id', isAuthenticated, updateNote);

// Delete notes
router.delete('/notes/delete/:id', isAuthenticated, deleteNote);


module.exports = router