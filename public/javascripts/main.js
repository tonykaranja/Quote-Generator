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
    console.log(quoteData);
  });
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  if (n > slides.length) { slideIndex =  1 }
  if (n < 1) { slideIndex = slides.length }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex-1].style.display = 'block';
}
