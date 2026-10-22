import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(component) {
    this.element = component;
    this.options = {
      slidesPerView: '1',
      spaceBetween: '20',
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
      },
      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
    };

    this.init();
  }

  setOptions() {
    if ('split' in this.element.dataset) {
      this.options.breakpoints = {
        1024: { slidesPerView: 1.5 },
      };
    }

    if ('autoplay' in this.element.dataset) {
      this.options.autoplay = {
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      };
    }

    if ('loop' in this.element.dataset) {
      this.options.loop = true;
    }

    if ('slides' in this.element.dataset) {
      this.options.slidesPerView =
        parseFloat(this.element.dataset.slides) || this.options.slidesPerView;
    }
  }

  init() {
    console.log('Initialisation de ma composante Carousel');
    this.setOptions();

    const swiper = new Swiper(this.element, this.options);
  }
}
