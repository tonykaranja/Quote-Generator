var nightmare = require('nightmare');
nightmare = nightmare();
const jquery = require('jquery');


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
// var selector =  "a[title*='view quote']"
// nightmare.goto("https://www.brainyquote.com/")
//   .wait(2000)
//   .evaluate(function (selector) {
//     return document.querySelector(selector).innerText;
//   }, selector)
//   .end()
//   .then((text) => console.log(text))

// var selector = "#quotesList";
// nightmare.goto("https://www.brainyquote.com/")
//   .wait(2000)
//   .evaluate(function (selector) {
//     return document.querySelector(selector).innerText;
//   }, selector)
//   .end()
//   .then((text) => console.log(text))

// var lis = document.querySelectorAll("ul.nav>li");
// for (var i = 0; i < lis.length; i++) {
//   process(lis[i]);
// }

// The following script demonstrates how to first select the video elements
// and then filter out the unwanted elements based on their namespace.
// var elms = document.querySelectorAll("svg video");
// var result = new Array();
// var svgns = "http://www.w3.org/2000/svg"
//
// for(var i = 0; i < elms.length; i++) {
//   if(elms[i].namespaceURI == svgns) {
//     result.push(elms[i]);
//   }
// }

// var selector = '#quotesList';
// var selector =  "a[title*='view quote']"
// var selector = "#quotesList>.oncl_q"
// nightmare.goto("https://www.brainyquote.com/")
//   .wait(2000)
//   .evaluate(function (selector) {
//     var lis = document.querySelectorAll(selector);
//     var result = new Array();
//     for (var i = 0; i < lis.length; i++) {
//       result.push(lis[i]);
//     }
//     return result
//   }, selector)
//   .end()
//   .then((result) => console.log(result))
//
// $('selector').length

// var selector = "#quotesList";
// nightmare.goto("https://www.brainyquote.com/")
//   .wait(2000)
//   .evaluate(function (selector) {
//     var num = document.querySelector(selector).length
//     return num
//   }, selector)
//   .end()
//   .then((num) => console.log(num))

// return dir(document.getElementById(selector))

// var selector = "#quotesList";
// nightmare.goto("https://www.brainyquote.com/")
//   .wait(2000)
//   .evaluate(function (selector, []) {
//     var ret = [];
//     return $.getElementById(selector).innerText
//   })
//   .end()
//   .then((text) => console.log(text))
