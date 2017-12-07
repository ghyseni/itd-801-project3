$('html').addClass('js').removeClass('no-js');
$('.cssgrid').removeClass('.cssgrid');
$('.flexbox').removeClass('.flexbox');

$(document).ready(function() {
  toggleMenuButton();
  /* Open/close navigation on navigation button click */
  $('#show-nav').on('click', function() {
    $('#show-nav').toggleClass('close');
    $('#nav').toggleClass('opened');
  });
});

$(window).resize(function() {
  toggleMenuButton();
});

function toggleMenuButton() {
  if (responsiveFeature('expanded-nav')) {
    if ($('#show-nav').length === 0) {
      $('#header').append('<button id="show-nav" class=""><span class="button-line"></span></button>');
    }
  } else {
    $('#show-nav').remove();
  }
}

function responsiveFeature(feature) {
  var body = document.body;
  var size = window.getComputedStyle(body, ':after').getPropertyValue('content');
  var has_feature = true;
  if (size.indexOf(feature) === -1) {
    has_feature = false;
  }
  return has_feature;
}
