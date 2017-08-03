var request = require('request')
var cheerio = require('cheerio')
var _ = require('lodash')

//var Quote = require('./models/quotes')

scrapePage()

function scrapePage() {
  var url = 'https://www.brainyquote.com/'
  var options = {
    url: url,
    method: 'GET'
  }

  var data = {}
  //do the request with request
  request(url, function (err, res, body) {
    $ = cheerio.load(body);
    list = $('#quotesList').html()
    //console.log(list);

    $('#quotesList').each(function (i, html) {
      var parsedAuthor = $(html).find('a[title="view author"]').map(function(i, el) {
        var author = $(this).html();
        return { author: author }
      })

      var parsedText = $(html).find('a[title="view quote"]').map(function(i, el) {
        var quote = $(this).html();
        return { quote: quote }
      })

      var parsedQuotes = _.merge({}, parsedText, parsedAuthor)
      var potate =  parsedQuotes.get()
      // console.log(potate);
      data = potate

    });
    console.log(data);
    return data
  });
  // console.log(data);
  return data
}

module.exports = scrapePage
