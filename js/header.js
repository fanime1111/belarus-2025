document.addEventListener('DOMContentLoaded', function() {
    const burgerCheckbox = document.getElementById('burger');
    const nav = document.querySelector('nav');
    const body = document.body;
    const mobileThemeBtn = document.getElementById('mobile-theme-btn');

    if (!burgerCheckbox || !nav) {
        console.error('Burger checkbox or nav not found');
        return;
    }

    function openMenu() {
        nav.classList.add('is-active');
        body.style.overflow = 'hidden';
    }

    function closeMenu() {
        burgerCheckbox.checked = false;
        nav.classList.remove('is-active');
        body.style.overflow = '';
    }

    burgerCheckbox.addEventListener('change', function() {
        if (this.checked) {
            openMenu();
        } else {
            nav.classList.remove('is-active');
            body.style.overflow = '';
        }
    });

    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', function(e) {
        const burgerLabel = document.querySelector('.burger');
        if (!nav.contains(e.target) && !burgerLabel.contains(e.target)) {
            closeMenu();
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });

    let touchStartY = 0;
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    });

    document.addEventListener('touchmove', function(e) {
        if (nav.classList.contains('is-active')) {
            const touchY = e.touches[0].clientY;
            const deltaY = touchY - touchStartY;
            
            if (deltaY > 50) {
                closeMenu();
            }
        }
    });

    if (mobileThemeBtn) {
        mobileThemeBtn.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            this.textContent = newTheme === 'dark' ? '🌙' : '☀️';
        });

        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        mobileThemeBtn.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
    }
});
