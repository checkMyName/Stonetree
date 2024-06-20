import Swiper from 'swiper';
import Component from '../../classes/Component';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { $dom } from '../../helpers/dom';
import LazyLoad from 'vanilla-lazyload';
import variables from '../../variables';

const { getAll, addClass, removeClass } = $dom;
const { current } = variables.classNames;

const introSliderSelector = '.js-home-intro-slider';
const introBgSelector = '.js-intro-bg-element';

export function introSlider() {

  const handleSlideChange = event => {

    const bgImagesList = getAll(introBgSelector);

    bgImagesList.forEach(element => {
      removeClass(element, current)
    });

    addClass(bgImagesList[event.activeIndex], current);
  }

  return new Component({
    name: 'introSlider',
    requiredTargets: introSliderSelector,
    onCreate() { },
    onInit() {

      this.homeIntroSlider = new Swiper(introSliderSelector, {
        modules: [Navigation, Autoplay, Pagination, EffectFade],
        slidesPerView: 1,
        speed: 700,
        spaceBetween: 20,

        effect: "fade",
        fadeEffect: {
          crossFade: true
        },

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

      this.homeIntroSlider.on('slideChange', handleSlideChange);

    },
    onDestroy() {
      this.homeIntroSlider = null;

      this.homeIntroSlider.off('slideChange', handleSlideChange);
     }
  })
}