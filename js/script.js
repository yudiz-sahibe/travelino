$(document).ready(function() {
    // home slider 
    $('.banner-slider').slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        fade: true,

    });

    // scroll header 

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("header").addClass("bg-header");
        } else {
            $("header").removeClass("bg-header");

        }
    }); 
});

 
$(".chat-bot-btn").click(function(){
    $(".toggle-chatbot").slideToggle();
    $(".chat-bot-btn").hide();
  });
  $(".close-chatbot").click(function(){
    console.log("hello")
    $(".toggle-chatbot").slideToggle();
    $(".chat-bot-btn").show(500);
  });


const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
//   slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;

});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});