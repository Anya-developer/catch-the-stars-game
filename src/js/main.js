import {spaceShipMove} from "./components/space-ship-move.js";
import {starsFall} from "./components/stars-fall.js";
import {starsShine} from "./components/stars-shine.js";
import {shipFly} from "./components/ship-fly.js";
import '/styles/style.scss';

document.addEventListener('DOMContentLoaded', function () {
  commonFunction()
})

export const commonFunction = () => {
  spaceShipMove();
  starsFall()
  starsShine()
  shipFly()
}    