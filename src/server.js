const express = require("express");
const morgan = require("morgan"); //Te da información de los HTTP

const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const billingsRouter = require("./api/billings");
const calendarRouter = require("./api/calendar");
const taskRouter = require("./api/tasks_list");
const usersRouter = require("./api/users");

// Constants
const PORT = process.env.PORT || 8080;
const HOST = "localhost";

// Routes and Middlewares
const app = express();

//configure CORS
const corsOptions = {
  origin: ["https://randy.tools.com", "http://localhost:3000"]
};

app.use(cors(corsOptions));

//configure app to use body-parser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

//app.use(express.json());
app.use(morgan("combined"));

app.get("/", (req, res) => {
  console.log("[GET] Pagina principal");
  res.send("Hola Mundo, soy Randy\n");
});
// app.use('/billings', billingsRouter);
// app.use('/calendar', calendarRouter);
app.use("/taskslist", taskRouter);
// app.use('/users', usersRouter);

// app.use((err, next) => {
//   if (err) {
//     res.status(500).send(err);
//     return;
//   }
// });

//APP START
// setTimeout((function () {
//   return process.exit(0);
// }), 2000);

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
