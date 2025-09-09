

document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.querySelector('.liberation-memory-gallery');
  if (!gallery) return;
  const modal = document.createElement('div');
  modal.className = 'memory-modal';
  modal.style.cssText = 'display:none;position:fixed;z-index:9999;top:0;left:0;width:100vw;height:100vh;background:rgba(30,40,60,0.85);align-items:center;justify-content:center;';
  modal.innerHTML = '<img style="max-width:90vw;max-height:90vh;border-radius:14px;box-shadow:0 8px 32px #222;">';
  document.body.appendChild(modal);

  const modalImg = modal.querySelector('img');

  gallery.addEventListener('click', function(e) {
    if (e.target.classList.contains('liberation-memory-photo')) {
      modalImg.src = e.target.src;
      modal.style.display = 'flex';
    }
  });
  modal.addEventListener('click', function() {
    modal.style.display = 'none';
    modalImg.src = '';
  });
}); 

