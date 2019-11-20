const express = require('express');
const router = express.Router();
const controller = require('./controller');


const getTasks = (req, res) => { res.status(200).json(controller.getTasks());  };



const newTask = (req, res) => {

  if (newTaskWasCreate){
    res.status(201).json(newTask);
  } else {
    res.status(500).json("No se ha podido realizar su petición");
  }
};

const deleteTask = (req, res) => {

  if (taskWasDeleted){
    res.status(201).json("Tarea eliminado");
  } else {
    res.status(500).json("No se ha podido realizar su petición");
  }
};

const assignTask = (req, res) => {

  if (taskWasAssigned){
    res.status(201).json(group);
  } else {
    res.status(500).json("No se ha podido realizar su petición");
  }
};


//API REST users
router.get('/', getTasks);

router.post('/', newTask);

router.delete('/', deleteTask);

router.put('/assigntask', assignTask);

module.exports = router;