import Swiper from 'swiper';
import Component from '../../classes/Component';
import { Grid, Pagination } from 'swiper/modules';

const advantagesSliderSelector = '.js-advantages-slider';

export function advantagesSlider() {
  return new Component({
    name: 'advantagesSlider',
    requiredTargets: advantagesSliderSelector,
    onCreate() { },
    onInit() {
      this.cardAdvantagesSlider = new Swiper(advantagesSliderSelector, {
        modules: [Pagination, Grid],
        // speed: 700,
        // spaceBetween: 20,
        
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 8,
            // direction: 'vertical',
            grid: {
              fill: 'row',
              rows: 6,
            }
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 8,
            // grid: {
            //   fill: 'row',
            //   rows: 6,
            // }
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
            grid: {
              fill: 'row',
              rows: 4,
            }
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 20,
            grid: {
              fill: 'row',
              rows: 4,
            }
          }
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
      this.cardAdvantagesSlider = null;
    }
  })
}