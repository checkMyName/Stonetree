import Page from '../../classes/Page';
import { catalogFunctional } from '../../components/catalogFunctional';
import { additionalSlider } from './additionalSlider';
import { informationSlider } from './informationSlider';
import { introSlider } from './introSlider';
import { quizFunctional } from './quizFunctional';

const homePage = new Page({
  name: 'home',
  rootElementId: 'js-page-home',
  
  onCreate() {
    console.log('home create')
  },
  onInit() {
    console.log('home init')

    this
      .addComponent(introSlider)
      .addComponent(informationSlider)
      // .addComponent(catalogFunctional)
      .addComponent(quizFunctional)
      .addComponent(additionalSlider)
  },
  onDestroy() {
    console.log('home destroy')
  },
});

export default homePage;
