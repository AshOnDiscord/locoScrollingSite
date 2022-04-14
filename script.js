import LocomotiveScroll from './locomotive-scroll.esm.js';

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});

console.log("test");


document.getElementById("card1").onclick = function () {
  location.href = "https://fuckle.ericzheng28.repl.co/";
};

document.getElementById("card2").onclick = function () {
  location.href = "https://fuckle.ericzheng28.repl.co/";
};

document.getElementById("card3").onclick = function () {
  location.href = "https://fuckle.ericzheng28.repl.co/";
};