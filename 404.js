import LocomotiveScroll from './locomotive-scroll.esm.js';

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});

console.log("test");


document.getElementById("returnToHome").onclick = function () {
  location.href = "./index.html";
};