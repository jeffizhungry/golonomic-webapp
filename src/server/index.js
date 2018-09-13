const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => {
  return res.send({ username: os.userInfo().username });
});

// Mock Sensor
app.get('/sensor', (req, res) => {
  return res.send({
    heading: 12,
    distance: 199,
  });
});

// Mock Move
app.post('/move', (req, res) => {
  return res.json({
    status: "ok"
  });
});

app.listen(8080, () => console.log('Listening on port 8080!'));
