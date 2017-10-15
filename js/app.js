$(document).ready(function() {

  /* Open/close navigation on navigation button click */
  $('#show-nav').click(function() {
    if (!$(this).hasClass('close')) {
      $(this).addClass('close');
      $('#nav').addClass('opened');
    } else {
      $(this).removeClass('close');
      $('#nav').removeClass('opened');
    }
  });

});
