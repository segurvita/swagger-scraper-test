// import package
const fs = require('fs');
const scraper = require('yaml-scraper');

// read yaml file
const input = fs.readFileSync('./sample/sample-full.yaml', 'utf8');

// delete example and empty description and delete parent of deprecated
const output = scraper(input)
  .delete('example')
  .empty('description')
  .deleteParent('deprecated')
  .toString();

// display result
console.log(output);
