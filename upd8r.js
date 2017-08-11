var scrapePage = require('./scrapr')
var fs = require('fs')
file = 'quotes.json'

function updater(file) {

  scrapePage.scrapePage(function (potate) {

    var myJsonString = JSON.stringify(potate);
    // console.log(myJsonString);
    fs.writeFile(file,myJsonString,function (err, json) {
      if (err) throw err;
      console.log('Saved');
    })

    return myJsonString
  })
}

// updater(file)

module.exports = {
  updater: updater
}

// var myJsonString = JSON.stringify(potate); //--json-like array
// var myJsonString = Object.assign({}, potate);

// array of objects or object of objects ?

// this one returns object object -->
// scrapePage.scrapePage(function (potate) {
//   var myJsonString = Object.assign({}, potate);
//   var xi = JSON.stringify(myJsonString) // ^ended up using them both
//   // console.log(xi);
//   fs.writeFile(file,xi,function (err, json) {
//     if (err) throw err;
//     console.log('Saved');
//   })
//   return xi
// })
