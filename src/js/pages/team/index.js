import Page from '../../classes/Page';
import { teamControllsSlider } from './teamControllsSlider';

const teamPage = new Page({
  name: 'team',
  rootElementId: 'js-page-team',

  onCreate() {
    console.log('team create')
  },
  onInit() {
    console.log('team init')

    this
    .addComponent(teamControllsSlider)
  },
  onDestroy() {
    console.log('team destroy')
  },
});

export default teamPage;
