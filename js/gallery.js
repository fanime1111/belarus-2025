

(function() {
  const cardKeys = [
    {
      title: 'gallery_flip_park_title',
      desc: 'gallery_flip_park_desc',
      back: 'gallery_flip_park_back'
    },
    {
      title: 'gallery_flip_bus_title',
      desc: 'gallery_flip_bus_desc',
      back: 'gallery_flip_bus_back'
    },
    {
      title: 'gallery_flip_bsuir_title',
      desc: 'gallery_flip_bsuir_desc',
      back: 'gallery_flip_bsuir_back'
    },
    {
      title: 'gallery_flip_skver_title',
      desc: 'gallery_flip_skver_desc',
      back: 'gallery_flip_skver_back'
    }
  ];

  function updateGalleryCards(lang) {
    if (typeof translations === 'undefined') return;
    document.querySelectorAll('.gallery-grid .flip-card').forEach((card, i) => {
      const keys = cardKeys[i];
      if (!keys) return;
      const title = card.querySelector('[data-lang-key="' + keys.title + '"]');
      const desc = card.querySelector('[data-lang-key="' + keys.desc + '"]');
      const back = card.querySelector('[data-lang-key="' + keys.back + '"]');
      if (title && translations[keys.title] && translations[keys.title][lang]) title.textContent = translations[keys.title][lang];
      if (desc && translations[keys.desc] && translations[keys.desc][lang]) desc.textContent = translations[keys.desc][lang];
      if (back && translations[keys.back] && translations[keys.back][lang]) back.textContent = translations[keys.back][lang];
    });
  }
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.dataset.lang;
      updateGalleryCards(lang);
      const titleEl = document.getElementById('gallery-intro-title');
      const descEl = document.getElementById('gallery-intro-desc');
      if (lang === 'by') {
        titleEl.textContent = 'Галерэя Беларусі';
        descEl.textContent = 'Тут сабраны самыя яскравыя моманты добраўпарадкавання Беларусі.';
      } else {
        titleEl.textContent = 'Галерея Беларуси';
        descEl.textContent = 'Здесь собраны самые яркие моменты благоустройства Беларуси.';
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const lang = localStorage.getItem('preferredLang') || 'ru';
    updateGalleryCards(lang);
    const titleEl = document.getElementById('gallery-intro-title');
    const descEl = document.getElementById('gallery-intro-desc');
    if (lang === 'by') {
      titleEl.textContent = 'Галерэя Беларусі';
      descEl.textContent = 'Тут сабраны самыя яскравыя моманты добраўпарадкавання Беларусі.';
    } else {
      titleEl.textContent = 'Галерея Беларуси';
      descEl.textContent = 'Здесь собраны самые яркие моменты благоустройства Беларуси.';
    }
  });
})(); 

