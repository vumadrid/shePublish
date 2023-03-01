

$(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
           delay: 5000,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
  
})