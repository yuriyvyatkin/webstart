//подключение библиотеки WOW
new WOW().init()

// Модальное окно с JS для кнопки Перезвоните мне
$(document).ready(function(){
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');
  
  button.on('click', function() {
    modal.addClass('modal_active');
  });

  close.on('click', function() {
    modal.removeClass('modal_active');
  })
});

// AJAX запросы к модальному окну
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

// AJAX запросы к блоку offer
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

// слайдер при помощи slick
$(document).ready(function() {
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 801,
        settings: {
          centerMode: true,
          variableWidth: true,
          autoHeight:true,
          autoHeightClass: 'owl-carousel',
          responsiveBaseWidth: '#owl-example',
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

//слайдер при помощи owl-carousel
// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
//     loop: true,
//     margin: 30,
//     nav: true,
//     navText: ["<img src='img/portfolio/left-arrow.png'>", "<img src='img/portfolio/right-arrow.png'>"],
//     responsive:{
//         0:{
//           autoWidth:true,
//           center: true,
//           items: 1
//         },
//         770:{
//           items: 2
//         },
//         1201:{
//           items: 3
//         }
//     }
//   });
// });