import Component from '../classes/Component';
import IMask from 'imask';

import { $dom } from '../helpers/dom';

const { getAll } = $dom

const fieldSelector = '.js-email-mask'

export function emailMask() {

  return new Component({
    name: 'emailMask',
    requiredTargets: fieldSelector,
    onCreate() {
      // {1,20}@{1,20}.{3}[.{2}]

      this.maskOptions = {
        mask: '{#}000[aaa]/NIC-`*[**]'

        // mask: function (value) {
        //   if (/^[a-z0-9_\.-]+$/.test(value))
        //     return true;
        //   if (/^[a-z0-9_\.-]+@$/.test(value))
        //     return true;
        //   if (/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value))
        //     return true;
        //   if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value))
        //     return true;
        //   if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value))
        //     return true;
        //   if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value))
        //     return true;
        //   if (/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value))
        //     return true;
        //   return false;
        // }
      };

      this.masks = [];

      console.log(this.maskOptions);
    },
    onInit() {
      this.masks = getAll(fieldSelector).map(field => IMask(field, this.maskOptions))
    },
    onDestroy() {
      this.masks = this.masks.filter(mask => {
        mask.destroy && mask.destroy();
        return false
      });
    }
  })
}