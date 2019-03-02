const fs = require('fs');
const faker = require('faker');

const songLicence = ['All Rights Reserved', 'Creative Commons License', '', ''];
const urls = ['www.google.com', 'www.instagram.com', 'https://github.com/ZoundLoud', 'https://expressjs.com/', 'https://developer.mozilla.org/en-US/', 'https://twitter.com/'];

const wstream = fs.createWriteStream('song.csv');
wstream.write(`unique_id,song_name,artist_name,licence,description_text,released_by,release_date,p_line,tags,\n`);

let string = '';

for (let id = 1; id < 10000001; id++) {
  const text = '';
  string += `${id},${faker.lorem.words()},${faker.name.findName()},${songLicence[Math.floor(Math.random() * songLicence.length)]},${text.concat(faker.lorem.paragraphs(1), '@', faker.name.findName(), ' ', faker.lorem.paragraph(1), ' ', urls[Math.floor(Math.random() * urls.length)], ' ', faker.lorem.paragraph(1))},${faker.company.companyName()},${faker.date.past()},℗${faker.company.companyName()}${faker.company.companySuffix()},${faker.lorem.words(4)},\n`;

  if (id % 100000 === 0) {
    wstream.write(string);
    string = '';
    console.log(`Batched ${id}.`);
  }
}