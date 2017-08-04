
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



// $.getJSON( "./quotes.JSON", function( data ) {
//   var items = [];
//   $.each( data, function( key, val ) {
//     items.push( "<li id='" + key + "'>" + val + "</li>" );
//   });
//
//   $( "<ul/>", {
//     "class": "my-new-list",
//     html: items.join( "" )
//   }).appendTo( "body" );
// });
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
