/**************************************************
  Song Description CSV Seed
**************************************************/

const fs = require('fs');
const faker = require('faker');
const moment = require('moment');

const songLicence = ['All Rights Reserved', 'Creative Commons License', 'none'];
const urls = ['www.google.com', 'www.instagram.com', 'https://github.com/ZoundLoud', 'https://expressjs.com/', 'https://developer.mozilla.org/en-US/', 'https://twitter.com/'];

const wstream = fs.createWriteStream('song.csv');
wstream.write(`unique_id,song_name,artist_name,licence,description_text,released_by,release_date,p_line,tags\n`);

let string = '';

for (let id = 1; id < 10000001; id++) {
  let text = '';
  let date = moment(faker.date.past()).format('D MMMM YYYY');
  string += `${id};${faker.lorem.words()};${faker.name.findName()};${songLicence[Math.floor(Math.random() * songLicence.length)]};${text.concat(faker.lorem.paragraphs(1), ' @', faker.name.findName(), ' ', urls[Math.floor(Math.random() * urls.length)])};${faker.company.companyName()};${date};℗${faker.company.companyName()}${faker.company.companySuffix()};${faker.lorem.words(4)}\n`;

  if (id % 100000 === 0) {
    wstream.write(string);
    string = '';
    console.log(`Batched ${id}.`);
  }
}

/**************************************************
  Postgres Database Seed
**************************************************/

const pg = require('pg');
const creds = require('./creds.js');

const connection = `postgres://${creds.host}:${creds.password}@${creds.host}:${creds.port}/songs`;

const client = new pg.Client(connection);
client.connect((err) => {
  if (err) {
    return console.error('Could not connect to postgres ', err);
  }
  console.log('Connected!');
  // console.time('copy');
  // client.query(`COPY song_description
  // (unique_id,song_name,artist_name,licence,description_text,released_by,release_date,p_line,tags) 
  // FROM '/Users/angela/Workspace/hackreactor/hrsf-110/system_design_capstone/angela-lee-description-service/song.csv'
  // DELIMITER ';' CSV HEADER`, (err, result) => {
  //     if (err) {
  //       return err;
  //     }
  //     console.log('Completed inserting!');
  //     console.timeEnd('copy');
  //     client.end();
  //   });
});


