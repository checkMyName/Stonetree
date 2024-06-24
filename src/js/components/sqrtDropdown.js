import gsap from 'gsap';
import Component from '../classes/Component';
import { $dom } from '../helpers/dom';
import { $events } from '../helpers/events';
import variables from '../variables';

const { get, getAll, addClass, removeClass, toggleClass, attr } = $dom;
const { active, selected } = variables.classNames;

const root = '.js-row';

const sqrtSelector = '.js-sqrt';
const sqrtButtonSelector = '.js-sqrt-button';
const sqrtButtonContentSelector = '.js-sqrt-button-content';
const sqrtContentSelector = '.js-sqrt-content';
const sqrtContentItemSelector = '.js-sqrt-content-item';
const catalogTableNumberSelector = '.js-catalog-table-row-number';


const dataNumber = 'data-number';

export function sqrtDropdown() {

  let currentElement = null;
  let currentButton = null;
  let currentDropdown = null;

  const dropdownClickHandler = event => {

    const row = event.target.closest(root);

    const target = event.target.closest(sqrtButtonSelector);

    if (!target) return;

    currentElement = target;

    const dropdown = get(sqrtContentSelector, row);
    const targetContent = get(sqrtButtonContentSelector, target.parentNode).innerHTML;

    currentDropdown = dropdown;

    const targetRect = target.getBoundingClientRect()

    const rowRekt = row.getBoundingClientRect();

    console.log(targetRect);

    gsap.set(dropdown, {
      x: targetRect.x - rowRekt.x,
      y: targetRect.y - rowRekt.y + targetRect.height,
    })

    dropdown.innerHTML = targetContent;

    currentButton = target;

    toggleClass(target, active);
    toggleClass(dropdown, active);
  }

  const clearDropdownClases = () => {
    getAll(sqrtContentItemSelector).forEach(element => {
      removeClass(element, selected);
    });
  }

  const dropdownSelect = event => {
    const target = event.target.closest(sqrtContentItemSelector);

    if (!currentElement) return;

    clearDropdownClases();

    addClass(target, selected);

    const number = attr(target, dataNumber);
    const value = target.innerHTML;

    const numberElement = get(catalogTableNumberSelector, currentElement.parentNode.parentNode);

    get('span', currentElement).innerHTML = value;
    numberElement.innerHTML = number;

    closeDropdown();
  }

  const closeDropdown = () => {

    removeClass(currentDropdown, active);
    removeClass(currentButton, active);

    currentElement = null;
  }

  return new Component({
    name: 'sqrtDropdown',
    requiredTargets: root,
    onCreate() { },
    onInit() {

      $events.add('scroll', window, () => {
        closeDropdown();
      })

      $events.delegate
        .on('click', root, dropdownClickHandler)
        .on('click', sqrtContentSelector, dropdownSelect)
    },
    onDestroy() {
      $events.remove('scroll', window, () => {
        closeDropdown();
      })

      $events.delegate
        .off('click', root, dropdownClickHandler)
        .off('click', sqrtContentSelector, dropdownSelect)
    }
  })
}