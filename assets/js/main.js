function isScrolledIntoView(elem) {
  var docViewFromTop = $(window).scrollTop();
  var docViewFromBottom = docViewFromTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + elem.height();

  return ((elemBottom >= docViewFromTop) && (elemTop <= docViewFromBottom));
}

var item = $('#item');
var ellDescription = $('#ell_description');
$(window).scroll(function() {
  if(isScrolledIntoView(item)) {
    ellDescription.fadeIn('500'); 
  } else {
    ellDescription.fadeOut('500')
  }
});

$(window).scroll(function(){

  $("#item").css({
    top: function(index, value) {
      return 1550 - $(window).scrollTop() * 0.6;
    }
  });
});