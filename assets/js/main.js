function isScrolledIntoView(elem) {
  var docViewFromTop = $(window).scrollTop();
  var docViewFromBottom = docViewFromTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + elem.height();

  return ((elemBottom >= docViewFromTop) && (elemTop <= docViewFromBottom));
}

var cloud3 = $('#cloud3');
var ellDescription = $('#ell_description');
$(window).scroll(function() {
  if(isScrolledIntoView(cloud3)) {
    ellDescription.fadeIn('500'); 
  } else {
    ellDescription.fadeOut('500')
  }
});

$(window).scroll(function(){

  $("#cloud3").css({
    top: function(index, value) {
      return 1550 - $(window).scrollTop() * 0.6;
    }
  });
});