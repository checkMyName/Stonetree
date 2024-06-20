import Page from '../../classes/Page';
import { newsControllsSlider } from './newsControllsSlider';

const newsPage = new Page({
  name: 'news',
  rootElementId: 'js-page-news',

  onCreate() {
    console.log('news create')
  },
  onInit() {
    console.log('news init')

    this
      .addComponent(newsControllsSlider)
      // .addComponent(informationSlider)
      // .addComponent(catalogFunctional)
      // .addComponent(quizFunctional)
      // .addComponent(additionalSlider)
  },
  onDestroy() {
    console.log('news destroy')
  },
});

export default newsPage;
