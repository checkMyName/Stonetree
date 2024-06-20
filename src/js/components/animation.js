import gsap from "gsap";
import Component from "../classes/Component";
import { $dom } from "../helpers/dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const { get, getAll } = $dom;

gsap.registerPlugin(ScrollTrigger);

const root = '.js-have';
const pageWrapper = '.page__content';

export function animation() {

  

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }

  let options = {
    threshold: [0.4]
  };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');

  for (let elm of elements) {
    observer.observe(elm);
  }

  // -------------------------------------------------

  // let sectionsList = [];
  // let sectionsOffsetTopList = [];
  // let sectionsOffsetHeightList = [];

  // const getSectionsOffsetTop = () => {
  //   getAll(`${pageWrapper} section`).forEach((element, i) => {
  //     sectionsList.push(element);
  //     sectionsOffsetTopList.push(element.offsetTop);
  //     sectionsOffsetHeightList.push(element.offsetHeight)
  //   });
  // }

  // const sectionsAnimations = () => {

  //   let panels = gsap.utils.toArray("section");
  //   // we'll create a ScrollTrigger for each panel just to track when each panel's top hits the top of the viewport (we only need this for snapping)
  //   let tops = panels.map(panel => ScrollTrigger.create({ trigger: panel, start: "top top" }));

  //   panels.forEach((panel, i) => {
  //     ScrollTrigger.create({
  //       trigger: panel,
  //       start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
  //       pin: true,
  //       pinSpacing: false
  //     });
  //   });

  //   ScrollTrigger.create({
  //     // snap: {
  //     //   snapTo: (progress, self) => {
  //     //     let panelStarts = tops.map(st => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
  //     //       snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // find the closest one
  //     //     return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
  //     //   },
  //     //   duration: 0.5
  //     // }
  //   });
  // }

  // getSectionsOffsetTop();
  // sectionsAnimations();

  return new Component({
    name: 'animation',
    requiredTargets: pageWrapper,
    onCreate() { },
    onInit() { },
    onDestroy() { }
  })
}