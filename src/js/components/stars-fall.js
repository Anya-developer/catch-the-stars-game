const starsFall = () => {
  let stars = document.querySelector('.stars');
  let catchSound = document.querySelector('#catch-sound');
  let popSound = document.querySelector('#pop-sound');
  let counter = document.querySelector('.counter');
  let counterNumber = document.querySelector('.counter__number');
  let finalScore = document.querySelector('.finish-screen__counter');
  let spaceShip = document.querySelector('.space-ship');
  let startButton = document.querySelector('.start-button');
  let restartButton = document.querySelector('.restart-button');
  let finishGameBlock = document.querySelector('.finish-screen');
  let finalTitle = document.querySelector('.finish-screen__title');
  let score = 0;
  let starsInterval;
  let starsArr = [];
  let classArr = ["star--pink", "star--yellow", "star--blue"];

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function isColliding(a, b) {
    const rectA = a.getBoundingClientRect();
    const rectB = b.getBoundingClientRect();

    return !(
      rectA.bottom < rectB.top+100 ||
      rectA.top > rectB.bottom ||
      rectA.right < rectB.left ||
      rectA.left > rectB.right
    );
  }

  function createStars() {
    const star = document.createElement('div');
    star.classList.add("star")
    star.classList.add(classArr[Math.floor(Math.random()*classArr.length)])
    star.innerHTML = `<svg viewBox="0 0 770 788" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="770.000000" height="788.000000" fill="none" customFrame="#000000"><path id="Звезда 1" d="M471.446 272.236L751.157 272.247L524.872 440.51L611.297 712.753L385 544.508L158.703 712.753L245.128 440.51L18.8433 272.247L298.554 272.236L385 0L471.446 272.236Z" fill="rgb(196,196,196)" fill-rule="evenodd" /></svg>`
    star.style.left = Math.random() * (window.innerWidth - 200) + 'px';
    star.style.width = getRndInteger(50, 90) + 'px';
    star.style.animationDuration = getRndInteger(5, 7) + 's';
    stars.appendChild(star);
    starsArr.push(star);
  }

  startButton.addEventListener("click", () => {
    restartButton.addEventListener("click", () => {
      finishGameBlock.classList.remove("finish-screen--open")
      counter.classList.remove("counter--hidden")
      spaceShip.classList.remove("space-ship--hidden");
      starsInterval = setInterval(() => {
        createStars();
      }, 2000);  
    })

    starsInterval = setInterval(() => {
      createStars();
    }, 2000); 

    function gameOver() {
      clearInterval(starsInterval);
      spaceShip.classList.add("space-ship--hidden");
      counter.classList.add("counter--hidden");
      score = 0;
      counterNumber.innerText = score;
      for(let i = starsArr.length - 1; i >= 0; i--) {
        starsArr[i].remove();
        starsArr.splice(i, 1);
      } 
    }

    function gameLoop() {
      for(let i = starsArr.length - 1; i >= 0; i--) {
        let rect = starsArr[i].getBoundingClientRect();
        if(isColliding(starsArr[i], spaceShip)) {
          score += 1;
          counterNumber.innerText = score;
          catchSound.currentTime = 0;
          catchSound.play();
          starsArr[i].remove();
          starsArr.splice(i, 1);
        }

        if(rect.top > window.innerHeight) {
          popSound.currentTime = 0;
          popSound.play();
          finalScore.innerText = `Счет: ${score}`;
          if (score<=5) {
            finalTitle.innerText = "Я так понимаю, это был разогрев?";   
          }else{
            finalTitle.innerText = "Так держать, космический странник!!!";
          }
          finishGameBlock.classList.add("finish-screen--open");
          gameOver();
          break;
        }
      } 
      requestAnimationFrame(gameLoop);
    }
    gameLoop();
  })
};

export {starsFall};