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
const galleryOpenerMainSelector = '.js-gallery-opener-main';

const dataTabIndex = 'data-tab-index';
const dataItemIndex = 'data-item-index';
const dataSwiperSlideIndex = 'data-swiper-slide-index';

export function gallerySlider() {

  let allowClick = null;

  let currentItem = `${galleryTabItemSelector}.is-current`;

  let modalSliderElement = null;

  const galleryModalElement = new Modal('#js-gallery-modal', {

  })

  const initSlider = () => {
    return new Swiper(`${currentItem} ${gallerySliderSelector}`, {
      modules: [Thumbs, Navigation],
      spaceBetween: 8,
      slidesPerView: 1,
      // loop: true,

      // breakpoints: {
      //   320: {
      //     spaceBetween: 8,
      //   },
      //   768: {
      //     spaceBetween: 8,
      //   },
      //   992: {
      //     spaceBetween: 8,
      //   },
      // },

      navigation: {
        nextEl: '.slider__navigation-button-next',
        prevEl: '.slider__navigation-button-prev',
      },

      thumbs: {
        slideThumbActiveClass: active,
        autoScrollOffset: 1,
        swiper: new Swiper(`${currentItem} ${galleryThumbSelector}`, {
          // loop: true,

          breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
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
  }

  const iniModaltSlider = (selector) => {
    return new Swiper(selector, {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      // loop: true,

      navigation: {
        nextEl: '.slider__navigation-button-next',
        prevEl: '.slider__navigation-button-prev',
      },

      pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          return `<span>${current}</span> <span>из</span> <span>${(total)}</span>`;
        }
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

    if (!target) return;

    const tabIndex = attr(target, dataTabIndex);

    clearControllsClasses()
    addClass(target, active);

    const currentElem = getAll(galleryTabItemSelector, galleryTabSelector)[tabIndex];

    addClass(currentElem, current);

    currentItem = `${galleryTabItemSelector}.is-current`;

    initSlider(currentItem);

  }

  const tabItemClickHandler = event => {
    let target = event.target;

    if (event.target.closest(galleryOpenerSelector)) {
      
      target = event.target.closest(galleryOpenerSelector);

      const slide = get('.swiper-slide.swiper-slide-active', target.parentNode);
      
      // console.log(slide);
      
      // const currentIndex = attr(slide, dataSwiperSlideIndex)
      const currentIndex = attr(slide, dataItemIndex)

      const itemSliderContent = get('.swiper-wrapper', target.parentNode).innerHTML;

      get(galleryModalSliderWrapperSelector).innerHTML = itemSliderContent;

      modalSliderElement = iniModaltSlider(galleryModalSliderSelector);

      modalSliderElement.slideTo(0);
      modalSliderElement.slideTo(currentIndex, false, false);
      // console.log(modalSliderElement.slides.eq(currentIndex));

      galleryModalElement.show();

      currentPage.components.lazyLoad.init();

      return;
    }
    
    if (event.target.closest(galleryOpenerMainSelector)) {

      if (!allowClick) return;

      target = event.target.closest(galleryOpenerMainSelector);

      const currentIndex = attr(target, dataItemIndex);

      const itemSliderContent = get('.swiper-wrapper', target.parentNode.parentNode).innerHTML;

      get(galleryModalSliderWrapperSelector).innerHTML = itemSliderContent;

      modalSliderElement = iniModaltSlider(galleryModalSliderSelector);

      modalSliderElement.slideTo(0);
      modalSliderElement.slideTo(currentIndex, false, false);

      galleryModalElement.show();

      currentPage.components.lazyLoad.init();

      return;
    }
  }

  return new Component({
    name: 'gallerySlider',
    requiredTargets: gallerySelector,
    onCreate() { },
    onInit() {

      initSlider();

      $events.delegate
        .on('click', galleryControllsSelector, tabsClickHandler)
        .on('click', gallerySliderSelector, tabItemClickHandler)
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
        .off('click', gallerySliderSelector, tabItemClickHandler);
    }
  })
}