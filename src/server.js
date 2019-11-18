'use strict';

const express = require('express');
const morgan = require("morgan"); //Te da información de los HTTP

const billingsRouter = require('./api/billings');
const calendarRouter = require('./api/calendar');
const taskRouter = require('./api/tasks_list');
const usersRouter = require('./api/users');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// Routes and Middlewares
const app = express();

app.use(express.json());
app.use(morgan("combined"));

app.get('/', (req, res) => { res.send('Hello world from Alpine\n'); });
app.use('/billings', billingsRouter);
app.use('/calendar', calendarRouter);
app.use('/taskslist', taskRouter);
app.use('/users', usersRouter);


app.use((err, next) => {
  if (err) {
    res.status(500).send(err);
    return;
  }
});


//APP START
setTimeout((function() { return process.exit(0); }), 2000);
setInterval(() => {
  app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`); },1000);
