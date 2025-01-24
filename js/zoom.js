const img = document.querySelector('.preview-image');

function zoom(event) {
  const img = event.target;
  img.style.transformOrigin = event.offsetX + 'px ' + event.offsetY + 'px';  
  img.classList.toggle('zoom');  
}

img.addEventListener('click', zoom);