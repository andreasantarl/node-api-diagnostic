// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs');

const sumLines = fs.readFile("numbers.txt", function (err, data) {
  if (err) return console.error(err);
  let sum = 0;
  let array = data.toString().split("\n");
  for (let i = 0; i < array.length; i++) {
    if (isNaN(Number(array[i]))) {
      return console.log("You must have a number");
    }
    sum += Number(array[i]);
  }
  console.log (null, sum);
});

module.exports = {
  sumLines,
};
