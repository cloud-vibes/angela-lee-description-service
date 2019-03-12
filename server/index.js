require('newrelic');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('./db');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/song', express.static(path.join(__dirname, '../client/dist')));
app.use('/song/:id', express.static(path.join(__dirname, '../client/dist')));

/****************************************************
  Song Description APIs
****************************************************/

app.get('/api/description/bundle', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist/bundle.js'));
});

app.get('/api/description/song/:id', (req, res) => {
  id = req.params.id || 1;
  db.songGETDescription(id, (data) => {
    res.send(data.rows);
  });
});

app.post('/api/description/song/:id', (req, res) => {
  db.songPOSTDescription("New description here.", (data) => {
    res.send(data);
  });
});

app.put('/api/description/song/:id', (req, res) => {
  id = req.params.id;
  db.songPUTDescription(id, (data) => {
    res.send(data);
  });
});

app.delete('/api/description/song/:id', (req, res) => {
  id = req.params.id;
  db.songDELETEDescription(id, (data) => {
    res.send(data);
  });
});

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));
