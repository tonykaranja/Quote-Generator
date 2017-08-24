$(document).ready(function(){

  $("#refresh").click(carouselFiller);

});

function carouselFiller() {
  $.getJSON("quotes.json", function(data){
    var quoteData = '';
    $.each(data,function (key, value) {
      quoteData += '<div class="carousel-item">';
      quoteData += '<p>' + value.quote + '</p>'
      quoteData += '<p>' + value.author + '</p>'
      quoteData += '</div>'
    })
    $('#things').append(quoteData)
  });
}
