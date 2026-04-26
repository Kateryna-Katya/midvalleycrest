import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
let visualSwiper = null;
let gallerySwiper = null;

function initSwipers() {
  const width = window.innerWidth;

  // ---------------- VISUAL ----------------
  if (width < 1440 && !visualSwiper) {
    visualSwiper = new Swiper('.visual-swiper', {
      modules: [Autoplay],
      slidesPerView: 1.2,
      spaceBetween: 16,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }

  if (width >= 1440 && visualSwiper) {
    visualSwiper.destroy(true, true);
    visualSwiper = null;
  }

  // ---------------- GALLERY ----------------
  if (!gallerySwiper) {
    gallerySwiper = new Swiper('.gallery-swiper', {
      modules: [Navigation, Autoplay],
      slidesPerView: 1.2,
      spaceBetween: 16,
      loop: true,
      autoplay: {
        delay: 2500,
      },
      navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
      },

      breakpoints: {
        1440: {
          slidesPerView: 3.4,
          spaceBetween: 24,
        }
      }
    });
  }
}

initSwipers();

window.addEventListener('resize', () => {
  initSwipers();
});