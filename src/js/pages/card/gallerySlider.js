import Swiper from 'swiper';
import Component from '../../classes/Component';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import variables from '../../variables';
import { $dom } from '../../helpers/dom';
import { $events } from '../../helpers/events';
import { Modal } from 'bootstrap';

const { get, getAll, attr, addClass, removeClass, hasClass } = $dom;
const { active, current } = variables.classNames;

const gallerySelector = '.js-gallery';

const galleryModalSliderSelector = '.js-gallery-modal-slider';
const galleryModalSliderWrapperSelector = '.js-gallery-modal-slider-wrapper';

const gallerySliderSelector = '.js-gallery-slider';
const galleryThumbSelector = '.js-gallery-thumb';

const gallerySliderCounterSelector = '.js-gallery-slider-counter';

const galleryControllsSelector = '.js-gallery-controlls';
const galleryControllsItemSelector = '.js-gallery-controlls-item';
const galleryTabSelector = '.js-gallery-tab';
const galleryTabItemSelector = '.js-gallery-tab-item';

const galleryOpenerSelector = '.js-gallery-opener';

const dataTabIndex = 'data-tab-index';

export function gallerySlider() {

  // let allowClick = null;

  let currentItem = `${galleryTabItemSelector}.is-current`;

  let modalSliderElement = null;

  const galleryModalElement = new Modal('#js-gallery-modal', {

  })

  const initSlider = () => {
    return new Swiper(`${currentItem} ${gallerySliderSelector}`, {
      modules: [Thumbs],
      spaceBetween: 8,

      thumbs: {
        slideThumbActiveClass: active,
        autoScrollOffset: 1,
        swiper: new Swiper(`${currentItem} ${galleryThumbSelector}`, {

          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            // 768: {
            //   slidesPerView: 1,
            //   spaceBetween: 8,
            // },
            992: {
              slidesPerView: 4,
              spaceBetween: 8,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          },

          // on: {

          //   touchStart: function () {
          //     allowClick = false;
          //   },

          //   touchMove: function () {
          //     allowClick = false;
          //   },
          // },

          
        })
      },

      on: {
        init: element => {

          getAll(gallerySliderCounterSelector).forEach(elem => {
            elem.innerHTML = element.slides.length;
          })
        },

        // touchStart: function () {
        //   allowClick = true;

        //   console.log(allowClick);
        //   console.log('2');
        // },

        // touchMove: function () {
        //   allowClick = false;

        //   console.log(allowClick);
        //   console.log('2');
        // },

        // touchEnd: function () {
        //   setTimeout(function () {
        //     allowClick = true;
        //   }, 100);
        // },
      }
    })
  }

  const iniModaltSlider = (selector) => {
    return new Swiper(selector, {
      modules: [Navigation, Pagination],
      slidesPerView: 1,

      navigation: {
        nextEl: '.slider__navigation-button-next',
        prevEl: '.slider__navigation-button-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      }
    })
  }

  const clearControllsClasses = () => {
    getAll(galleryControllsItemSelector).forEach(element => {
      removeClass(element, active);
    });

    getAll(galleryTabItemSelector).forEach(element => {
      removeClass(element, current);
    });
  }

  const tabsClickHandler = event => {
    const target = event.target.closest(galleryControllsItemSelector);

    const tabIndex = attr(target, dataTabIndex);

    clearControllsClasses()
    addClass(target, active);

    const currentElem = getAll(galleryTabItemSelector, galleryTabSelector)[tabIndex];

    addClass(currentElem, current);

    currentItem = `${galleryTabItemSelector}.is-current`;

    initSlider(currentItem);
  }

  const tabItemClickHandler = event => {
    const target = event.target.closest(galleryOpenerSelector);

    console.log(target);
    
    // if (!allowClick) return;
    
    const itemSliderContent = get('.swiper-wrapper', target.parentNode).innerHTML;

    get(galleryModalSliderWrapperSelector).innerHTML = itemSliderContent;

    modalSliderElement = iniModaltSlider(galleryModalSliderSelector);

    galleryModalElement.show();

    currentPage.components.lazyLoad.init();
  }

  return new Component({
    name: 'gallerySlider',
    requiredTargets: gallerySelector,
    onCreate() { },
    onInit() {

      initSlider();

      $events.delegate
        .on('click', galleryControllsSelector, tabsClickHandler)
        .on('click', galleryOpenerSelector, tabItemClickHandler)
    },
    onDestroy() {
      if (initSlider() instanceof Swiper) {
        initSlider.destroy();
        initSlider = null;
      }
      if (modalSliderElement instanceof Swiper) {
        modalSliderElement.destroy();
        modalSliderElement = null;
      }

      $events.delegate
        .off('click', galleryControllsSelector, tabsClickHandler)
        .off('click', galleryOpenerSelector, tabItemClickHandler);
    }
  })
}