// import package
const fs = require('fs');
const scraper = require('swagger-scraper');

// read yaml file
const inputSwagger = fs.readFileSync('./sample/sample-full.yaml', 'utf8');

// delete example and empty description and delete parent of deprecated
const outputSwagger = scraper(inputSwagger)
  .deleteTarget('example')
  .emptyTarget('description')
  .deleteParent('deprecated')
  .toString();

// display result
console.log(outputSwagger);
