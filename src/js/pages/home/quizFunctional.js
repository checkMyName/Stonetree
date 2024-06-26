import Component from '../../classes/Component';
import { $dom } from '../../helpers/dom';
import { $events } from '../../helpers/events';

const { get, getAll, addClass, removeClass, hasClass, attr } = $dom;

const quizSelector = '.js-quiz';
const quizStepSelector = '.js-quiz-step';
const quizButtonSelector = '.js-quiz-button';
const quizBackSelector = '.js-quiz-back';
const quizFieldSelector = '.js-quiz-step-field';

const dataStepNumber = 'data-step-number';
const currentClassName = 'is-current';
const prevClassName = 'is-prev';
const nextClassName = 'is-next';

export function quizFunctional() {

  const stepsElements = getAll(quizStepSelector);

  let prevStepElement = null;
  let currentStepElement = null;
  let nextStepElement = null;
  let isValid = false;

  const stepsClassCleaber = () => {
    stepsElements.forEach(element => {
      removeClass(element, prevClassName);
      removeClass(element, nextClassName);
    })
  }

  const stepsStateHandler = () => {

    stepsClassCleaber();

    stepsElements.forEach((element, i) => {
      if (hasClass(element, currentClassName)) {

        currentStepElement = element;

        if (stepsElements[i - 1]) {

          prevStepElement = stepsElements[i - 1];

          addClass(stepsElements[i - 1], prevClassName);

        }

        if (stepsElements[i + 1]) {

          nextStepElement = stepsElements[i + 1];

          addClass(stepsElements[i + 1], nextClassName);

        }
      }
    });
  }

  const validateStepFields = (currentStepSelector) => {
    const questionsList = getAll(quizFieldSelector, currentStepSelector);

    // console.log(currentStepSelector);

    questionsList.forEach(element => {
      // console.log(element.checked);
      if (element.checked) {
        isValid = true;
      }
    })

    return isValid;

    // console.log('false');
    // return false;
    // console.log(questionsList);
  }

  const nextStepHandler = event => {
    stepsStateHandler()
    const target = event.target.closest(quizButtonSelector);

    const step = target.parentNode.parentNode;
    // const currentStepNumber = attr(step, dataStepNumber);

    // console.log(currentStepNumber);
    // console.log(nextStepElement);

    // let adads = validateStepFields(step);
    // console.log(adads);

    if (validateStepFields(step)) {

      isValid = false;

      removeClass(step, currentClassName);

      addClass(nextStepElement, currentClassName);

      stepsStateHandler();
    }
  }

  const backStepHandler = () => {

    console.log(currentStepElement);

    const currentId = attr(currentStepElement, dataStepNumber)

    removeClass(stepsElements[currentId], currentClassName);

    addClass(stepsElements[currentId - 1], currentClassName);

    stepsStateHandler();
  }

  return new Component({
    name: 'quizFunctional',
    requiredTargets: quizSelector,
    onCreate() { },
    onInit() {
      stepsStateHandler();

      $events.delegate
        .on('click', quizButtonSelector, nextStepHandler)
        .on('click', quizBackSelector, backStepHandler)
    },
    onDestroy() {
      $events.delegate
        .off('click', quizButtonSelector, nextStepHandler)
        .off('click', quizBackSelector, backStepHandler)
    }
  })
}