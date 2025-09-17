
document.addEventListener('DOMContentLoaded', function() {
    initCounterAnimations();
});

function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    
    if (counters.length === 0) return;
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseFloat(counter.getAttribute('data-count'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    
                    if (current < target) {
                        if (target % 1 !== 0) {
                            counter.textContent = current.toFixed(1);
                        } else {
                            counter.textContent = Math.floor(current);
                        }
                        requestAnimationFrame(updateCounter);
                    } else {
                        if (target % 1 !== 0) {
                            counter.textContent = target.toFixed(1);
                        } else {
                            counter.textContent = target;
                        }
                        
                        counter.style.transform = 'scale(1.1)';
                        setTimeout(() => {
                            counter.style.transform = 'scale(1)';
                        }, 200);
                    }
                };
                
                counter.style.transition = 'transform 0.3s ease';
                
                updateCounter();
                
                counterObserver.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        counter.textContent = '0';
        counterObserver.observe(counter);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const memoryNumbers = document.querySelectorAll('.memory-number');
    
    if (memoryNumbers.length === 0) return;
    
    const memoryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const text = element.textContent;
                
                const match = text.match(/(\d+)/);
                if (match) {
                    const target = parseInt(match[1]);
                    const suffix = text.replace(/\d+/, '');
                    let current = 0;
                    const duration = 1500;
                    const increment = target / (duration / 16);
                    
                    const updateNumber = () => {
                        current += increment;
                        
                        if (current < target) {
                            element.textContent = Math.floor(current) + suffix;
                            requestAnimationFrame(updateNumber);
                        } else {
                            element.textContent = target + suffix;
                            
                            element.style.textShadow = '0 0 20px var(--v2-gold)';
                            setTimeout(() => {
                                element.style.textShadow = 'none';
                            }, 500);
                        }
                    };
                    
                    element.style.transition = 'text-shadow 0.5s ease';
                    updateNumber();
                }
                
                memoryObserver.unobserve(element);
            }
        });
    }, { threshold: 0.5 });
    
    memoryNumbers.forEach(number => {
        memoryObserver.observe(number);
    });
});
