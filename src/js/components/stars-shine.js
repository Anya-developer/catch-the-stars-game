const starsShine = () => {

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min
  }

  function createStars(i) {
    for (var i; i; i--) {
      drawStars();
    }
  }

  function drawStars(){
    let star = document.createElement('div')
    star.className = "fon-star";
    star.style.top = 100*Math.random()+'%';
    star.style.left = 100*Math.random()+'%';
    document.querySelector('.fon') .appendChild(star);
  }

  function animateStars() {
    let stars = document.querySelectorAll(".fon-star");
    stars.forEach(star => {
      star.style.animationDelay = getRndInteger(2, 5) + 's';  
    });
  }

  createStars(200);
  animateStars();
};

export {starsShine};