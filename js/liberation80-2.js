// Liberation 80 - Version 2 - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    
    initDocumentButtons();
    
    initMapButton();
    
    initMobileMenu();
});

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                if (entry.target.classList.contains('timeline-item')) {
                    entry.target.style.opacity = '1';
                }
            }
        });
    }, observerOptions);
    
    const sections = document.querySelectorAll('.memory-section-v2, .documents-section-v2, .map-section-v2, .timeline-item');
    sections.forEach(section => {
        observer.observe(section);
    });
}

function initDocumentButtons() {
    const documentBtns = document.querySelectorAll('.document-btn');
    
    documentBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.className = 'document-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="modal-close">&times;</span>
                    <h2>Исторический документ</h2>
                    <p>Содержание документа будет загружено...</p>
                </div>
            `;
            
            document.body.appendChild(modal);
            
            const closeBtn = modal.querySelector('.modal-close');
            closeBtn.addEventListener('click', () => {
                modal.remove();
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        });
    });
}

function initMapButton() {
    const mapBtn = document.querySelector('.map-btn');
    
    if (mapBtn) {
        mapBtn.addEventListener('click', function() {
            const mapPlaceholder = document.querySelector('.map-placeholder');
            mapPlaceholder.innerHTML = `
                <div class="map-loading">
                    <i class="fas fa-spinner fa-spin"></i>
                    <p>Загрузка карты...</p>
                </div>
            `;
            
            setTimeout(() => {
                mapPlaceholder.innerHTML = `
                    <div class="map-interactive">
                        <h3>Интерактивная карта недоступна в демо-версии</h3>
                        <p>Полная версия будет доступна позже</p>
                    </div>
                `;
            }, 2000);
        });
    }
}

function initMobileMenu() {
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('nav-menu');
    
    if (burger && navMenu) {
        burger.addEventListener('change', function() {
            if (this.checked) {
                navMenu.classList.add('active');
                document.body.style.overflow = 'hidden';
            } else {
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

const modalStyles = `
<style>
.document-modal {
    display: flex;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.3s ease;
}

.modal-content {
    background-color: var(--v2-dark-gray);
    padding: 2rem;
    border: 1px solid var(--v2-gray);
    width: 90%;
    max-width: 600px;
    position: relative;
    animation: slideUp 0.3s ease;
}

.modal-close {
    color: var(--v2-white);
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s ease;
}

.modal-close:hover {
    color: var(--v2-red);
}

.modal-content h2 {
    color: var(--v2-white);
    margin-bottom: 1rem;
}

.modal-content p {
    color: var(--v2-light-gray);
    line-height: 1.6;
}

.map-loading {
    padding: 3rem;
    text-align: center;
}

.map-loading i {
    font-size: 3rem;
    color: var(--v2-red);
    margin-bottom: 1rem;
}

.map-interactive {
    padding: 3rem;
    text-align: center;
    color: var(--v2-light-gray);
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideUp {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', modalStyles);
