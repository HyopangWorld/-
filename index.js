var slideIndex;
var imgArray;
var x;

var offsets = $('#profileBox').offset();
window.onload = function(){
  slideIndex = 0;
  imgArray = ["./img/14.jpg", "./img/12.jpg", "./img/1.jpg", "./img/5.jpg"];
  x = document.getElementById("headImg");
}

//박스 나타나기
$(window).scroll(function () {
			var height = $(document).scrollTop();

      if(height > 380){
        $('#profileBox').css( "margin-left", 425 );
        $('#profileBox').css( "opacity", 1 );
      }else{
			   $('#profileBox').css( "margin-left", height );
         var opacity = (height *  0.001);
         $('#profileBox').css( "opacity", opacity );
      }
});

setInterval(function () {
  x.src = imgArray[slideIndex];
  if(slideIndex < imgArray.length-1){slideIndex++;}
  else if(slideIndex == imgArray.length-1){slideIndex = 0;}
}, 2800);

$(document).ready(function () {
  var carousel = $("#carousel").waterwheelCarousel({
    flankingItems: 3,
    movingToCenter: function ($item) {
      $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
    },
    movedToCenter: function ($item) {
      $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
    },
    movingFromCenter: function ($item) {
      $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
    },
    movedFromCenter: function ($item) {
      $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
    },
    clickedCenter: function ($item) {
      $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
    }
  });
  $('#prev').bind('click', function () {
    carousel.prev();
    return false;
  });
  $('#next').bind('click', function () {
    carousel.next();
    return false;
  });
  $('#reload').bind('click', function () {
    newOptions = eval("(" + $('#newoptions').val() + ")");
    carousel.reload(newOptions);
    return false;
  });
});
