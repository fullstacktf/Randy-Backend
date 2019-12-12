const Task = require('./models/task');
const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb:27017', err => {
  if (err) throw new Error(err);
  console.log('Connected to mongodb');
})

const getTaskController = () => {
  return Task.find();
}

// module.exports = {



// };
