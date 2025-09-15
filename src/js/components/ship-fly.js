const shipFly = () => {
  let shipsArr = [];
  let body = document.querySelector("body");

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  setInterval(() => {
    const ship = document.createElement('div');
    ship.innerHTML = `<img src="src/images/small-ship.png", alt="">`;
    ship.classList.add("ship");
    ship.style.bottom = Math.random() * (window.innerHeight) + 'px';
    ship.style.width = getRndInteger(50, 90) + 'px';
    ship.style.animationDuration = getRndInteger(7, 10) + 's';
    body.appendChild(ship);
    shipsArr.push(ship);
  }, getRndInteger(10000, 20000));

  function animateShip() {
    for(let i = shipsArr.length - 1; i >= 0; i--) {
      let rect = shipsArr[i].getBoundingClientRect();
      if(rect.left > window.innerWidth) {
        shipsArr[i].remove();
        shipsArr.splice(i, 1);
      }
    }
    requestAnimationFrame(animateShip);
  }
  animateShip();
};

export {shipFly};