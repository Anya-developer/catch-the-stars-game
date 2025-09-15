const spaceShipMove = () => {
  let spaceShip = document.querySelector('.space-ship');
  let container = document.querySelector('.container');
  let button = document.querySelector('.start-button');
  let offer = document.querySelector('.offer');
  let x = 0;
  spaceShip.style.top = window.innerHeight + 'px';
  spaceShip.classList.add("space-ship--hidden");
  button.addEventListener("click", () => {
    offer.style.opacity = 0;
    spaceShip.classList.remove("space-ship--hidden");
    spaceShip.style.top = window.innerHeight - spaceShip.offsetHeight - 100 + 'px';
    document.addEventListener('transitionend', () => {
      spaceShip.style.transition = "none";
      document.addEventListener('keydown', (event) => {
        let key = event.key;
        if(key !== 'ArrowLeft' && key !== 'ArrowRight') return;
        if(key === 'ArrowLeft' && x > 0){
          x -= 100;
        }
        if(key === 'ArrowRight' && x < container.offsetWidth - spaceShip.offsetWidth){
          x += 100;  
        }
        spaceShip.style.left = x + "px";  
      });
    });
  });
};

export {spaceShipMove};