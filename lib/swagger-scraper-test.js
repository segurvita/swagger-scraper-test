// import package
const fs = require('fs');
const Scraper = require('swagger-scraper');

// read yaml file
const inputSwagger = fs.readFileSync('./sample/sample-full.yaml', 'utf8');

// remove example from string
// const outputStr = scraper.deleteTarget(inputStr, 'example', 'string');

const outputSwagger = Scraper(inputSwagger)
  .emptyTarget('example')
  .emptyTarget('description')
  .toString();


// display result
console.log(outputSwagger);
