function isScrolledIntoView(elem) {
  var docViewFromTop = $(window).scrollTop();
  var docViewFromBottom = docViewFromTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + elem.height();

  return ((elemBottom >= docViewFromTop) && (elemTop <= docViewFromBottom));
}

$(document).ready(function() {
  var cloud3 = $('#cloud3');
  var ellDescription = $('#ell_description');

  var house2 = $('#house2');
  var ellDescription2 = $('#ell_description2');

  var house3 = $('#house3');
  var ellDescription3 = $('#ell_description3');

  $(window).scroll(function() {
    if(isScrolledIntoView(cloud3)) {
      ellDescription.fadeIn('500'); 
    } else {
      ellDescription.fadeOut('500');
    }

    if(isScrolledIntoView(house2)) {
      ellDescription2.fadeIn('500');
    } else {
      ellDescription2.fadeOut('500');
    }

    if(isScrolledIntoView(house3)) {
      ellDescription3.fadeIn('500');
    } else {
      ellDescription3.fadeOut('500');
    }

  });


  $(window).scroll(function(){
    $("#cloud3").css({
      top: function(index, value) {
        return 1550 - $(window).scrollTop() * 0.6;
      }
    });
  });

});