import LocomotiveScroll from './node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js';

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});

console.log("test");