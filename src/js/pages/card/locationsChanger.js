import Component from '../../classes/Component';
import { $dom } from '../../helpers/dom';
import { $events } from '../../helpers/events';
import variables from '../../variables';

const { get, getAll, addClass, removeClass, attr } = $dom;
const { current } = variables.classNames;

const locationsSelector = '.js-locations';
const locationsContentSelector = '.js-locations-content';
const locationsImageSelector = '.js-locations-image';
const locationsitemSelector = '.js-locations-item';

const dataLocationId = 'data-location-id';

export function locationsChanger() {

  const imagesList = getAll(locationsImageSelector, locationsContentSelector);

  const clearClasses = () => {
    getAll(locationsitemSelector).forEach((element, i) => {
      removeClass(element, current);
      removeClass(imagesList[i], current);
    });
  }

  const locationsClickHandler = event => {
    const target = event.target.closest(locationsitemSelector);

    const imgId = attr(target, dataLocationId);

    if (!event.target.closest(locationsitemSelector)) return

    clearClasses();

    addClass(target, current);
    addClass(imagesList[imgId], current);
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