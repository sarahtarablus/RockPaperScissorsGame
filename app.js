const canvas1 = document.getElementById('canvas-1');
const canvas2 = document.getElementById('canvas-2');
const canvas3 = document.getElementById('canvas-3');

const ctx1 = canvas1.getContext('2d');
const ctx2 = canvas2.getContext('2d');
const ctx3 = canvas3.getContext('2d');


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

loadRockImage('./rock.png', 130, 30);


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

loadPaperImage('./paper.png', 70, 30);

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

loadScissorsImage('./scissors.png', 70, 30);



