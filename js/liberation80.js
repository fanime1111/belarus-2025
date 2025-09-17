
document.addEventListener('DOMContentLoaded', function() {
    const animateCounters = () => {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += step;
                if (current >= target) {
                    counter.textContent = target;
                } else {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                }
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !counter.classList.contains('animated')) {
                        updateCounter();
                        counter.classList.add('animated');
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(counter);
        });
    };
    
    animateCounters();
    
    const scrollIndicator = document.querySelector('.hero-scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const timelineSection = document.querySelector('.timeline-section');
            timelineSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    const tabButtons = document.querySelectorAll('.tab-btn');
    const galleryGrids = document.querySelectorAll('.gallery-grid');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            galleryGrids.forEach(grid => grid.classList.remove('active'));
            
            button.classList.add('active');
            const targetGrid = document.getElementById(targetTab);
            if (targetGrid) {
                targetGrid.classList.add('active');
            }
        });
    });
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = entry.target.classList.contains('left') 
                    ? 'translateX(-50px)' 
                    : 'translateX(50px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, 100);
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
    
    const factCards = document.querySelectorAll('.fact-card');
    
    const factObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(30px)';
                    
                    setTimeout(() => {
                        entry.target.style.transition = 'all 0.5s ease';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }, 100);
            }
        });
    }, { threshold: 0.2 });
    
    factCards.forEach(card => {
        factObserver.observe(card);
    });
    
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const title = this.querySelector('h3').textContent;
            const description = this.querySelector('p').textContent;
            
            const modal = document.createElement('div');
            modal.className = 'image-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="modal-close">&times;</span>
                    <img src="${img.src}" alt="${img.alt}">
                    <div class="modal-info">
                        <h3>${title}</h3>
                        <p>${description}</p>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            setTimeout(() => {
                modal.classList.add('active');
            }, 10);
            
            const closeBtn = modal.querySelector('.modal-close');
            const closeModal = () => {
                modal.classList.remove('active');
                setTimeout(() => {
                    document.body.removeChild(modal);
                }, 300);
            };
            
            closeBtn.addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });
            
            const escapeHandler = (e) => {
                if (e.key === 'Escape') {
                    closeModal();
                    document.removeEventListener('keydown', escapeHandler);
                }
            };
            document.addEventListener('keydown', escapeHandler);
        });
    });
    
    const heroSection = document.querySelector('.liberation-hero');
    const heroBg = document.querySelector('.hero-bg-animation');
    
    if (heroSection && heroBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const speed = 0.5;
            
            if (scrolled < window.innerHeight) {
                heroBg.style.transform = `translateY(${scrolled * speed}px)`;
            }
        });
    }
});

const modalStyles = `
    .image-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
        padding: 1rem;
    }
    
    .image-modal.active {
        opacity: 1;
    }
    
    .modal-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .modal-content img {
        max-width: 100%;
        max-height: 70vh;
        border-radius: 10px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    }
    
    .modal-close {
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 2.5rem;
        cursor: pointer;
        transition: transform 0.3s ease;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .modal-close:hover {
        transform: scale(1.2);
    }
    
    .modal-info {
        text-align: center;
        margin-top: 1.5rem;
        color: white;
    }
    
    .modal-info h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
    
    .modal-info p {
        font-size: 1rem;
        opacity: 0.9;
    }
    
    @media (max-width: 768px) {
        .modal-content img {
            max-height: 60vh;
        }
        
        .modal-info h3 {
            font-size: 1.2rem;
        }
        
        .modal-info p {
            font-size: 0.9rem;
        }
    }
`;

if (!document.querySelector('#modal-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'modal-styles';
    styleSheet.textContent = modalStyles;
    document.head.appendChild(styleSheet);
}
