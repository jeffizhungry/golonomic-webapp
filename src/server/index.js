const express = require('express');
const os = require('os');
const bodyParser = require('body-parser');

const app = express();

// Parse body as JSON
app.use(bodyParser.json())

// Specify static directory
app.use(express.static('dist'));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**************************************
 * Routes
 *************************************/

app.get('/api/getUsername', (req, res) => {
  return res.send({ username: os.userInfo().username });
});

// Mock Sensor
app.get('/sensor', (req, res) => {
  return res.send({
    heading: 30,
    distance: 199,
  });
});

// Mock Move
app.post('/vectormove', (req, res) => {
  console.log(req.body);
  return res.json({
    status: "ok"
  });
});

app.listen(8080, () => console.log('Listening on port 8080!'));
