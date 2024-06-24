import Component from '../../classes/Component';
import { $dom } from '../../helpers/dom';
import { $events } from '../../helpers/events';
import variables from '../../variables';

const { get, getAll, addClass, removeClass } = $dom;
const { current } = variables.classNames;

const locationsSelector = '.js-locations';
const locationsitemSelector = '.js-locations-item';

export function locationsChanger() {

  const clearClasses = () => {
    getAll(locationsitemSelector).forEach(element => {
      removeClass(element, current)
    });
  }

  const locationsClickHandler = event => {
    const target = event.target.closest(locationsitemSelector);

    clearClasses()
    console.log(target);
    addClass(target, current);
  }

  return new Component({
    name: 'locationsChanger',
    requiredTargets: locationsSelector,
    onCreate() { },
    onInit() {
      $events.delegate
        .on('click', locationsSelector, locationsClickHandler);
    },
    onDestroy() {
      $events.delegate
        .off('click', locationsSelector, locationsClickHandler);
    }
  })
}