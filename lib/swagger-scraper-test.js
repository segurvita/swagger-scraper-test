// import package
const fs = require('fs');
const scraper = require('swagger-scraper');

// read yaml file
const inputStr = fs.readFileSync('./sample/sample-full.yaml', 'utf8');

// remove example from string
const outputStr = scraper.deleteTarget(inputStr, 'example', 'string');

// display result
console.log(outputStr);
