import Swiper from 'swiper';
import Component from '../classes/Component';
import { Navigation, Pagination } from 'swiper/modules';
import { $events } from '../helpers/events';
import { $dom } from '../helpers/dom';
import variables from '../variables';

const { get, getAll, addClass, removeClass, toggleClass, attr } = $dom;
const { active } = variables.classNames;

const catalogItemSelector = '.js-catalog-item';
const catalogItemSliderSelector = '.js-catalog-item-slider';
const catalogItemMoreSelector = '.js-catalog-item-more';
const catalogItemtableSelector = '.js-catalog-table';

const catalogItemPriceSelector = '.js-catalog-price';
const catalogItemPriceElemSelector = '.js-catalog-price-elem';
const catalogItemPriceValueSelector = '.js-catalog-price-value';

const dataValue = 'data-value';

export function catalogFunctional() {

  const itemMoreClickHandler = event => {
    const target = event.target.closest(catalogItemMoreSelector);

    if (!event.target.closest(catalogItemMoreSelector)) return;

    const item = target.parentNode.parentNode.parentNode;

    toggleClass(item, active);
  }

  const itemPriceListCleaner = (list) => {
    list.forEach(element => {
      removeClass(element, active);
    });
  }

  const itemPriceClickHandler = event => {
    const target = event.target.closest(catalogItemPriceElemSelector);

    // console.log(target.parentNode.parentNode);

    if (!event.target.closest(catalogItemPriceElemSelector)) return

    const pricesList = getAll(catalogItemPriceElemSelector, target.parentNode.parentNode);
    
    const value = attr(target, dataValue);
    const number = get(catalogItemPriceValueSelector, target.parentNode.parentNode)

    number.innerHTML = value;

    itemPriceListCleaner(pricesList);
    addClass(target, active);

  }

  return new Component({
    name: 'catalogFunctional',
    requiredTargets: catalogItemSelector,
    onCreate() { },
    onInit() {

      this.catalogSlider = new Swiper(catalogItemSliderSelector, {
        modules: [Navigation, Pagination],
        spaceBetween: 20,

        navigation: {
          nextEl: '.catalog__item-slider-navigation-next',
          prevEl: '.catalog__item-slider-navigation-prev',
        },

        pagination: {
          el: '.slider__pagination',
          bulletClass: 'slider__pagination-bullet',
          bulletActiveClass: 'slider__pagination-bullet-active',
          type: 'bullets',
          clickable: true,
        },
      })

      $events.delegate
        .on('click', catalogItemSelector, itemMoreClickHandler)
        .on('click', catalogItemPriceSelector, itemPriceClickHandler)
    },
    onDestroy() {
      $events.delegate
        .off('click', catalogItemSelector, itemMoreClickHandler)
        .off('click', catalogItemPriceSelector, itemPriceClickHandler)
     }
  })
}