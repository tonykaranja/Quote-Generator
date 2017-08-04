var scrapePage = require('./scrapr')
var fs = require('fs')
// var myJsonString = JSON.stringify(potate); //--json-like array
// array of objects or object of objects ? .. line#10
file = 'quotes.JSON'

function updater(file) {

  scrapePage.scrapePage(function (potate) {

    var myJsonString = Object.assign({}, potate);
    var xi = JSON.stringify(myJsonString) // ^ended up using them both
    // console.log(xi);
    fs.writeFile(file,xi,function (err, json) {
      if (err) throw err;
      console.log('Saved');
    })

    return xi
  })
}

updater(file)
