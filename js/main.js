$('.invest__tab').click(function(){
  $('.invest').toggleClass('active');
});

$('.reviews__list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: ".arrow.prev",
  nextArrow: ".arrow.next"
});

$('.btn').click(function(){
  $('.popup').toggleClass('active');
});
$('.form__close').click(function(){
  $('.popup').removeClass('active');
});


//Валидатор
// setTimeout(function() {
//   var phones=document.querySelectorAll('input[type=tel]');
//   for (var i = phones.length - 1; i >= 0; i--) {
//     processInput(phones[i]);
//   }      
//   function processInput(phone){
//     var iti = window.intlTelInput(phone,{
//       allowDropdown: true,
//       initialCountry: 'auto',
//       nationalMode: true,
//       autoPlaceholder: 'aggressive',
//       formatOnDisplay: true,
//       separateDialCode: true,
//         geoIpLookup: callback => {
//           fetch("https://ipinfo.io/json")
//             .then(res => res.json())
//             .then(data => callback(data.country))
//             .catch(() => callback("us"));
//         },
//       hiddenInput : "full_phone",
//       utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.15/js/utils.min.js'
//       });
//       phone.addEventListener('input', ()=> {
//       phone.setCustomValidity('');
//           if (!iti.isValidNumber()) phone.setCustomValidity('Wrong number!');
//       });
//     }
// }, 500); 
