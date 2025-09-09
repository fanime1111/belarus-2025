
function showModelModal(data) {
  const modal = document.getElementById('model-modal');
  document.getElementById('model-modal-title').textContent = data.title || '';
  document.getElementById('model-modal-date').textContent = data.date || '';
  document.getElementById('model-modal-desc').innerHTML = data.desc || '';
  const photosDiv = document.getElementById('model-modal-photos');
  photosDiv.innerHTML = '';
  if (data.photos && data.photos.length) {
    data.photos.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'фото';
      photosDiv.appendChild(img);
    });
  }
  modal.style.display = 'flex';
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('tabindex', '0');
  setTimeout(() => { modal.focus(); }, 10);
}
function hideModelModal() {
  const modal = document.getElementById('model-modal');
  modal.style.display = 'none';
  modal.removeAttribute('aria-modal');
}
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('model-modal');
  if (modal) {
    document.getElementById('close-model-modal').onclick = hideModelModal;
    modal.onclick = function(e) { if (e.target === modal) hideModelModal(); };
    modal.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') hideModelModal();
    });
  }
});


