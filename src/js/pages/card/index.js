import Page from '../../classes/Page';
import { advantagesSlider } from './advantagesSlider';
import { gallerySlider } from './gallerySlider';
import { layoutsSlider } from './layoutsSlider';

const cardPage = new Page({
  name: 'card',
  rootElementId: 'js-page-card',
  
  onCreate() {
    console.log('card create')
  },
  onInit() {
    console.log('card init')

    this
      .addComponent(layoutsSlider)
      .addComponent(advantagesSlider)
      .addComponent(gallerySlider)
  },
  onDestroy() {
    console.log('card destroy')
  },
});

export default cardPage;
