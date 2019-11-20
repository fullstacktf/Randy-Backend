const express = require('express');
const router = express.Router();
const controller = require('./controller');


const getNotes = (req, res) => { res.status(200).json(controller.getNotes());  };



const newNote = (req, res) => {

  if (newNoteWasCreate){
    res.status(201).json(calendarWithNote);
  } else {
    res.status(500).json("No se ha podido realizar su petición");
  }
};

const deleteNote = (req, res) => {

  if (noteWasDeleted){
    res.status(201).json(calendar);
  } else {
    res.status(500).json("No se ha podido realizar su petición");
  }
};

const assignNote = (req, res) => {

  if (noteWasAssigned){
    res.status(201).json(calendar);
  } else {
    res.status(500).json("No se ha podido realizar su petición");
  }
};


//API REST users
router.get('/', getNotes);

router.post('/', newNote);

router.delete('/', deleteNote);

router.put('/assignnote', assignNote);

module.exports = router;
