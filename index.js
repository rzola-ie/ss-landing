import { TweenMax, TimelineMax, Back, Elastic, Bounce, Power4, Linear, SteppedEase } from 'gsap/all';
import jquery from "jquery";

window.$ = window.jQuery = jquery;

console.log('hello');

// declare actors
const $canvas = $('#canvas');

// clear stage
function clearStage() {
  let clearTl = new TimelineMax();
  clearTl
    .set($canvas, {y: (window.outerHeight / 2) - 102.9, x: (window.innerWidth / 2) - 250, onComplete: showCanvas})

  return clearTl
}

// show canvas on clearTl completion
function showCanvas() {
  $canvas.css('visibility', 'visible');
}

// master timeline
let masterTl = new TimelineMax();
masterTl
  .add(clearStage(), 'clear-stage')