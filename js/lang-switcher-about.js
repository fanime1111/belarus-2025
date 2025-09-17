// Language Switcher for about.html
document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        ru: {
            // Header
            'logo_text': 'Беларусь 2025',
            'nav_main': 'Главная',
            'nav_about': 'О программе',
            'nav_projects': 'Проекты',
            'nav_news': 'Новости',
            'nav_gallery': 'Галерея',
            'nav_awards': 'Достижения',
            'nav_liberation80': '80 лет победы',
            'login': 'Вход',
            'register': 'Регистрация',
            
            // About page content
            'about_title': 'О программе "Беларусь 2025: Благоустройство"',
            'about_intro': 'Программа "Беларусь 2025: Благоустройство" — это комплексная инициатива по созданию современной, комфортной и экологически устойчивой среды для жизни граждан Республики Беларусь.',
            'about_mission_title': 'Миссия программы',
            'about_mission_text': 'Создание благоустроенной Беларуси к 2025 году через реализацию современных проектов развития городской и сельской инфраструктуры, сохранение культурного наследия и повышение качества жизни граждан.',
            'about_goals_title': 'Основные цели',
            'about_goal_1': 'Модернизация городской инфраструктуры',
            'about_goal_2': 'Развитие транспортной сети',
            'about_goal_3': 'Создание комфортной жилой среды',
            'about_goal_4': 'Сохранение исторического наследия',
            'about_goal_5': 'Экологическая устойчивость',
            'about_goal_6': 'Цифровизация городских услуг',
            'about_principles_title': 'Принципы реализации',
            'about_principle_1': 'Устойчивое развитие',
            'about_principle_1_desc': 'Все проекты учитывают экологические аспекты и долгосрочную устойчивость.',
            'about_principle_2': 'Участие граждан',
            'about_principle_2_desc': 'Активное вовлечение населения в процесс планирования и реализации проектов.',
            'about_principle_3': 'Инновационность',
            'about_principle_3_desc': 'Использование современных технологий и лучших мировых практик.',
            'about_principle_4': 'Прозрачность',
            'about_principle_4_desc': 'Открытость процессов планирования и отчетности по реализации программы.',
            'about_stats_title': 'Программа в цифрах',
            'about_stat_1': 'проектов',
            'about_stat_2': 'городов',
            'about_stat_3': 'млрд рублей',
            'about_stat_4': 'рабочих мест',
            'about_timeline_title': 'Этапы реализации',
            'about_phase_1': 'Планирование и подготовка',
            'about_phase_1_desc': 'Разработка проектной документации, получение разрешений, подготовка инфраструктуры.',
            'about_phase_2': 'Активная реализация',
            'about_phase_2_desc': 'Строительство и модернизация объектов, внедрение новых технологий.',
            'about_phase_3': 'Завершение и оценка',
            'about_phase_3_desc': 'Финализация проектов, оценка результатов, планирование дальнейшего развития.',
            'about_tech_title': 'Технологии и инновации',
            'about_tech_1': 'Умные городские системы',
            'about_tech_2': 'Адаптивная вёрстка для всех типов устройств',
            'about_tech_3': 'Энергоэффективные решения',
            'about_tech_4': 'Система переключения языков',
            'about_tech_5': 'Экологические технологии',
            'about_tech_6': 'Оптимизация для быстрой загрузки',
            
            // Footer
            'footer_copyright': 'Беларусь 2025: Благоустройство.',
            'footer_developed_by': 'Разработано с ❤️ для Беларуси'
        },
        by: {
            // Header
            'logo_text': 'Беларусь 2025',
            'nav_main': 'Галоўная',
            'nav_about': 'Пра праграму',
            'nav_projects': 'Праекты',
            'nav_news': 'Навіны',
            'nav_gallery': 'Галерэя',
            'nav_awards': 'Дасягненні',
            'nav_liberation80': '80 гадоў перамогі',
            'login': 'Уваход',
            'register': 'Рэгістрацыя',
            
            // About page content
            'about_title': 'Пра праграму "Беларусь 2025: Добраўпарадкаванне"',
            'about_intro': 'Праграма "Беларусь 2025: Добраўпарадкаванне" — гэта комплексная ініцыятыва па стварэнні сучаснага, камфортнага і экалагічна ўстойлівага асяроддзя для жыцця грамадзян Рэспублікі Беларусь.',
            'about_mission_title': 'Місія праграмы',
            'about_mission_text': 'Стварэнне добраўпарадкаванай Беларусі да 2025 года праз рэалізацыю сучасных праектаў развіцця гарадской і сельскай інфраструктуры, захаванне культурнай спадчыны і павышэнне якасці жыцця грамадзян.',
            'about_goals_title': 'Асноўныя мэты',
            'about_goal_1': 'Мадэрнізацыя гарадской інфраструктуры',
            'about_goal_2': 'Развіццё транспартнай сеткі',
            'about_goal_3': 'Стварэнне камфортнага жылога асяроддзя',
            'about_goal_4': 'Захаванне гістарычнай спадчыны',
            'about_goal_5': 'Экалагічная ўстойлівасць',
            'about_goal_6': 'Лічбавізацыя гарадскіх паслуг',
            'about_principles_title': 'Прынцыпы рэалізацыі',
            'about_principle_1': 'Устойлівае развіццё',
            'about_principle_1_desc': 'Усе праекты ўлічваюць экалагічныя аспекты і доўгатэрміновую ўстойлівасць.',
            'about_principle_2': 'Удзел грамадзян',
            'about_principle_2_desc': 'Актыўнае ўцягванне насельніцтва ў працэс планавання і рэалізацыі праектаў.',
            'about_principle_3': 'Інавацыйнасць',
            'about_principle_3_desc': 'Выкарыстанне сучасных тэхналогій і лепшых сусветных практык.',
            'about_principle_4': 'Празрыстасць',
            'about_principle_4_desc': 'Адкрытасць працэсаў планавання і справаздачнасці па рэалізацыі праграмы.',
            'about_stats_title': 'Праграма ў лічбах',
            'about_stat_1': 'праектаў',
            'about_stat_2': 'гарадоў',
            'about_stat_3': 'млрд рублёў',
            'about_stat_4': 'працоўных месцаў',
            'about_timeline_title': 'Этапы рэалізацыі',
            'about_phase_1': 'Планаванне і падрыхтоўка',
            'about_phase_1_desc': 'Распрацоўка праектнай дакументацыі, атрыманне дазволаў, падрыхтоўка інфраструктуры.',
            'about_phase_2': 'Актыўная рэалізацыя',
            'about_phase_2_desc': 'Будаўніцтва і мадэрнізацыя аб\'ектаў, укараненне новых тэхналогій.',
            'about_phase_3': 'Завяршэнне і ацэнка',
            'about_phase_3_desc': 'Фіналізацыя праектаў, ацэнка вынікаў, планаванне далейшага развіцця.',
            'about_tech_title': 'Тэхналогіі і інавацыі',
            'about_tech_1': 'Разумныя гарадскія сістэмы',
            'about_tech_2': 'Адаптыўная вёрстка для ўсіх тыпаў прылад',
            'about_tech_3': 'Энергаэфектыўныя рашэнні',
            'about_tech_4': 'Сістэма пераключэння моў',
            'about_tech_5': 'Экалагічныя тэхналогіі',
            'about_tech_6': 'Аптымізацыя для хуткай загрузкі',
            
            // Footer
            'footer_copyright': 'Беларусь 2025: Добраўпарадкаванне.',
            'footer_developed_by': 'Распрацавана з ❤️ для Беларусі'
        }
    };

    let currentLang = localStorage.getItem('selectedLanguage') || 'ru';

    function updatePageLanguage(lang) {
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
