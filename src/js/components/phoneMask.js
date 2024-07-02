import Component from '../classes/Component';
import { $events } from '../helpers/events';
import IMask from 'imask';
import { $dom } from '../helpers/dom';
import variables from '../variables';
import gsap from 'gsap';

const { get, getAll, addClass, removeClass, toggleClass, attr } = $dom;
const { active, current, hidden } = variables.classNames;

let maskData;

const maskSelector = '.js-mask';
const maskSwitcherSelector = '.js-mask-switcher';
const maskButtonSelector = '.js-mask-switcher-button';
const maskButtonIconSelector = '.js-mask-switcher-button-icon';
const maskContentSelector = '.js-mask-switcher-content';
const maskSearchSelector = '.js-mask-switcher-search';
const maskItemSelector = '.js-mask-switcher-item';
const fieldSelector = '.js-phone-mask';

const switcherItemTemplate = get('#mask-switcher-item').innerHTML;

const DATA_URL = 'phoneCodes.json';

const dataCurrentCountry = 'data-current-country';
const dataMask = 'data-mask';
const dataStartWith = 'data-start-with';
const dataCountry = 'data-country';
const dataCountryShort = 'data-country-short';
const dataFlag = 'data-flag';

export function phoneMask() {

  let currenSwitcherElement;

  let maskInst;
  let maskInstances = [];

  const switcherContentList = getAll(maskSelector);

  const insertElement = (element, template) => element.insertAdjacentHTML('beforeend', template);

  getAll(maskSearchSelector).forEach(element => {
    element.value = '';
  })

  let getPhoneMaskData = async () => {
    const response = await fetch(DATA_URL);

    let mask = await response.json();
    let data = Object.values(mask);

    return data;
  }

  const maskSwitcher = async () => {
    maskData = await getPhoneMaskData();

    maskData.map(data => {
      const resultTemplate = Object.keys(data)
        .reduce((acc, key) => {
          if (data.hasOwnProperty(key)) {
            const val = data[key];
            acc = acc.replaceAll(`{{${key}}}`, val);

            if (key == 'mask') {
              acc = acc.replaceAll(`{{_mask}}`, val.replace(/\*|#|\$/g, '0'))
              acc = acc.replaceAll(`{{_start_with}}`, val.replace(/\*|#|[\\]|-|[()]|\$/g, ''))
              acc = acc.replaceAll(`{{__start_with}}`, val.replace(/\*|#|[\\]|-|[()]|\$/g, ''))
            }

            if (key == 'cc') {
              acc = acc.replaceAll(`{{_cc}}`, val.toString().toLowerCase());
            }
          }
          return acc;
        }, switcherItemTemplate)

      switcherContentList.forEach(element => {
        const el = get(maskContentSelector, element)
        insertElement(el, resultTemplate);
      });
    })

    setCurrentMask();
  }

  const clearSwitcherItemClasses = () => {
    getAll(maskItemSelector).forEach(elem => {

      removeClass(elem, current);
    })
  }

  const setupMask = (input, mask, startWith) => {
    return IMask(input, {
      mask: mask,
      // startsWith: startWith,
      // lazy: false,
    });
  }

  const setCurrentMask = () => {

    // clearSwitcherItemClasses();

    switcherContentList.forEach(element => {

      const currentCountry = attr(get(maskSwitcherSelector, element), dataCurrentCountry);

      const currentSwitcher = get(maskSwitcherSelector, element);

      // console.log(get(maskSwitcherSelector, element));

      getAll(maskItemSelector, element).forEach(elem => {

        if (attr(elem, dataCountryShort) == currentCountry) {
          addClass(elem, current);

          const currentInputPhone = get(fieldSelector, elem.parentNode.parentNode.parentNode.parentNode);
          const currentFlagElement = get('.icon', elem).innerHTML;

          get(maskButtonIconSelector, currentSwitcher).innerHTML = currentFlagElement;

          maskInst = setupMask(currentInputPhone, attr(elem, dataMask), attr(elem, dataStartWith))

          attr(currentInputPhone, 'maxlength', attr(elem, dataMask).length);
          attr(currentInputPhone, 'data-validate-length', attr(elem, dataMask).length);

          maskInstances.push(maskInst)
        }
      })
    })
  }

  const switcherOpener = event => {
    let target = event.target;

    if (event.target.closest(maskButtonSelector)) {
      target = event.target.closest(maskButtonSelector);

      currenSwitcherElement = get(maskContentSelector, target.parentNode);

      toggleClass(target.parentNode, active);
    }

  }

  const switcherCloser = () => {

    if (!currenSwitcherElement) return;

    removeClass(currenSwitcherElement.parentNode.parentNode, active);
  }

  const switcherOptionHandler = event => {
    const target = event.target.closest(maskItemSelector);

    const mask = attr(target, dataMask);
    const startWith = attr(target, dataStartWith);
    const country = attr(target, dataCountry);
    const countryShort = attr(target, dataCountryShort);
    const flag = attr(target, dataFlag);

    const currentFlagElement = get('.icon', target).innerHTML;

    console.log(currentFlagElement);

    clearSwitcherItemClasses();

    getAll(maskSwitcherSelector).forEach(element => {

      const currentSwitcherElement = element;

      // const inputPhone = get(fieldSelector, currentSwitcherElement.parentNode);

      // const currentFlagElement = get('.icon', target).innerHTML;

      get(maskButtonIconSelector, currentSwitcherElement).innerHTML = currentFlagElement;

      // attr(imgElem, 'src', flag);
      attr(currentSwitcherElement, dataCurrentCountry, countryShort);
    })

    addClass(target, current);

    const currentSwitcherElement = target.parentNode.parentNode.parentNode;
    // console.log(currentSwitcherElement);
    // const imgElem = get('img', currentSwitcherElement);

    const inputPhone = get(fieldSelector, currentSwitcherElement.parentNode);

    // attr(imgElem, 'src', flag);
    // attr(currentSwitcherElement, dataCurrentCountry, countryShort);

    maskInstances.forEach(element => {

      element.updateOptions({
        mask: mask,
        // startsWith: startWith,
        // lazy: false,
      })

      // console.log(element.masked);

      inputPhone.value = '';

      switch (countryShort) {
        case 'KP': {
          attr(inputPhone, 'maxlength', mask.length - 1);
          attr(inputPhone, 'data-validate-length', mask.length - 1);
        }
        break;
        
        case 'GR': {
          attr(inputPhone, 'maxlength', mask.length - 1);
          attr(inputPhone, 'data-validate-length', mask.length - 1);
        }
        break;
        
        case 'MY': {
          attr(inputPhone, 'maxlength', mask.length - 1);
          attr(inputPhone, 'data-validate-length', mask.length - 1);
        }
        break;

        case 'SH': {
          attr(inputPhone, 'maxlength', mask.length - 1);
          attr(inputPhone, 'data-validate-length', mask.length - 1);
        }
        break;
        
        case 'TL': {
          attr(inputPhone, 'maxlength', mask.length - 1);
          attr(inputPhone, 'data-validate-length', mask.length - 1);
        }
        break;

        default: {
          attr(inputPhone, 'maxlength', mask.length);
          attr(inputPhone, 'data-validate-length', mask.length);
        }
      }

      // attr(inputPhone, 'maxlength', mask.length);
      // attr(inputPhone, 'data-validate-length', mask.length);
    })

    switcherCloser();
  }

  const searchMaskHandler = event => {
    const target = event.target;

    const itemsArr = getAll(maskItemSelector, get(maskContentSelector, target.parentNode))

    const value = target.value;

    itemsArr.forEach(element => {
      const country = attr(element, dataCountry);

      addClass(element, hidden);

      if (country.toLowerCase().includes(value.toLowerCase())) {
        removeClass(element, hidden);
      }
    })
  }

  return new Component({
    name: 'phoneMask',
    requiredTargets: fieldSelector,
    onCreate() {
    },
    onInit() {

      maskSwitcher();

      // $events.add('scroll', window, () => {
      //   switcherCloser();
      // })

      $events.delegate
        .on('click', maskSwitcherSelector, switcherOpener)
        .on('click', maskContentSelector, switcherOptionHandler)
        .on('input', maskSearchSelector, searchMaskHandler)
        .on('show.bs.modal', window, () => {
          gsap.set('.js-header', {
            paddingRight: '17px',
          })
        })
        .on('hidden.bs.modal', window, () => {
          gsap.set(get('.js-header'), {
            paddingRight: '0',
          })
        })

      getAll(fieldSelector).forEach(element => {
        element.value = '';
      });
    },
    onDestroy() {
      $events.delegate
        .off('click', maskSwitcherSelector, switcherOpener)
        .off('click', maskContentSelector, switcherOptionHandler)
        .off('input', maskSearchSelector, searchMaskHandler)
        .off('show.bs.modal', window, () => {
          gsap.set('.js-header', {
            paddingRight: '17px',
          })
        })
        .off('hidden.bs.modal', window, () => {
          gsap.set(get('.js-header'), {
            paddingRight: '0',
          })
        })
    }
  })
}