var request = require('request')
var cheerio = require('cheerio')
var _ = require('lodash')

//var Quote = require('./models/quotes')

function scrapePage(callback) {
  var url = 'https://www.brainyquote.com/'
  var options = {
    url: url,
    method: 'GET'
  }

  request(options, getCallback)

  function getCallback (err, res, body) {
    if (err) {
      console.log('Oops!', err);
    } else {
      console.log(res.statusCode)
      if (res.statusCode === 200) {
        startParsing(body)
      } else {
        console.log("Can't parse!");
      }
    }

    function startParsing() {
      console.log('parsing has started');
      $ = cheerio.load(body);
      getQuotes($)
    }

    function getQuotes(html) {
      var potate;

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
        potate =  parsedQuotes.get()

      });
      // console.log(potate);
      // foo(potate)
      // console.log('returning potate');
      callback(potate)
      // return potate
    }
  };
}
// scrapePage()

module.exports = {
  scrapePage: scrapePage
}
