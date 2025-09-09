

document.addEventListener('DOMContentLoaded', function() {
    initTimeline();
    initGalleryFilters();
    initQuotesCarousel();
    initScrollAnimations();
    initHeroCards();
});
function initTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        const marker = item.querySelector('.timeline-marker');
        const content = item.querySelector('.timeline-content');
        
        if (marker && content) {
            marker.addEventListener('click', () => {
                timelineItems.forEach(ti => {
                    const m = ti.querySelector('.timeline-marker');
                    m.classList.remove('active');
                    m.classList.remove('victory');
                });
                if (item.id === 'timeline-bagration') {
                    marker.classList.add('active');
                } else {
                    marker.classList.add('active');
                }
                content.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    content.style.transform = 'scale(1)';
                }, 200);
            });
        }
    });
}
function initGalleryFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const memoryItems = document.querySelectorAll('.memory-item');
    const loadMoreBtn = document.getElementById('loadMorePhotos');
    let showingAll = false;
    memoryItems.forEach((item, index) => {
        if (index >= 6) {
            item.style.display = 'none';
        }
    });
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            const hiddenItems = document.querySelectorAll('.memory-item.hidden-initially');
            
            hiddenItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInScale 0.5s ease-out';
                }, index * 100);
            });
            
            loadMoreBtn.classList.add('hidden');
            showingAll = true;
        });
    }
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            memoryItems.forEach(item => {
                const category = item.dataset.category;
                
                if (filter === 'all') {
                    if (showingAll || !item.classList.contains('hidden-initially')) {
                        item.style.display = 'block';
                        item.style.animation = 'fadeInScale 0.5s ease-out';
                    } else {
                        item.style.display = 'none';
                    }
                    if (loadMoreBtn && !showingAll) {
                        loadMoreBtn.classList.remove('hidden');
                    }
                } else if (category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInScale 0.5s ease-out';
                    if (loadMoreBtn) {
                        loadMoreBtn.classList.add('hidden');
                    }
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const memoryItem = btn.closest('.memory-item');
            const img = memoryItem.querySelector('img');
            showImageModal(img.src, img.alt);
        });
    });
}
function initQuotesCarousel() {
    const quoteItems = document.querySelectorAll('.quote-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    let currentSlide = 0;
    const totalSlides = quoteItems.length;
    
    function showSlide(index) {
        quoteItems.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        if (quoteItems[index]) {
            quoteItems[index].classList.add('active');
        }
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
}
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                if (entry.target.classList.contains('hero-stats')) {
                    setTimeout(() => animateStats(), 300);
                }
                if (entry.target.classList.contains('events-section')) {
                    setTimeout(() => animateEventCards(), 400);
                }
                if (entry.target.classList.contains('heroes-section')) {
                    setTimeout(() => animateHeroCards(), 300);
                }
                if (entry.target.classList.contains('memory-section')) {
                    setTimeout(() => animateMemoryItems(), 300);
                }
            }
        });
    }, observerOptions);
    const elementsToAnimate = document.querySelectorAll('.timeline-section, .heroes-section, .memory-section, .quotes-section, .events-section, .cta-section');
    elementsToAnimate.forEach(el => observer.observe(el));
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        observer.observe(heroStats);
    }
}
let statsAnimated = false;

function animateStats() {
    if (statsAnimated) return;
    
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const isNumber = !isNaN(parseInt(finalValue));
        
        if (isNumber) {
            const target = parseInt(finalValue);
            let current = 0;
            const increment = target / 50;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current);
            }, 30);
        }
    });
    
    statsAnimated = true;
}
function animateEventCards() {
    const eventCards = document.querySelectorAll('.event-card');
    
    eventCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate-in');
        }, index * 150);
    });
}
function animateHeroCards() {
    const heroCards = document.querySelectorAll('.hero-card');
    
    heroCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}
function animateMemoryItems() {
    const memoryItems = document.querySelectorAll('.memory-item');
    
    memoryItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 150);
    });
}
function initHeroCards() {
    const heroCards = document.querySelectorAll('.hero-card');
    
    heroCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const overlay = card.querySelector('.hero-overlay-card');
            if (overlay) {
                overlay.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const overlay = card.querySelector('.hero-overlay-card');
            if (overlay) {
                overlay.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
}
function showImageModal(src, alt) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <img src="${src}" alt="${alt}" class="modal-image">
                <div class="modal-caption">${alt}</div>
            </div>
        </div>
    `;
    const modalStyles = `
        .image-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.3s ease-out;
        }
        
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(5px);
        }
        
        .modal-content {
            position: relative;
            max-width: 90vw;
            max-height: 90vh;
            text-align: center;
        }
        
        .modal-image {
            max-width: 100%;
            max-height: 80vh;
            border-radius: 10px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }
        
        .modal-caption {
            color: white;
            margin-top: 1rem;
            font-size: 1.1rem;
        }
        
        .modal-close {
            position: absolute;
            top: -50px;
            right: 0;
            background: none;
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
        }
        
        .modal-close:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: scale(1.1);
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    if (!document.querySelector('#modal-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'modal-styles';
        styleSheet.textContent = modalStyles;
        document.head.appendChild(styleSheet);
    }
    
    document.body.appendChild(modal);
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    function closeModal() {
        modal.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    }
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escHandler);
        }
    });
}
const additionalStyles = `
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    .animate-in {
        animation: fadeInScale 0.8s ease-out;
    }
    
    
    .hero-overlay-card {
        transition: all 0.3s ease;
    }
    
    .timeline-marker {
        cursor: pointer;
    }
    
    .timeline-marker:active {
        transform: translateX(-50%) scale(0.95);
    }
    
    .filter-btn:active {
        transform: scale(0.95);
    }
    
    .carousel-btn:active {
        transform: scale(0.95);
    }
    
    .cta-btn:active {
        transform: scale(0.95);
    }
`;
if (!document.querySelector('#additional-liberation-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'additional-liberation-styles';
    styleSheet.textContent = additionalStyles;
    document.head.appendChild(styleSheet);
}
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
        const speed = scrolled * 0.5;
        heroContent.style.transform = `translateY(${speed}px)`;
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


