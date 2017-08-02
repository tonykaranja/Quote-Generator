const jquery = require('jquery');
var nightmare = require('nightmare');
nightmare = nightmare();
var selector =  "div.quotesList"
nightmare.goto('https://www.brainyquote.com/')
.wait(2000)
.evaluate(function (selector) {
  return $.get(selector).data

}, selector)
.end()
.then((res) => console.log(res))
