import Swiper from 'swiper';
import Component from '../../classes/Component';
import { Navigation, Pagination } from 'swiper/modules';
import { $events } from '../../helpers/events';
import { $dom } from '../../helpers/dom';
import variables from '../../variables';

const newsControllsSliderSelector = '.js-news-controlls-slider';

const { getAll, addClass, removeClass } = $dom;
const { active } = variables.classNames;

const controllsSelector = '.js-controlls';
const controllsItemSelector = '.js-controlls-item';

export function newsControllsSlider() {

  let allowClick = null;

  const clearControllsClasses = () => {
    getAll(controllsItemSelector).forEach(element => {
      removeClass(element, active);
    });
  }

  const controllsClickHandler = event => {

    if (!allowClick) return;

    const target = event.target.closest(controllsItemSelector);

    if (!event.target.closest(controllsItemSelector)) return;

    clearControllsClasses()
    addClass(target, active);
  }

  return new Component({
    name: 'newsControllsSlider',
    requiredTargets: newsControllsSliderSelector,
    onCreate() { },
    onInit() {
      this.newsControllsElementSlider = new Swiper(newsControllsSliderSelector, {
        modules: [Navigation],

        breakpoints: {
          320: {
            slidesPerView: 'auto',
            spaceBetween: 8,
          },
          1200: {
            slidesPerView: 'auto',
            spaceBetween: 20,
          }
        },

        navigation: {
          nextEl: '.slider__navigation-button-next',
          prevEl: '.slider__navigation-button-prev',
        },

        on: {
          touchStart: function () {
            allowClick = true;

            // console.log(allowClick);
          },

          touchMove: function () {
            allowClick = false;

            // console.log(allowClick);
          },

          touchEnd: function () {
            setTimeout(function () {
              allowClick = true;
            }, 100);
          },
        }
      })

      $events.delegate
        .on('click', controllsSelector, controllsClickHandler)
    },
    onDestroy() {
      if (this.newsControllsElementSlider instanceof Swiper) {
        this.newsControllsElementSlider.destroy();
        this.newsControllsElementSlider = null;
      }

      $events.delegate
        .off('click', controllsSelector, controllsClickHandler)
    }
  })
}