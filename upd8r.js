var scrapePage = require('./scrapr')
var fs = require('fs')

var file = 'quotes.json';

function updater(file) {

  scrapePage.scrapePage(function (potate) {

    var myJsonString = JSON.stringify(potate);

    fs.writeFile(file,myJsonString,function (err, json) {
      if (err) throw err;
      console.log('quotes.json updated');
    })

    return myJsonString
  })
}

// updater(file)

module.exports = {
  updater: updater
}
