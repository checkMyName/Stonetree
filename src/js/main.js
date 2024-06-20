import 'svgxuse';
import regularPage from './pages/regular';
import homePage from "./pages/home";

import {$dom} from './helpers/dom';

import {isElement} from './helpers/_utilities';
import cardPage from './pages/card';
import newsPage from './pages/news';
import newsCardPage from './pages/newsCard';
import teamPage from './pages/team';

const pages = [
	regularPage,
	homePage,
	cardPage,
	newsPage,
	newsCardPage,
	teamPage,
];

$dom.ready(function() {
	this.currentPage = pages.find(page => isElement(page.rootEl));

	if (Boolean(this.currentPage)) this.currentPage.init()
});
