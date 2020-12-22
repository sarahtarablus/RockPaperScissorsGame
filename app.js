function loadImages(){
  const image =  new Image();
  image.src = 'icons/rock.png';
  const pic = document.getElementById('rockPic');
  image.onload = function(){
  const ctxPic = pic.getContext('2d');
  ctxPic.drawImage(image, 0, 0);
 }
}

loadImages();