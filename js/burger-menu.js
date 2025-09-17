// Управление бургер-меню
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav-menu');
    const navLinks = nav ? nav.querySelectorAll('a') : [];
    const navButtons = nav ? nav.querySelectorAll('.nav-auth-buttons button') : [];

    function closeBurgerMenu() {
        if (burger) {
            burger.checked = false;
        }
        if (nav) {
            nav.classList.remove('is-active');
        }
        showBurgerButton();
    }
    
    function hideBurgerButton() {
        const burgerLabel = document.querySelector('.burger');
        if (burgerLabel) {
            burgerLabel.style.opacity = '0';
            burgerLabel.style.visibility = 'hidden';
            burgerLabel.style.pointerEvents = 'none';
        }
    }
    
    function showBurgerButton() {
        const burgerLabel = document.querySelector('.burger');
        if (burgerLabel) {
            burgerLabel.style.opacity = '1';
            burgerLabel.style.visibility = 'visible';
            burgerLabel.style.pointerEvents = 'auto';
        }
    }
    
    function monitorHeaderVisibility() {
        const header = document.querySelector('header');
        const burgerLabel = document.querySelector('.burger');
        
        if (!header || !burgerLabel) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    if (burger && !burger.checked) {
                        showBurgerButton();
                    }
                } else {
                    if (burger && !burger.checked) {
                        showBurgerButton();
                    }
                }
            });
        }, {
            threshold: 0.1
        });
        
        observer.observe(header);
    }
    
    monitorHeaderVisibility();

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeBurgerMenu();
        });
    });

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            setTimeout(closeBurgerMenu, 100);
        });
    });

    document.addEventListener('click', function(event) {
        if (burger && burger.checked) {
            const isClickInsideNav = nav && nav.contains(event.target);
            const isClickOnBurger = event.target === burger || burger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnBurger) {
                closeBurgerMenu();
            }
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && burger && burger.checked) {
            closeBurgerMenu();
        }
    });

    if (burger) {
        burger.addEventListener('change', function() {
            if (this.checked) {
                hideBurgerButton();
            } else {
                showBurgerButton();
            }
        });
    }
});
