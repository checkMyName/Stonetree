import Component from '../classes/Component';
import { $events } from '../helpers/events';
import { $dom } from '../helpers/dom';
import { $ui } from '../helpers/ui';
import variables from '../variables';

const { active } = variables.classNames
const { get, addClass, removeClass, toggleClass, attr, createElement, append, remove } = $dom;

const headerSelector = '.js-header';
const headerMenuButtonSelector = '.js-menu-button';
const headerMenuLinkSelector = '.js-menu-link';
const isScrolledClass = 'is-scrolled';

const dataAnchor = 'data-anchor';

export function menuFunctional() {

  let isOpened = false;

  const isMenuOpened = isOpened => {
    const backdropElement = createElement('div', {
      class: 'menu__backdrop',
    });

    if (isOpened) {
      $ui.blockScroll('enable');

      append(get('main'), backdropElement);
    } else {
      remove('.menu__backdrop');
      $ui.blockScroll('disable');
    }
  }

  const menuClickHandler = event => {
    const target = event.target.closest(headerMenuButtonSelector);

    toggleClass(target, active);
    toggleClass(headerSelector, active);
    isMenuOpened(!isOpened);

    isOpened = !isOpened;
  }

  const headerStatusHandler = () => {
    const yScroll = window.scrollY;

    if (yScroll >= 10) {
      addClass(headerSelector, isScrolledClass);
    } else {
      removeClass(headerSelector, isScrolledClass);
    }
  }

  const anchorClickHandler = event => {
    event.preventDefault();

    const link = event.target.closest(headerMenuLinkSelector);

    const anchor = attr(link, dataAnchor);

    // console.log(link);
    // console.log(anchor);

    scrollTo({
      top: get(anchor).offsetTop - 100,
      behavior: 'smooth',
    })

    menuClose();
  }

  const menuClose = () => {

    // console.log('fkdjgdkjgkd');

    removeClass(headerMenuButtonSelector, active);
    removeClass(headerSelector, active);

    isMenuOpened(false);
    isOpened = false;

  }

  return new Component({
    name: 'menuFunctional',
    requiredTargets: headerSelector,
    onCreate() { },
    onInit() {

      headerStatusHandler();

      $events.add('scroll', window, headerStatusHandler)

      $events.resize('on', () => {
        if(window.innerWidth >= 992) {
          menuClose();
        }
      })

      $events.delegate
        .on('click', headerMenuButtonSelector, menuClickHandler)
        .on('click', headerMenuLinkSelector, anchorClickHandler)
        // .on('click', window, event => {
        //   const target = event.target;

        //   if (target.closest('.js-header')) return

        //   menuClose();
        // })
    },
    onDestroy() {
      $events.delegate
        .off('click', headerMenuButtonSelector, menuClickHandler)
        .off('click', headerMenuLinkSelector, anchorClickHandler)
        // .off('click', window, event => {
        //   const target = event.target;

        //   if (target.closest('.js-header')) return

        //   menuClose();
        // })
    }
  })
}