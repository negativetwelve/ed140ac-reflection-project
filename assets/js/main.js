function isScrolledIntoView(elem) {
  var docViewFromTop = $(window).scrollTop();
  var docViewFromBottom = docViewFromTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + elem.height();

  return ((elemBottom >= docViewFromTop) && (elemTop <= docViewFromBottom));
}

function redirectPage() {
  window.location = link;
}

$(document).ready(function() {
  var cloud3 = $('#cloud3');
  var ellDescription = $('#ell_description');

  var house2 = $('#house2');
  var ellDescription2 = $('#ell_description2');

  var house3 = $('#house3');
  var ellDescription3 = $('#ell_description3');

  var bottom = $('#this_is_the_bottom');

  var people = $("#people_talking");
  var ellDescription4 = $("#ell_description4");

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

    if(isScrolledIntoView(people)) {
      ellDescription4.fadeIn('500');
    } else {
      ellDescription4.fadeOut('500');
    }

    if(isScrolledIntoView(bottom)) {
      link = '/school';
      $("body").fadeOut(1000, redirectPage);
    }

  });


  $(window).scroll(function(){
    $("#cloud3").css({
      top: function(index, value) {
        return 1550 - $(window).scrollTop() * 0.6;
      }
    });

    $("#people_talking").css({
      right: function(index, value) {
        return -1300 + $(window).scrollTop() * 0.3;
      }
    });
  });

});