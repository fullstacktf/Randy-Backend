const express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  app = express();

//configure CORS
app.use(cors());

//configure app to use body-parser
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

//const MONGO_URL = "172.17.0.3:27017"
const MONGO_URL = "mongodb:27017"

mongoose.connect(`mongodb://${MONGO_URL}`, err => {
  if (err)
    throw err;
  console.log('Connected to mongodb');
});

//mongoDB service
var Topic = require('./models/topics');

//Routes
var router = express.Router();

router.post('/topics', (req, res) => {
  console.log('[POST] Topics');

  var topic = new Topic();
  topic.name = req.body.name;

  topic.save(err => {
    if (err)
      res.status(500).send(err);

    res.status(201).json({
      message: 'Topic created!'
    });
  });
});

router.get('/topics', (req, res) => {
  console.log('[GET] Topics');

  Topic.find((err, topics) => {
    if (err)
      res.status(500).send(err);

    res.status(200).json(topics);
  });
});

//all routes will be prefixed with /api
app.use('/api', router);

//start the server
app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
