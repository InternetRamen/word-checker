const fs = require('fs')
const words = require('./words.json')
fs.readFile('./draft.txt', 'utf8', function(err, data) {
  if (err) throw err;
  let noWords = words.value
  let lines = data.split("\n")
  let x = 0;
  for (let line of lines) {
    let txtArray = line.split(" ")
    for (let singleWord of noWords) {
      for (let txt of txtArray) {
        if (txt.trim() === singleWord) {
          console.log(`You have ${singleWord} in the story!`)
          x++;
        }
      }
    }
  }
 
  if (x != 0) return console.log("YOU DIDN'T PASS")
  console.log("YAY YOU PASSED!")
});
