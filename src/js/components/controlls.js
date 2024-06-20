import Component from '../classes/Component';
import { $dom } from '../helpers/dom';
import { $events } from '../helpers/events';
import variables from '../variables';

const { getAll, addClass, removeClass } = $dom;
const { active } = variables.classNames;

const controllsSelector = '.js-controlls';
const controllsItemSelector = '.js-controlls-item';

export function controlls() {

  // const clearControllsClasses = () => {
  //   getAll(controllsItemSelector).forEach(element => {
  //     removeClass(element, active);
  //   });
  // }

  // const controllsClickHandler = event => {
  //   const target = event.target.closest(controllsItemSelector);

  //   if (!target.closest(controllsItemSelector)) return;

  //   clearControllsClasses()
  //   addClass(target, active);
  // }

  return new Component({
    name: 'controlls',
    requiredTargets: controllsSelector,
    onCreate() { },
    onInit() {

      // $events.delegate
      //   .on('click', controllsSelector, controllsClickHandler)
    },
    onDestroy() {
      // $events.delegate
      //   .off('click', controllsSelector, controllsClickHandler)
    }
  })
}