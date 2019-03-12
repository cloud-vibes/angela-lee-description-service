const pg = require('pg');
const creds = require('../creds.js');

const connection = `postgres://${creds.user}:${creds.password}@${creds.host}:${creds.port}/songs`;

const client = new pg.Client(connection);

client.connect((err) => {
  if (err) {
    return console.error('Could not connect to postgres ', err);
  }
  console.log('Connected!');
});

/****************************************************
  Song Description CRUDs
****************************************************/

const songGETDescription = (songID, cb) => {
  client.query(`SELECT * FROM song_description WHERE id = ${songID}`, (err, results) => {
    if (err) {
      cb(err);
      return;
    }
    cb(results);
  });
};

const songPOSTDescription = (songID, cb) => {
  client.query(`INSERT INTO song_description (description_text) VALUES (newDescription)`, (err, results) => {
    if (err) {
      cb(err);
      return;
    }
    cb(results);
  });
};

const songPUTDescription = (songID, cb) => {
  client.query(`UPDATE song_description SET column_2 = newDescription WHERE id = ${songID}`, (err, results) => {
    if (err) {
      cb(err);
      return;
    }
    cb(results);
  });
};

const songDELETEDescription = (songID, cb) => {
  client.query(`DELETE FROM song_description WHERE id = ${songID}`, (err, results) => {
    if (err) {
      cb(err);
      return;
    }
    cb(results);
  });
};

module.exports = {
  songGETDescription,
  songPOSTDescription,
  songPUTDescription,
  songDELETEDescription,
};