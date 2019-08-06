// Модальное окно с JS
$(document).ready(function(){
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');
  var cardLink = $('.card__link');
  
  button.on('click', function() {
    modal.addClass('modal_active');
  });

  // cardLink.on('click', function(event) {
  //   event.preventDefault();
  //   modal.addClass('modal_active');
  // });

  close.on('click', function() {
    modal.removeClass('modal_active');
  })
});

// Модальное окно с JQuery
// var button = document.querySelector('#button');
// var modal = document.querySelector('#modal');
// var close = document.querySelector('#close');

// var remove = function() {
// 	modal.classList.remove('modal_active');
// }

// button.addEventListener('click', function() {
// 	modal.classList.add('modal_active');
// 	setTimeout(remove, 5000)
// });

// close.addEventListener('click', remove);

//Действие кнопки button-up
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

// AJAX запросы
// $('#offer-form').on('submit', function(event) {
//   event.preventDefault();
//   $.ajax({
//     url: 'php/mail.php',
//     type: 'POST', 
//     data: $(this).serialize(),
//     success: function(data) {
//       $('.success').text(data + ', Ваша форма отправлена!');
//       alert("Спасибо за заявку, скоро мы вам перезвоним.");
//       $('.input').val('');
//     } 
//   });
// });

// AJAX запросы к форме callback-form
$('#callback-form').on('submit', function(event) {
  event.preventDefault();
  $.ajax({
    url: 'php/mail.php',
    type: 'POST', 
    data: $(this).serialize(),
    success: function(data) {
      $('.success').text(data + ', Ваша форма отправлена!');
      alert("Спасибо за заявку, скоро мы вам перезвоним.");
      $('.input').val('');
    } 
  });
});