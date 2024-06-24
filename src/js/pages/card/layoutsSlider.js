import Swiper from 'swiper';
import Component from '../../classes/Component';
import { Navigation, Pagination } from 'swiper/modules';

const layoutsSliderSelector = '.js-card-layouts-slider';

export function layoutsSlider() {
  return new Component({
    name: 'layoutsSlider',
    requiredTargets: layoutsSliderSelector,
    onCreate() { },
    onInit() {
      this.cardLayoutsSlider = new Swiper(layoutsSliderSelector, {
        modules: [Pagination, Navigation],
        // speed: 700,
        // spaceBetween: 20,

        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        },

        // effect: "fade",
        // fadeEffect: {
        //   crossFade: true
        // },

        // autoplay: {
        //   delay: 3000,
        // },

        navigation: {
          nextEl: '.slider__navigation-button-next',
          prevEl: '.slider__navigation-button-prev',
        },

        pagination: {
          el: '.slider__pagination',
          bulletClass: 'slider__pagination-bullet',
          bulletActiveClass: 'slider__pagination-bullet-active',
          type: 'bullets',
          clickable: true,
        },
      })
    },
    onDestroy() {
      this.cardLayoutsSlider = null;
    }
  })
}