'use strict'

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs'

new Swiper('.productsSwiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 18,
  pagination: {
    el: '.productsPagination',
    clickable: true,
  },
  breakpoints: {
    1023: {
      slidesPerView: 4,
    },
    767.98: {
      slidesPerView: 2.5,
    },
    690: {
      slidesPerView: 2.5,
    },
    480.98: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
  },
})

new Swiper('.sellersSwiper', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 16,

  breakpoints: {
    1074: {
      slidesPerView: 3,
    },
    1023: {
      slidesPerView: 2.5,
    },
    767.98: {
      slidesPerView: 2,
    },
    612: {
      slidesPerView: 1.8,
    },
    550: {
      slidesPerView: 1.5,
    },
    480.98: {
      slidesPerView: 1.3,
    },
    380: {
      slidesPerView: 1.2,
    },
    320: {
      slidesPerView: 1,
    },
  },
})

new Swiper('.chocolateSwiper', {
  loop: true,
  slidesPerView: 'auto',
  pagination: {
    el: '.chocolatePagination',
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    900: {
      slidesPerView: 2.6,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 26,
    },
  },
})
