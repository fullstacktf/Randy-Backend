const express = require("express"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  app = express();

//configure CORS
app.use(cors());

//configure app to use body-parser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

// Habilita esta línea para modo develop
//const MONGO_URL = "172.17.0.2:27017";

// Habilita esta línea para modo produccion
const MONGO_URL = "mongodb:27017";

mongoose.connect(`mongodb://${MONGO_URL}`, err => {
  if (err) throw err;
  console.log("Connected to mongodb");
});

//mongoDB service
const Task = require("./api/tasks_list/models/task.js");

//Routes
const router = express.Router();

router.post("/task", (req, res) => {
  console.log("[POST] Task");

  const task = new Task();
  task.contain = req.body.contain;

  task.save(err => {
    if (err) res.status(500).send(err);

    res.status(201).json({
      message: "Task created!"
    });
  });
});

router.get("/taskslist", (req, res) => {
  console.log("[GET] Task list");

  Task.find((err, tasks) => {
    if (err) res.status(500).send(err);

    res.status(200).json(tasks);
  });
});

//all routes will be prefixed with /api
app.use("/api", router);

//start the server
app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
