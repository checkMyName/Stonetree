import Swiper from 'swiper';
import Component from '../../classes/Component';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

const informationSliderSelector = '.js-information-slider';

export function informationSlider() {
  return new Component({
    name: 'informationSlider',
    requiredTargets: informationSliderSelector,
    onCreate() { },
    onInit() {
      this.homeInformationSlider = new Swiper(informationSliderSelector, {
        modules: [Navigation, Autoplay, Pagination, EffectFade],
        slidesPerView: 1,
        speed: 700,
        spaceBetween: 20,

        effect: "fade",
        // fadeEffect: {
        //   crossFade: true,
        // },

        autoplay: {
          delay: 3000,
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
      this.homeInformationSlider = null;
     }
  })
}