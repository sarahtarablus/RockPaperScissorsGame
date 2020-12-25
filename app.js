const rock = document.getElementById('canvas-1');
const paper = document.getElementById('canvas-2');
const scissors = document.getElementById('canvas-3');
const choice = document.querySelector('.computersChoice');
const result = document.querySelector('.result');

const ctx1 = rock.getContext('2d');
const ctx2 = paper.getContext('2d');
const ctx3 = scissors.getContext('2d');

window.onload = () => {
loadRockImage('./rock.png', 130, 30);
loadPaperImage('./paper.png', 70, 30);
loadScissorsImage('./scissors.png', 70, 30);
}

function loadRockImage(imgSrc, sx1, sy1){
  const img = new Image();
  img.src = imgSrc;
  img.onload = () => {
    const sx = sx1;
    const sy = sy1;
    const sWidth = 650;
    const sHeight = 550;
    const dx = 150;
    const dy = 160;
    const dWidth = 200;
    const dHeight = 200;
  ctx1.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  }
}

function loadPaperImage(imgSrc, sx1, sy1){
  const img = new Image();
  img.src = imgSrc;
  img.onload = () => {
    const sx = sx1;
    const sy = sy1;
    const sWidth = 680;
    const sHeight = 550;
    const dx = 150;
    const dy = 160;
    const dWidth = 200;
    const dHeight = 200;
  ctx2.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  }
}

function loadScissorsImage(imgSrc, sx1, sy1){
  const img = new Image();
  img.src = imgSrc;
  img.onload = () => {
    const sx = sx1;
    const sy = sy1;
    const sWidth = 680;
    const sHeight = 550;
    const dx = 150;
    const dy = 160;
    const dWidth = 200;
    const dHeight = 200;
  ctx3.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  }
}

rock.addEventListener('click', rockChoice);
paper.addEventListener('click', paperChoice);
scissors.addEventListener('click', scissorsChoice);

function rockChoice(e){
  e.preventDefault();
  let elements = ['rock', 'paper', 'scissors'];
  let computersChoice = elements[Math.floor(Math.random() * elements.length)];
  if(computersChoice  === 'rock'){
    choice.innerHTML = `The computer chose: ${computersChoice}`;
    result.innerHTML = 'Stalemate';
    result.style.color = 'blue';
  }else if(computersChoice === 'paper'){
    choice.innerHTML = `The computer chose: ${computersChoice}`;
    result.innerHTML = 'Sorry you lost!';
    result.style.color = 'red';
  }else if(computersChoice === 'scissors'){
    choice.innerHTML = `The computer chose: ${computersChoice}`;
    result.innerHTML = 'You Won!';
    result.style.color = 'green';
  } 
}

function paperChoice(e){
  e.preventDefault();
  let elements = ['rock', 'paper', 'scissors'];
  let computersChoice = elements[Math.floor(Math.random() * elements.length)];
  if(computersChoice  === 'rock'){
    choice.innerHTML = `The computer chose: ${computersChoice}`;
    result.innerHTML = 'You Won!'
    result.style.color = 'green';
  }else if(computersChoice === 'paper'){
    choice.innerHTML = `The computer chose: ${computersChoice}`;
    result.innerHTML = 'Stalemate';
    result.style.color = 'blue';
  }else if(computersChoice === 'scissors'){
    choice.innerHTML = `The computer chose: ${computersChoice}`;
    result.innerHTML = 'Sorry you lost!';
    result.style.color = 'red';
  } 
}

function scissorsChoice(e){
  e.preventDefault();
  let elements = ['rock', 'paper', 'scissors'];
  let computersChoice = elements[Math.floor(Math.random() * elements.length)];
  if(computersChoice  === 'rock'){
    choice.innerHTML = `The computer chose: ${computersChoice}`;
    result.innerHTML = 'Sorry you lost!';
    result.style.color = 'red';
  }else if(computersChoice === 'paper'){
    choice.innerHTML = `The computer chose: ${computersChoice}`;
    result.innerHTML = 'You won!';
    result.style.color = 'green';
  }else if(computersChoice === 'scissors'){
    choice.innerHTML = `The computer chose: ${computersChoice}`;
    result.innerHTML = 'Stalemate';
    result.style.color = 'blue';
  } 
}



