const swiper = new Swiper('.swiper', {
    breakpoints: {
   
   320: {
     slidesPerView: 1, 
 
   },

   768: {
     slidesPerView: 3, 

   },

   1200: {
     slidesPerView: 3,
   },
 },

centeredSlides: false,
spaceBetween: 30,
pagination: {
el: '.swiper-pagination',
type: 'fraction',
},
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},

});