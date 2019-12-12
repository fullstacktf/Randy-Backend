//models/task.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  contain: {
    type: String,
    require: true,
    unique: false
  },
  updated: {
    type: Date,
    default: Date.now()
  },
  created: {
    type: Date,
    default: Date.now()
  },
  cheked: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Task', TaskSchema);
