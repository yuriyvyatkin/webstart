$(document).ready(function(){
  
  //Подключение библиотеки WOW
  new WOW().init()

  // Модальное окно с JS для кнопки Перезвоните мне
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');
  
  button.on('click', function() {
    modal.addClass('modal_active');
  });

  close.on('click', function() {
    modal.removeClass('modal_active');
  })

  //Действие кнопки button-up
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

  //Валидация форм
  $('#offer-form').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userphone: {
        required: true
      }
    },
    messages: {
      username: {
        required: "Заполните поле 1",
        minlength: "Не менее 2 символов!",
        maxlength: "Не более 15 символов!"
      },
      userphone: {
        required: "Заполните поле 2",
      },
    },
    errorClass: "invalid",
    errorElement: "div"
  });

  $('#brif-form').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userphone: {
        required: true
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      username: {
        required: "Заполните поле 1",
        minlength: "Не менее 2 символов!",
        maxlength: "Не более 15 символов!"
      },
      userphone: {
        required: "Заполните поле 2",
      },
      email: {
        required: "Заполните поле 3",
        email: "Введите корректный email!"
      }
    },
    errorClass: "invalid",
    errorElement: "div"
  });

  $('#callback-form').validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userphone: {
        required: true
      }
    },
    messages: {
      username: {
        required: "Заполните поле 1",
        minlength: "Не менее 2 символов!",
        maxlength: "Не более 15 символов!"
      },
      userphone: {
        required: "Заполните поле 2",
      },
    },
    errorClass: "invalid",
    errorElement: "div"
  });

  // маска для телефона
  $('.phone').mask('+7 (999) 999-99-99');

  // слайдер slick
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


//слайдер owl-carousel
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