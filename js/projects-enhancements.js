document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.querySelector('.timeline-container-colored');
    const redProgressLine = document.querySelector('.timeline-red-progress');
    
    if (timelineContainer && redProgressLine) {
        const firstItem = timelineContainer.querySelector('.timeline-item-colored:first-of-type');
        const lastItem = timelineContainer.querySelector('.timeline-item-colored:last-of-type');

        const handleTimelineScroll = () => {
            if (!firstItem || !lastItem) {
                redProgressLine.style.height = '0%';
                return;
            }

            const windowHeight = window.innerHeight;
            const firstItemRect = firstItem.getBoundingClientRect();
            const lastItemRect = lastItem.getBoundingClientRect();
            const pageYOffset = window.pageYOffset;
            const scrollYForProgressStart = pageYOffset + firstItemRect.top - (windowHeight * 0.75);
            const scrollYForProgressEnd = pageYOffset + lastItemRect.bottom - (windowHeight * 0.25);

            let progress = 0;
            const totalScrollRange = scrollYForProgressEnd - scrollYForProgressStart;

            if (totalScrollRange <= 0) {
                const timelineRect = timelineContainer.getBoundingClientRect();
                if (timelineRect.top > windowHeight) progress = 0;
                else if (timelineRect.bottom < 0) progress = 1;
                else if (timelineRect.top < windowHeight && timelineRect.bottom > 0) {
                    progress = Math.max(0, Math.min(1, (windowHeight - timelineRect.top) / timelineRect.height));
                }
            } else {
                if (pageYOffset <= scrollYForProgressStart) {
                    progress = 0;
                } else if (pageYOffset >= scrollYForProgressEnd) {
                    progress = 1;
                } else {
                    progress = (pageYOffset - scrollYForProgressStart) / totalScrollRange;
                }
            }
            
            progress = Math.max(0, Math.min(1, progress)); 
            redProgressLine.style.height = `${progress * 100}%`;
        };

        window.addEventListener('scroll', handleTimelineScroll);
        window.addEventListener('resize', handleTimelineScroll);
        handleTimelineScroll();
    }
    function createProjectImageModal() {
        if (document.getElementById('project-img-modal')) return;
        const modal = document.createElement('div');
        modal.id = 'project-img-modal';
        modal.style = 'display:none;position:fixed;z-index:3000;left:0;top:0;width:100vw;height:100vh;background:rgba(0,0,0,0.7);justify-content:center;align-items:center;';
        modal.innerHTML = '<img id="project-img-modal-img" style="max-width:90vw;max-height:90vh;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.25);">';
        modal.onclick = () => { modal.style.display = 'none'; };
        document.body.appendChild(modal);
    }
    createProjectImageModal();
    document.querySelectorAll('.zoomable-project-img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.onclick = (e) => {
            e.stopPropagation();
            const modal = document.getElementById('project-img-modal');
            const modalImg = document.getElementById('project-img-modal-img');
            modalImg.src = img.src;
            modal.style.display = 'flex';
        };
    });
});
(function() {
  const timelineKeys = [
    {
      title: 'timeline_1_title',
      date: 'timeline_1_date',
      desc: 'timeline_1_desc',
    },
    {
      title: 'timeline_2_title',
      date: 'timeline_2_date',
      desc: 'timeline_2_desc',
    },
    {
      title: 'timeline_3_title',
      date: 'timeline_3_date',
      desc: 'timeline_3_desc',
    },
    {
      title: 'timeline_4_title',
      date: 'timeline_4_date',
      desc: 'timeline_4_desc',
      source: 'timeline_4_source',
    },
    {
      title: 'timeline_5_title',
      date: 'timeline_5_date',
      desc: 'timeline_5_desc',
    },
    {
      title: 'timeline_6_title',
      date: 'timeline_6_date',
      desc: 'timeline_6_desc',
    },
    {
      title: 'timeline_7_title',
      date: 'timeline_7_date',
      desc: 'timeline_7_desc',
      source: 'timeline_7_source',
    }
  ];

  function updateTimelineCards(lang) {
    if (typeof translations === 'undefined') return;
    document.querySelectorAll('.timeline-container-colored .timeline-item-colored').forEach((item, i) => {
      const keys = timelineKeys[i];
      if (!keys) return;
      const title = item.querySelector('[data-lang-key="' + keys.title + '"]');
      const date = item.querySelector('[data-lang-key="' + keys.date + '"]');
      const desc = item.querySelector('[data-lang-key="' + keys.desc + '"]');
      if (title && translations[keys.title] && translations[keys.title][lang]) title.textContent = translations[keys.title][lang];
      if (date && translations[keys.date] && translations[keys.date][lang]) date.textContent = translations[keys.date][lang];
      if (desc && translations[keys.desc] && translations[keys.desc][lang]) desc.innerHTML = translations[keys.desc][lang];
      if (keys.source) {
        const source = item.querySelector('[data-lang-key="' + keys.source + '"]');
        if (source && translations[keys.source] && translations[keys.source][lang]) source.textContent = translations[keys.source][lang];
      }
    });
  }
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.dataset.lang;
      updateTimelineCards(lang);
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const lang = localStorage.getItem('preferredLang') || 'ru';
    updateTimelineCards(lang);
  });
})();
(function() {
  const by = [
    [
      'Адкрыццё парка "Лошыцкі Сад" (Мінск)',
      'Красавік 2025',
      'У 2025 годзе завершана добраўпарадкаванне і адкрыццё новай зоны адпачынку з сучаснымі дзіцячымі і спартыўнымі пляцоўкамі, веладарожкамі і ландшафтным дызайнам.'
    ],
    [
      'Запуск электробусаў (Гродна)',
      'Май 2025',
      'У Гродне ўведзена ў эксплуатацыю новая лінія электробусаў, што дазволіла знізіць узровень шуму і выкідаў у цэнтры горада.'
    ],
    [
      'Рэканструкцыя сквера імя 1000-годдзя Брэста',
      'Чэрвень 2025',
      'У Брэсце завершана рэканструкцыя сквера: новыя дарожкі, асвятленне, зоны для адпачынку і арт-аб’екты.'
    ],
    [
      'Адкрыццё новых станцый метро (Мінск, 3-я лінія)',
      'Верасень 2025',
      'У 2025 годзе ў Мінску плануецца адкрыццё новых станцый трэцяй лініі метро, уключаючы станцыю «Аэрадромная».',
      'Мінскі метрапалітэн'
    ],
    [
      'Мадэрнізацыя набярэжнай р. Сож (Гомель)',
      'Кастрычнік 2025',
      'Завяршэнне работ па мадэрнізацыі цэнтральнай набярэжнай: новыя пешаходныя зоны, веладарожкі, аглядальныя пляцоўкі і зоны для пікнікоў.'
    ],
    [
      'Праграма "Утульны двор" (Магілёў)',
      'Лістапад 2025',
      'У межах праграмы "Утульны двор" у Магілёве добраўпарадкавана больш за 50 дваровых тэрыторый, устаноўлены новыя дзіцячыя комплексы і спартыўнае абсталяванне.'
    ],
    [
      'Увод новага корпуса РНПЦ анкалогіі (Бараўляны)',
      'Снежань 2025',
      'У 2025 годзе завершыцца будаўніцтва і адкрыецца новы корпус РНПЦ анкалогіі ў Бараўлянах — найбуйнейшага анкалагічнага цэнтра краіны.',
      'Мінздароўе Беларусі'
    ]
  ];
  const ru = [
    [
      'Открытие парка "Лошицкий Сад" (Минск)',
      'Апрель 2025',
      'В 2025 году завершено благоустройство и открытие новой зоны отдыха с современными детскими и спортивными площадками, велодорожками и ландшафтным дизайном.'
    ],
    [
      'Запуск электробусов (Гродно)',
      'Май 2025',
      'В Гродно введена в эксплуатацию новая линия электробусов, что позволило снизить уровень шума и выбросов в центре города.'
    ],
    [
      'Реконструкция сквера им. 1000-летия Бреста',
      'Июнь 2025',
      'В Бресте завершена реконструкция сквера: новые дорожки, освещение, зоны для отдыха и арт-объекты.'
    ],
    [
      'Открытие новых станций метро (Минск, 3-я линия)',
      'Сентябрь 2025',
      'В 2025 году в Минске планируется открытие новых станций третьей линии метро, включая станцию «Аэродромная».',
      'Минский метрополитен'
    ],
    [
      'Модернизация набережной р. Сож (Гомель)',
      'Октябрь 2025',
      'Завершение работ по модернизации центральной набережной: новые пешеходные зоны, велодорожки, смотровые площадки и зоны для пикников.'
    ],
    [
      'Программа "Уютный двор" (Могилев)',
      'Ноябрь 2025',
      'В рамках программы "Уютный двор" в Могилеве благоустроено более 50 дворовых территорий, установлены новые детские комплексы и спортивное оборудование.'
    ],
    [
      'Ввод нового корпуса РНПЦ онкологии (Боровляны)',
      'Декабрь 2025',
      'В 2025 году завершится строительство и откроется новый корпус РНПЦ онкологии в Боровлянах — крупнейшего онкоцентра страны.',
      'Минздрав Беларуси'
    ]
  ];

  function setTimeline(langArr) {
    document.querySelectorAll('.timeline-container-colored .timeline-item-colored').forEach((item, i) => {
      const keys = langArr[i];
      if (!keys) return;
      const title = item.querySelector('h3');
      const date = item.querySelector('.timeline-date');
      const desc = item.querySelector('p');
      if (title) title.textContent = keys[0];
      if (date) date.textContent = keys[1];
      if (desc) desc.innerHTML = keys[2];
      if (keys[3]) {
        const source = item.querySelector('a');
        if (source) source.textContent = keys[3];
      }
    });
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      if (this.dataset.lang === 'by') setTimeline(by);
      else setTimeline(ru);
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const lang = localStorage.getItem('preferredLang') || 'ru';
    if (lang === 'by') setTimeline(by);
    else setTimeline(ru);
  });
})(); 

