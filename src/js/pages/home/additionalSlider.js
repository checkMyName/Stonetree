import Swiper from 'swiper';
import Component from '../../classes/Component';
import { Navigation, Pagination } from 'swiper/modules';

const additionalSliderSelector = '.js-additional-slider';

export function additionalSlider() {
  return new Component({
    name: 'additionalSlider',
    requiredTargets: additionalSliderSelector,
    onCreate() { },
    onInit() {
      this.homeInformationSlider = new Swiper(additionalSliderSelector, {
        modules: [Navigation, Pagination],
        // slidesPerView: 1.3,
        speed: 700,
        // spaceBetween: 20,
        loop: true,

        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 1.3,
            spaceBetween: 20
          }
        },

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
      if (this.homeInformationSlider instanceof Swiper) {
        this.homeInformationSlider.destroy();
        this.homeInformationSlider = null;
      }
     }
  })
}