
document.addEventListener('DOMContentLoaded', function() {
    initTimelineAnimations();
    
    initTimelineHover();
});

function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timelineItems.length === 0) return;
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    const dot = entry.target.querySelector('.timeline-dot');
                    if (dot) {
                        dot.style.transform = 'translateY(-50%) scale(1)';
                    }
                }, index * 100);
                
                timelineObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
        
        const dot = item.querySelector('.timeline-dot');
        if (dot) {
            dot.style.transform = 'translateY(-50%) scale(0)';
            dot.style.transition = 'transform 0.4s ease';
        }
        
        timelineObserver.observe(item);
    });
}

function initTimelineHover() {
    const timelineContents = document.querySelectorAll('.timeline-content');
    
    timelineContents.forEach(content => {
        content.addEventListener('mouseenter', function() {
            const dot = this.parentElement.querySelector('.timeline-dot');
            if (dot) {
                dot.style.background = 'var(--v2-gold)';
                dot.style.transform = 'translateY(-50%) scale(1.2)';
            }
        });
        
        content.addEventListener('mouseleave', function() {
            const dot = this.parentElement.querySelector('.timeline-dot');
            if (dot) {
                dot.style.background = 'var(--v2-red)';
                dot.style.transform = 'translateY(-50%) scale(1)';
            }
        });
        
        content.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                this.classList.toggle('expanded');
                
                if (this.classList.contains('expanded')) {
                    const detailView = document.createElement('div');
                    detailView.className = 'timeline-detail';
                    detailView.innerHTML = `
                        <div class="detail-content">
                            <h4>Подробная информация</h4>
                            <p>Дополнительные сведения об этом историческом событии...</p>
                        </div>
                    `;
                    this.appendChild(detailView);
                } else {
                    const detailView = this.querySelector('.timeline-detail');
                    if (detailView) {
                        detailView.remove();
                    }
                }
            }
        });
    });
}

function drawTimelineLine() {
    const timelineLine = document.querySelector('.timeline-line');
    if (!timelineLine) return;
    
    const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    const lineHeight = scrollPercentage * 100;
    
    timelineLine.style.background = `linear-gradient(to bottom, var(--v2-red) ${lineHeight}%, var(--v2-gray) ${lineHeight}%)`;
}

window.addEventListener('scroll', drawTimelineLine);

const timelineDetailStyles = `
<style>
.timeline-detail {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--v2-gray);
    animation: slideDown 0.3s ease;
}

.detail-content h4 {
    color: var(--v2-gold);
    margin-bottom: 0.5rem;
    font-size: 1rem;
}

.detail-content p {
    color: var(--v2-light-gray);
    font-size: 0.9rem;
    line-height: 1.5;
}

.timeline-content.expanded {
    background: var(--v2-black);
    transform: scale(1.05);
}

@keyframes slideDown {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', timelineDetailStyles);
