const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
function loadImage(){
  const img = new Image();
  img.src = './rock.png';
  img.onload = () => {
  ctx.drawImage(img, 0, 0)
  }
}

loadImage();