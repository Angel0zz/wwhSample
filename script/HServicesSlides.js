var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 2.5,
    slideShadows: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const collectionSection = document.querySelector('.collection');

function changeBackgroundImage(slide) {
  const bgImage = slide.getAttribute('data-bg');

  collectionSection.style.backgroundImage = `
    radial-gradient(circle, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), 
    url('/img-assets/services_assets/${bgImage}')
  `;
}

swiper.on('slideChange', function () {
  const activeSlide = swiper.slides[swiper.activeIndex];
  changeBackgroundImage(activeSlide);
});

const initialSlide = swiper.slides[swiper.activeIndex];
changeBackgroundImage(initialSlide);

swiper.slides.forEach((slide, index) => {
  slide.addEventListener('click', function () {
    swiper.slideTo(index); 
  });
});
