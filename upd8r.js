var scrapePage = require('./scrapr')
/* var myJsonString = JSON.stringify(potate); --json-like array
array of objects or object of objects*/

scrapePage.scrapePage(function (potate) {

  var myJsonString = Object.assign({}, potate);
  console.log(myJsonString);
  return myJsonString
})
