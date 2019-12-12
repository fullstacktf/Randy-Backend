const express = require('express');
const router = express.Router();
const controller = require('./controller');


const getUsers = (req, res) => {
  res.status(200).json(controller.getUsers());
};



const newUser = (req, res) => {

  if (newUserWasCreate) {
    res.status(201).json(newUser);
  } else {
    res.status(500).json("No se ha podido realizar su petición");
  }
};

const deleteUser = (req, res) => {

  if (userWasDeleted) {
    res.status(201).json("Usuario eliminado");
  } else {
    res.status(500).json("No se ha podido realizar su petición");
  }
};

const setGroup = (req, res) => {

  if (newGroupWasCreate) {
    res.status(201).json(newGroup);
  } else {
    res.status(500).json("No se ha podido realizar su petición");
  }
};


//API REST users
router.get('/', getUsers);

router.post('/', newUser);

router.delete('/', deleteUser);

router.put('/setgroup', setGroup);

module.exports = router;
