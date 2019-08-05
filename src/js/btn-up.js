$(document).ready(function() {
  $(".button-up").hide();
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {$('.button-up').fadeIn();} 
      else {$('.button-up').fadeOut();}
    });
    $('.button-up').click(function () {
      $('body,html').animate({scrollTop: 0}, 400);
      return false;
    });
  });
});