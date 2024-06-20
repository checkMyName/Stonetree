import Page from '../../classes/Page';
// import { newsControllsSlider } from './newsControllsSlider';

const newsCardPage = new Page({
  name: 'newsCard',
  rootElementId: 'js-page-news-card',

  onCreate() {
    console.log('newsCard create')
  },
  onInit() {
    console.log('newsCard init')

    this
      // .addComponent(newsCardControllsSlider)
    // .addComponent(informationSlider)
    // .addComponent(catalogFunctional)
    // .addComponent(quizFunctional)
    // .addComponent(additionalSlider)
  },
  onDestroy() {
    console.log('newsCard destroy')
  },
});

export default newsCardPage;
