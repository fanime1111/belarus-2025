// Language Switcher for liberation80-2.html
document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        ru: {
            'logo_text': 'Победа 1945',
            'nav_main': 'Главная',
            'nav_about': 'О программе',
            'nav_projects': 'Проекты',
            'nav_news': 'Новости',
            'nav_gallery': 'Галерея',
            'nav_awards': 'Достижения',
            'nav_liberation80': '80 лет победы',
            'login': 'Вход',
            'register': 'Регистрация',
            
            'hero_date': '1945-2025',
            'hero_title': '80 ЛЕТ ВЕЛИКОЙ ПОБЕДЫ',
            'hero_subtitle': 'НАД ФАШИСТСКОЙ ГЕРМАНИЕЙ',
            'stat_warriors': 'МЛН ПОГИБШИХ',
            'stat_cities': 'ДНЕЙ ВОЙНЫ',
            'stat_days': 'ТЫСЯЧ ГЕРОЕВ СССР',
            
            'timeline_title': 'ХРОНОЛОГИЯ ОСВОБОЖДЕНИЯ',
            'timeline_date1': '23 июня 1944',
            'timeline_title1': 'Начало операции "Багратион"',
            'timeline_desc1': 'Советские войска начали масштабное наступление на территории Беларуси',
            'timeline_date2': '3 июля 1944',
            'timeline_title2': 'Освобождение Минска',
            'timeline_desc2': 'Столица Беларуси освобождена от немецко-фашистских захватчиков',
            'timeline_date3': '16 июля 1944',
            'timeline_title3': 'Освобождение Гродно',
            'timeline_desc3': 'Войска 3-го Белорусского фронта освободили город Гродно',
            'timeline_date4': '28 июля 1944',
            'timeline_title4': 'Освобождение Бреста',
            'timeline_desc4': 'Город-герой Брест полностью освобожден от оккупантов',
            
            'memory_title': 'ПАМЯТЬ И СЛАВА',
            'memory_memorials': 'Мемориалы',
            'memory_memorials_desc': 'Памятников и мемориальных комплексов по всей стране',
            'memory_heroes': 'Герои',
            'memory_heroes_desc': 'Героев Советского Союза - уроженцев Беларуси',
            'memory_partisans': 'Партизаны',
            'memory_partisans_desc': 'Партизан и подпольщиков сражались с врагом',
            
            'docs_title': 'ИСТОРИЧЕСКИЕ ДОКУМЕНТЫ',
            'doc_order': 'Приказ №1',
            'doc_order_title': 'О начале операции "Багратион"',
            'doc_order_desc': 'Директива Ставки ВГК о проведении Белорусской наступательной операции',
            'doc_report': 'Донесение',
            'doc_report_title': 'Об освобождении Минска',
            'doc_report_desc': 'Боевое донесение командующего 3-м Белорусским фронтом',
            'doc_summary': 'Сводка',
            'doc_summary_title': 'Итоги операции',
            'doc_summary_desc': 'Оперативная сводка Генерального штаба об итогах освобождения Беларуси',
            'doc_read': 'Читать',
            
            'map_title': 'КАРТА ОСВОБОЖДЕНИЯ',
            'map_desc': 'Интерактивная карта освобождения городов Беларуси',
            'map_open': 'Открыть карту',
            
            'footer_about': 'О проекте',
            'footer_about_desc': 'Сохраняем память о подвиге белорусского народа в Великой Отечественной войне',
            'footer_contacts': 'Контакты',
            'footer_social': 'Социальные сети',
            'footer_rights': '© 2024 Беларусь 2025. Все права защищены.'
        },
        by: {
            'logo_text': 'Перамога 1945',
            'nav_main': 'Галоўная',
            'nav_about': 'Пра праграму',
            'nav_projects': 'Праекты',
            'nav_news': 'Навіны',
            'nav_gallery': 'Галерэя',
            'nav_awards': 'Дасягненні',
            'nav_liberation80': '80 гадоў перамогі',
            'login': 'Уваход',
            'register': 'Рэгістрацыя',
            
            'hero_date': '1944-2024',
            'hero_title': '80 ГАДОЎ ВЫЗВАЛЕННЯ',
            'hero_subtitle': 'БЕЛАРУСІ АД НЯМЕЦКА-ФАШЫСЦКІХ ЗАХОПНІКАЎ',
            'stat_warriors': 'МЛН ВОІНАЎ',
            'stat_cities': 'ГАРАДОЎ ВЫЗВАЛЕНА',
            'stat_days': 'ДЗЁН АПЕРАЦЫІ',
            
            'timeline_title': 'ХРАНАЛОГІЯ ВЫЗВАЛЕННЯ',
            'timeline_date1': '23 чэрвеня 1944',
            'timeline_title1': 'Пачатак аперацыі "Багратыён"',
            'timeline_desc1': 'Савецкія войскі пачалі маштабнае наступленне на тэрыторыі Беларусі',
            'timeline_date2': '3 ліпеня 1944',
            'timeline_title2': 'Вызваленне Мінска',
            'timeline_desc2': 'Сталіца Беларусі вызвалена ад нямецка-фашысцкіх захопнікаў',
            'timeline_date3': '16 ліпеня 1944',
            'timeline_title3': 'Вызваленне Гродна',
            'timeline_desc3': 'Войскі 3-га Беларускага фронту вызвалілі горад Гродна',
            'timeline_date4': '28 ліпеня 1944',
            'timeline_title4': 'Вызваленне Брэста',
            'timeline_desc4': 'Горад-герой Брэст цалкам вызвалены ад акупантаў',
            
            'memory_title': 'ПАМЯЦЬ І СЛАВА',
            'memory_memorials': 'Мемарыялы',
            'memory_memorials_desc': 'Помнікаў і мемарыяльных комплексаў па ўсёй краіне',
            'memory_heroes': 'Героі',
            'memory_heroes_desc': 'Герояў Савецкага Саюза - ураджэнцаў Беларусі',
            'memory_partisans': 'Партызаны',
            'memory_partisans_desc': 'Партызан і падпольшчыкаў змагаліся з ворагам',
            
            'docs_title': 'ГІСТАРЫЧНЫЯ ДАКУМЕНТЫ',
            'doc_order': 'Загад №1',
            'doc_order_title': 'Аб пачатку аперацыі "Багратыён"',
            'doc_order_desc': 'Дырэктыва Стаўкі ВГК аб правядзенні Беларускай наступальнай аперацыі',
            'doc_report': 'Данясенне',
            'doc_report_title': 'Аб вызваленні Мінска',
            'doc_report_desc': 'Баявое данясенне камандуючага 3-м Беларускім фронтам',
            'doc_summary': 'Зводка',
            'doc_summary_title': 'Вынікі аперацыі',
            'doc_summary_desc': 'Аператыўная зводка Генеральнага штаба аб выніках вызвалення Беларусі',
            'doc_read': 'Чытаць',
            
            'map_title': 'КАРТА ВЫЗВАЛЕННЯ',
            'map_desc': 'Інтэрактыўная карта вызвалення гарадоў Беларусі',
            'map_open': 'Адкрыць карту',
            
            'footer_about': 'Пра праект',
            'footer_about_desc': 'Захоўваем памяць пра подзвіг беларускага народа ў Вялікай Айчыннай вайне',
            'footer_contacts': 'Кантакты',
            'footer_social': 'Сацыяльныя сеткі',
            'footer_rights': '© 2024 Беларусь 2025. Усе правы абаронены.'
        }
    };

    let currentLang = localStorage.getItem('selectedLanguage') || 'ru';

    function updatePageLanguage(lang) {
        document.querySelector('.hero-date').textContent = translations[lang]['hero_date'];
        document.querySelector('.hero-title').textContent = translations[lang]['hero_title'];
        document.querySelector('.hero-subtitle').textContent = translations[lang]['hero_subtitle'];
        
        const statLabels = document.querySelectorAll('.stat-label');
        statLabels[0].textContent = translations[lang]['stat_warriors'];
        statLabels[1].textContent = translations[lang]['stat_cities'];
        statLabels[2].textContent = translations[lang]['stat_days'];
        
        const sectionTitles = document.querySelectorAll('.section-title');
        sectionTitles[0].textContent = translations[lang]['timeline_title'];
        sectionTitles[1].textContent = translations[lang]['memory_title'];
        sectionTitles[2].textContent = translations[lang]['docs_title'];
        sectionTitles[3].textContent = translations[lang]['map_title'];
        
        const timelineDates = document.querySelectorAll('.timeline-date');
        const timelineContents = document.querySelectorAll('.timeline-content');
        
        timelineDates[0].textContent = translations[lang]['timeline_date1'];
        timelineContents[0].querySelector('h3').textContent = translations[lang]['timeline_title1'];
        timelineContents[0].querySelector('p').textContent = translations[lang]['timeline_desc1'];
        
        timelineDates[1].textContent = translations[lang]['timeline_date2'];
        timelineContents[1].querySelector('h3').textContent = translations[lang]['timeline_title2'];
        timelineContents[1].querySelector('p').textContent = translations[lang]['timeline_desc2'];
        
        timelineDates[2].textContent = translations[lang]['timeline_date3'];
        timelineContents[2].querySelector('h3').textContent = translations[lang]['timeline_title3'];
        timelineContents[2].querySelector('p').textContent = translations[lang]['timeline_desc3'];
        
        timelineDates[3].textContent = translations[lang]['timeline_date4'];
        timelineContents[3].querySelector('h3').textContent = translations[lang]['timeline_title4'];
        timelineContents[3].querySelector('p').textContent = translations[lang]['timeline_desc4'];
        
        const memoryCards = document.querySelectorAll('.memory-card');
        memoryCards[0].querySelector('h3').textContent = translations[lang]['memory_memorials'];
        memoryCards[0].querySelector('p').textContent = translations[lang]['memory_memorials_desc'];
        
        memoryCards[1].querySelector('h3').textContent = translations[lang]['memory_heroes'];
        memoryCards[1].querySelector('p').textContent = translations[lang]['memory_heroes_desc'];
        
        memoryCards[2].querySelector('h3').textContent = translations[lang]['memory_partisans'];
        memoryCards[2].querySelector('p').textContent = translations[lang]['memory_partisans_desc'];
        
        const documentCards = document.querySelectorAll('.document-card');
        documentCards[0].querySelector('.document-header span').textContent = translations[lang]['doc_order'];
        documentCards[0].querySelector('h3').textContent = translations[lang]['doc_order_title'];
        documentCards[0].querySelector('p').textContent = translations[lang]['doc_order_desc'];
        
        documentCards[1].querySelector('.document-header span').textContent = translations[lang]['doc_report'];
        documentCards[1].querySelector('h3').textContent = translations[lang]['doc_report_title'];
        documentCards[1].querySelector('p').textContent = translations[lang]['doc_report_desc'];
        
        documentCards[2].querySelector('.document-header span').textContent = translations[lang]['doc_summary'];
        documentCards[2].querySelector('h3').textContent = translations[lang]['doc_summary_title'];
        documentCards[2].querySelector('p').textContent = translations[lang]['doc_summary_desc'];
        
        document.querySelectorAll('.document-btn').forEach(btn => {
            btn.textContent = translations[lang]['doc_read'];
        });
        
        document.querySelector('.map-btn').textContent = translations[lang]['map_open'];
        document.querySelector('.map-placeholder p').textContent = translations[lang]['map_desc'];
        
        const footerSections = document.querySelectorAll('.footer-section');
        footerSections[0].querySelector('h4').textContent = translations[lang]['footer_about'];
        footerSections[0].querySelector('p').textContent = translations[lang]['footer_about_desc'];
        
        footerSections[1].querySelector('h4').textContent = translations[lang]['footer_contacts'];
        footerSections[2].querySelector('h4').textContent = translations[lang]['footer_social'];
        
        document.querySelector('.footer-bottom p').textContent = translations[lang]['footer_rights'];
        
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    updatePageLanguage(currentLang);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        }
    });

    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            currentLang = lang;
            localStorage.setItem('selectedLanguage', lang);
            
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            updatePageLanguage(lang);
        });
    });
});
