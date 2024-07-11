import Component from '../classes/Component';
import { $dom } from '../helpers/dom';
import { $events } from '../helpers/events';
import variables from '../variables';
import FormValidator from '@yaireo/validator'
import { isElement } from '../helpers/_utilities';

const {
  callAll,
  attr,
  get,
  remove,
  addClass,
  removeClass,
  exist,
  getAll,
  hasClass
} = $dom;

const { validating, invalid } = variables.classNames;

const { formValidationMessages } = variables;
const
  formSelector = '.js-form-validate',
  formGroupSelector = '.js-group-validate',
  formFieldSelector = '.js-field-validate',
  phoneMaskSelector = '.js-phone-mask',
  phoneMaskErrorSelector = '.js-mask-error',
  notifyClassName = 'form__group-notify',
  needValidateClassName = 'is-need-validate'
  ;

export function formValidation() {

  return new Component({
    name: 'formValidation',
    requiredTargets: formSelector,
    onCreate() {
      this.validator = null;
    },
    onInit() {

      getAll(`.form__group input`).forEach(element => {
        element.value = '';
      });

      this.validator = new FormValidator({
        classes: {
          item: formGroupSelector.replace('.', ''),
          bad: variables.classNames.invalid,
          alert: notifyClassName
        },
        texts: formValidationMessages
      });

      attr(formSelector, 'novalidate', '');

      this.checkField = formGroup => {

        if (formGroup instanceof Event) {
          const { target } = formGroup;

          if (isElement(target)) formGroup = target.closest(formGroupSelector)
        }

        const field = get(formFieldSelector, formGroup);

        console.log('2');

        // const phoneMaskInput = get('.js-phone-mask', field.parentNode);

        // console.log(phoneMaskInput);

        // console.log(field);
        // console.log(hasClass(field, 'js-phone-mask'));

        if (hasClass(field, 'js-phone-mask')) {

          if (field.value.includes('_')) {
            // console.log('2');
            addClass(get(phoneMaskErrorSelector, field.parentNode.parentNode), 'is-active')
          } else {
            removeClass(get(phoneMaskErrorSelector, field.parentNode.parentNode), 'is-active')
          }
        }

        if (isElement(field)) {
          const { valid, error } = this.validator.checkField(field);
        }
      };

      this.handleForm = event => {
        const form = event.target.closest(formSelector);
        const button = get('[type="submit"]', event.target);

        // console.log(button);

        event.preventDefault();

        callAll(formGroupSelector, this.checkField, form);

        const numberInput = get(".js-phone-mask", form);
        const ckeckbox = get('.checkbox input', form)

        // console.log(ckeckbox.checked);

        if (ckeckbox && ckeckbox.checked) {
          removeClass(ckeckbox, 'is-invalid');
        }

        if (!this.validator.checkAll(form).valid || numberInput.value.includes('_')) {

          // console.log(numberInput.parentNode.parentNode);

          // addClass(get(phoneMaskErrorSelector, numberInput.parentNode.parentNode), 'is-active')

          event.preventDefault();

        } else {
          removeClass(get(phoneMaskErrorSelector, numberInput.parentNode.parentNode), 'is-active')
          
          addClass(form, validating);

          setTimeout(() => {
            currentPage.components.formValidation.formSuccess(form);
          }, 1000);
          // button.innerHTML = `<div class="spinner-border text-secondary" role="status"><span class="visually-hidden">Loading...</span></div>`;

        }
      };

      this.formSuccess = formSelector => {
        alert('sended successfully!')

        removeClass(formSelector, validating)
      }

      callAll(formGroupSelector, el => addClass(el, needValidateClassName));

      $events
        // .add('focus blur', formFieldSelector, this.checkField)
        .delegate
        .on('submit', formSelector, this.handleForm)
        // .on('input change', formGroupSelector, this.checkField)
        ;
    },
    onDestroy() {
      this.validator = null;

      callAll(formSelector, form => {
        form.removeAttribute('novalidate');
        if (exist(formGroupSelector, form)) callAll(formGroupSelector, el => removeClass(el, needValidateClassName), form);
        if (exist('.' + notifyClassName, form)) callAll('.' + notifyClassName, el => remove(el), form);
      });


      $events
        // .remove('focus blur', formFieldSelector, this.checkField)
        .delegate
        .off('submit', formSelector, this.handleForm)
        // .off('input change', formGroupSelector, this.checkField)
        ;
    },
  })
}
