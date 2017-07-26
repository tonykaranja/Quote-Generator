var nightmare = require('nightmare');
nightmare = nightmare();

// var selector = ".post-title";
// nightmare.goto("http://thisisstory.com/")
//   .wait(2000)
//   .evaluate(function (selector) {
//     return document.querySelector(selector).innerText;
//   }, selector)
//   .end()
//   .then(function (text) {
//     console.log(text);
//   })

// var selector = "#quotesList"
// var selector = ("title"|="view quote"])
var selector =  "a[title*='view quote']"
nightmare.goto("https://www.brainyquote.com/")
  .wait(2000)
  .evaluate(function (selector) {
    return document.querySelector(selector).innerText;
  }, selector)
  .end()
  .then((text) => console.log(text))
