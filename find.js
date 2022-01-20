const fs = require('fs')
const words = require('./words.json')
fs.readFile('./draft.txt', 'utf8', function(err, data) {
  if (err) throw err;
  let noWords = words.value
  let txtArray = data.split(" ")
  for (let singleWord of noWords) {
	  for (let txt of txtArray) {
		  if (txt === singleWord) {
			  console.log(`You have ${singleWord} in the story!`)
		  }
	  }
  }
  if (txtArray.some(val => noWords.includes(val))) return console.log("YOU DIDN'T PASS")
  console.log("YAY YOU PASSED!")
});
