'use strict'
const swiper = new Swiper('.swiper', {
  //! Основные настройки
  direction: 'horizontal', // 'vertical', 'horizontal'
  loop: false, // true - круговой слайдер, false - слайдер с конечными положениями
  speed: 400, // скорость переключения слайдов
  effect: 'slider', // cards, coverflow, flip, fade, cube
  // initialSlide: 2, // Начинаем со 2 слайдера
  freeMode: true, // можно перетаскивать как ленту
  slidesPerView: 1.2, // кол-во активных слайдов
  // centeredSlides: true, // центрирование слайдов
  spaceBetween: 16,

  //! Пагинация (точки)
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // true - Пагинация становится кликабельной
  },
})
