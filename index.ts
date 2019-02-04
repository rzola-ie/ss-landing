import { TweenMax, TimelineMax } from 'gsap';
import GSDevTools from './src/utils/GSDevTools.min.js';

class App {
  // query selector convenience functions
  select = s => document.querySelector(s);
  selectAll = s => document.querySelectorAll(s);
  
  mainTl = new TimelineMax();
  canvas = this.select('svg');

  constructor() {
    const tl = new TimelineMax();
    this.mainTl.add(tl);
  }

  randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

GSDevTools.create();
TweenMax.set('svg', {visibility: 'visible'})

let app = new App();
