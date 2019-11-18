'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world from Alpine\n');
});
setTimeout((function() {
  return process.exit(0);
}), 2000);
setInterval(() => {
  app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`);
},1000)
