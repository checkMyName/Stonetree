import Component from '../classes/Component';
import { $dom } from '../helpers/dom';
import { $events } from '../helpers/events';
import variables from '../variables';

const { get, addClass, removeClass, toggleClass } = $dom;
const { active } = variables.classNames;

const shareSelector = '.js-share';
const shareButtonSelector = '.js-share-button';
const shareContentSelector = '.js-share-content';

export function shareFunctional() {

  const shareClickHandler = event => {
    const target = event.target;

    if (!target.closest(shareButtonSelector)) return

    toggleClass(target.closest(shareButtonSelector).parentNode, active);
  }

  const closeShare = event => {
    if (!event.target.closest(shareSelector)) {
      removeClass(shareSelector, active);
    }
  }

  return new Component({
    name: 'shareFunctional',
    requiredTargets: shareSelector,
    onCreate() { },
    onInit() {
      $events.delegate
        .on('click', shareSelector, shareClickHandler)
        .on('click', window, closeShare)
    },
    onDestroy() {
      $events.delegate
        .off('click', shareSelector, shareClickHandler)
        .off('click', window, closeShare)
     }
  })
}