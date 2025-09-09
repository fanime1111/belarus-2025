
function animateNewsEntry(newsElement) {
    newsElement.style.opacity = '0';
    newsElement.style.transform = 'translateY(20px)';
    
    requestAnimationFrame(() => {
        newsElement.style.transition = 'all 0.5s ease-out';
        newsElement.style.opacity = '1';
        newsElement.style.transform = 'translateY(0)';
    });
}
function initLikeSystem() {
    const likeButtons = document.querySelectorAll('.news-like-btn');
    const likeCounts = document.querySelectorAll('.news-like-count');
    
    likeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const count = parseInt(likeCounts[index].textContent);
            likeCounts[index].textContent = count + 1;
            button.classList.add('liked');
            button.innerHTML = '❤️';
        });
    });
}
function initComments() {
    const commentForms = document.querySelectorAll('.news-comment-form');
    
    commentForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const commentInput = form.querySelector('input[type="text"]');
            const commentsList = form.parentElement.querySelector('.news-comments');
            
            if (commentInput.value.trim()) {
                const comment = document.createElement('div');
                comment.className = 'news-comment';
                comment.innerHTML = `
                    <div class="comment-author">Пользователь</div>
                    <div class="comment-text">${commentInput.value}</div>
                    <div class="comment-date">${new Date().toLocaleDateString()}</div>
                `;
                commentsList.insertBefore(comment, commentsList.firstChild);
                commentInput.value = '';
            }
        });
    });
}
function initSaveSystem() {
    const saveButtons = document.querySelectorAll('.news-save-btn');
    
    saveButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('saved');
            if (button.classList.contains('saved')) {
                button.innerHTML = '✓ Сохранено';
            } else {
                button.innerHTML = 'Сохранить';
            }
        });
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const newsItems = document.querySelectorAll('.news-item');
    newsItems.forEach(item => {
        animateNewsEntry(item);
    });
    initLikeSystem();
    initComments();
    initSaveSystem();
});


