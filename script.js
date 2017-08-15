
$(document).ready(function(){
  $("#refresh").click(function(){
    $.getJSON("quotes.json", function(data){
      var quoteData = ''
      $.each(data,function (key, value) {
        // console.log(data);
        // $.each(JSON.parse(data), function (key, value) {
        quoteData += '<tr>';
        quoteData += '<td>' + value.quote + '</td>'
        quoteData += '<td>' + value.author + '</td>'
        quoteData += '</tr>'
      })
      $('#quoteTable').append(quoteData)
    });
  });
});


// D3 STUFF
d3.json('foo.json',
  function(err, data) { });

$.getJSON('foo.json',
  function(data) { });

// a fully-featured jquery replacement
function $(x) {
  return document.querySelectorAll(x);
}

// a fully-featured jquery replacement
$.ajax = function(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = callback;
  xhr.send();
}

d3.select('#foo')
  .style('background', '#000')
  .on('click', function() {})
  .append('div');

$('#foo')
  .css('background', '#000')
  .click(function() {})
  .append($('<div></div>'));

blah
  .attr('foo', 'bar')
  .attr('boo', 'burr');

var fooValue = blah.attr('foo');

selection
  .text(function(d) {
    return d.bar;
  });




$(document).ready(function(){
  $("#refresh").click(function(){
    $.getJSON("quotes.json", function(data){
      var quoteData = ''
      $.each(data,function (key, value) {


        quoteData += '<tr>';
        quoteData += '<td>' + value.quote + '</td>'
        quoteData += '<td>' + value.author + '</td>'
        quoteData += '</tr>'
      })
      $('#quoteTable').append(quoteData)
    });
  });
});

var options = [
        set0 = ['Option 1','Option 2'],
        set1 = ['First Option','Second Option','Third Option']
    ];

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

// Add the contents of options[0] to #foo:
document.getElementById('foo').appendChild(makeUL(options[0]));


$("#quote-holder").animate({
    opacity: 0
  }, 500,
  function() {
    $(this).animate({
      opacity: 1
    }, 500);
    $('#text').text(r.quote);
  });

$("#author-holder").animate({
    opacity: 0
  }, 500,
  function() {
    $(this).animate({
      opacity: 1
    }, 500);
    $('#author').html(r.author);
  });


$.getJSON( "./quotes.JSON", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});
//
// <script>
//   $(document).ready(function(){
//       $("button").click(function(){
//           $.get("./quotes.JSON", function(data, status){
//               alert("Data: " + data + "\nStatus: " + status);
//           });
//       });
//   });
// </script>
//
//
// $("#div1").load("demo_test.txt #p1");
// $("#div1").load(function (div) {

// });
//
//makes table!
// <script>
//   $(document).ready(function(){
//       $("#refresh").click(function(){
//           $.getJSON("quotes.json", function(data){
//             var quoteData = ''
//             $.each(data,function (key, value) {
//               // console.log(data);
//               // $.each(JSON.parse(data), function (key, value) {
//               quoteData += '<tr>';
//               quoteData += '<td>' + value.quote + '</td>'
//               quoteData += '<td>' + value.author + '</td>'
//               quoteData += '</tr>'
//             })
//             $('#quoteTable').append(quoteData)
//           });
//       });
//   });
// </script>
