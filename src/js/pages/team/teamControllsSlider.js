import Swiper from 'swiper';
import Component from '../../classes/Component';
import { $events } from '../../helpers/events';
import { $dom } from '../../helpers/dom';
import variables from '../../variables';
import { Grid, Navigation } from 'swiper/modules';

const teamControllsSliderSelector = '.js-team-controlls-slider';

const { getAll, addClass, removeClass } = $dom;
const { active } = variables.classNames;

const controllsSelector = '.js-controlls';
const controllsItemSelector = '.js-controlls-item';

export function teamControllsSlider() {

  let allowClick = null;
  let teamSliderElement = null;

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

  const teamSliderInit = () => {
    if (window.innerWidth <= 991) {
      teamSliderElement = new Swiper(teamControllsSliderSelector, {
        modules: [Grid, Navigation],
        // loop: true,

        navigation: {
          nextEl: '.slider__navigation-button-next',
          prevEl: '.slider__navigation-button-prev',
        },

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

        on: {
          touchStart: function () {
            allowClick = true;
          },

          touchMove: function () {
            allowClick = false;
          },

          touchEnd: function () {
            setTimeout(function () {
              allowClick = true;
            }, 100);
          },
        }
      })
    } else {
      allowClick = true;

      if (teamSliderElement instanceof Swiper) {
        teamSliderElement.destroy();
        teamSliderElement = null;
      }
    }


  }

  return new Component({
    name: 'teamControllsSlider',
    requiredTargets: teamControllsSliderSelector,
    onCreate() { },
    onInit() {

      teamSliderInit();

      $events.resize('on', teamSliderInit);

      $events.delegate
        .on('click', controllsSelector, controllsClickHandler)
    },
    onDestroy() {
      if (this.teamControllsElementSlider instanceof Swiper) {
        this.teamControllsElementSlider.destroy();
        this.teamControllsElementSlider = null;
      }

      $events.delegate
        .off('click', controllsSelector, controllsClickHandler)
    }
  })
}