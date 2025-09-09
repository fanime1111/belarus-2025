
function createAuthModals() {
    function createModal(id, title, formId, fields, buttonText, errorId) {
        if (document.getElementById(id)) return;
        const modal = document.createElement('div');
        modal.id = id;
        modal.className = 'auth-modal';
        let fieldsHtml = fields.map(f => `<input type="${f.type}" id="${f.id}" placeholder="${f.placeholder}" required maxlength="32">`).join('');
        modal.innerHTML = `
            <div class="auth-modal-content">
                <span class="auth-modal-close" id="close-${id}">&times;</span>
                <h2>${title}</h2>
                <form id="${formId}">
                    ${fieldsHtml}
                    <button type="submit">${buttonText}</button>
                </form>
                <div class="auth-modal-error" id="${errorId}"></div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    createModal(
        'login-modal',
        'Вход',
        'login-form',
        [
            {type: 'text', id: 'login-username', placeholder: 'Логин'},
            {type: 'password', id: 'login-password', placeholder: 'Пароль'}
        ],
        'Войти',
        'login-error'
    );
    createModal(
        'register-modal',
        'Регистрация',
        'register-form',
        [
            {type: 'text', id: 'register-username', placeholder: 'Логин'},
            {type: 'password', id: 'register-password', placeholder: 'Пароль'},
            {type: 'password', id: 'register-password2', placeholder: 'Повторите пароль'}
        ],
        'Зарегистрироваться',
        'register-error'
    );
}
function getUsers() {
    return JSON.parse(localStorage.getItem('users') || '{}');
}
function setUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}
function setCurrentUser(username) {
    localStorage.setItem('currentUser', username);
}
function getCurrentUser() {
    return localStorage.getItem('currentUser');
}
function logoutUser() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isAdmin');
    window.location.reload();
}

let isAdmin = false;
function isAdminUser() {
  return localStorage.getItem('isAdmin') === 'true';
}
function updateAuthUI() {
    const user = getCurrentUser();
    const authButtons = document.querySelector('.auth-buttons');
    if (isAdminUser()) {
        authButtons.innerHTML = `<span class="auth-hello">Вы вошли как <b>админ</b>!</span> <button id="logout-btn">Выйти</button>`;
        document.getElementById('logout-btn').onclick = logoutUser;
    } else if (user) {
        authButtons.innerHTML = `<span class="auth-hello">Привет, <b>${user}</b>!</span> <button id="logout-btn">Выйти</button>`;
        document.getElementById('logout-btn').onclick = logoutUser;
    } else {
        authButtons.innerHTML = `<button id="login-btn">Вход</button> <button id="register-btn">Регистрация</button>`;
        document.getElementById('login-btn').onclick = () => showModal('login-modal');
        document.getElementById('register-btn').onclick = () => showModal('register-modal');
    }
}
function redirectToMainForAuth(action) {
    window.location.href = `index.html?auth=${action}`;
}
function updateAuthUIWithRedirect() {
    const user = getCurrentUser();
    const authButtons = document.querySelector('.auth-buttons');
    if (!authButtons) {
        console.warn('Элемент .auth-buttons не найден');
        return;
    }
    
    if (isAdminUser()) {
        authButtons.innerHTML = `<span class="auth-hello">Вы вошли как <b>админ</b>!</span> <button id="logout-btn">Выйти</button>`;
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) logoutBtn.onclick = logoutUser;
    } else if (user) {
        authButtons.innerHTML = `<span class="auth-hello">Привет, <b>${user}</b>!</span> <button id="logout-btn">Выйти</button>`;
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) logoutBtn.onclick = logoutUser;
    } else {
        authButtons.innerHTML = `<button id="login-btn">Вход</button> <button id="register-btn">Регистрация</button>`;
        const loginBtn = document.getElementById('login-btn');
        const registerBtn = document.getElementById('register-btn');
        if (loginBtn) loginBtn.onclick = () => redirectToMainForAuth('login');
        if (registerBtn) registerBtn.onclick = () => redirectToMainForAuth('register');
    }
}

function showModal(id) {
    document.getElementById(id).style.display = 'block';
}
function hideModal(id) {
    document.getElementById(id).style.display = 'none';
}
function showToast(message, type = 'success') {
    let toast = document.createElement('div');
    toast.className = 'custom-toast ' + (type === 'error' ? 'custom-toast-error' : 'custom-toast-success');
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => { toast.classList.add('show'); }, 10);
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, 2500);
}
function createAddModals() {
    const newsModal = document.createElement('div');
    newsModal.id = 'add-news-modal';
    newsModal.className = 'auth-modal';
    newsModal.innerHTML = `<div class="auth-modal-content" id="add-news-modal-content"></div>`;
    document.body.appendChild(newsModal);
}

function showAddModal(type) {
    if (type === 'news') document.getElementById('add-news-modal').style.display = 'block';
}
function hideAddModal(type) {
    if (type === 'news') document.getElementById('add-news-modal').style.display = 'none';
}

function renderAddNewsForm(editData = null, editIndex = null) {
    const modalContent = document.getElementById('add-news-modal-content');
    modalContent.innerHTML = `
        <span class="auth-modal-close" id="close-add-news-modal">&times;</span>
        <h2>${editData ? 'Редактировать новость' : 'Добавить новость'}</h2>
        <form id="add-news-form">
            <label for="news-title">Заголовок <span style="color:red">*</span></label>
            <input type="text" id="news-title" maxlength="100" required value="${editData ? editData.title.replace(/"/g, '&quot;') : ''}">
            <label for="news-desc">Описание <span style="color:red">*</span></label>
            <textarea id="news-desc" maxlength="1000" rows="5" required>${editData ? editData.desc : ''}</textarea>
            <label for="news-photos">Фото (до 5, опционально)</label>
            <input type="file" id="news-photos" accept="image/*" multiple ${editData ? '' : ''}>
            <div id="news-photos-preview" style="display:flex;gap:8px;flex-wrap:wrap;margin:8px 0;"></div>
            <button type="submit">${editData ? 'Сохранить' : 'Добавить'}</button>
            <div class="auth-modal-error" id="add-news-error"></div>
        </form>
    `;
    document.getElementById('close-add-news-modal').onclick = () => hideAddModal('news');
    const photosInput = document.getElementById('news-photos');
    const previewDiv = document.getElementById('news-photos-preview');
    if (editData && editData.photos && editData.photos.length) {
        editData.photos.forEach((src, i) => {
            const img = document.createElement('img');
            img.src = src;
            img.style.maxWidth = '70px';
            img.style.maxHeight = '70px';
            img.style.borderRadius = '6px';
            previewDiv.appendChild(img);
        });
    }
    photosInput.onchange = function() {
        previewDiv.innerHTML = '';
        const files = Array.from(photosInput.files).slice(0,5);
        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = e => {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.maxWidth = '70px';
                img.style.maxHeight = '70px';
                img.style.borderRadius = '6px';
                previewDiv.appendChild(img);
            };
            reader.readAsDataURL(file);
        });
    };
    document.getElementById('add-news-form').onsubmit = function(e) {
        e.preventDefault();
        const title = document.getElementById('news-title').value.trim();
        const desc = document.getElementById('news-desc').value.trim();
        const files = Array.from(photosInput.files).slice(0,5);
        let error = '';
        if (!title) error = 'Введите заголовок';
        else if (!desc) error = 'Введите описание';
        else if (title.length > 100) error = 'Заголовок не более 100 символов';
        else if (desc.length > 1000) error = 'Описание не более 1000 символов';
        if (error) {
            document.getElementById('add-news-error').innerText = error;
            return;
        }
        const saveNews = (photosBase64) => {
            let newsArr = getNewsList();
            const user = getCurrentUser();
            const now = new Date();
            const newsObj = {
                title,
                desc,
                photos: photosBase64,
                author: user,
                date: now.toLocaleString('ru-RU'),
            };
            if (editData && editIndex !== null) {
                newsArr[editIndex] = newsObj;
            } else {
                newsArr.unshift(newsObj);
            }
            setNewsList(newsArr);
            hideAddModal('news');
            showToast(editData ? 'Новость обновлена!' : 'Новость добавлена!', 'success');
            renderNewsList();
        };
        if (files.length) {
            let loaded = 0;
            let photosBase64 = [];
            files.forEach((file, i) => {
                const reader = new FileReader();
                reader.onload = e => {
                    photosBase64[i] = e.target.result;
                    loaded++;
                    if (loaded === files.length) saveNews(photosBase64);
                };
                reader.readAsDataURL(file);
            });
        } else {
            if (editData && editData.photos && editData.photos.length) {
                saveNews(editData.photos);
            } else {
                saveNews([]);
            }
        }
    };
}
function getNewsList() {
    return JSON.parse(localStorage.getItem('newsList') || '[]');
}
function setNewsList(arr) {
    localStorage.setItem('newsList', JSON.stringify(arr));
}
function showAddModal(type, editData = null, editIndex = null) {
    if (type === 'news') {
        document.getElementById('add-news-modal').style.display = 'block';
        renderAddNewsForm(editData, editIndex);
    }
}
function createGalleryModal() {
    const galleryModal = document.createElement('div');
    galleryModal.id = 'add-gallery-modal';
    galleryModal.className = 'auth-modal';
    galleryModal.innerHTML = `<div class="auth-modal-content" id="add-gallery-modal-content"></div>`;
    document.body.appendChild(galleryModal);
}
function renderAddGalleryForm(editData = null, editIndex = null) {
    const modalContent = document.getElementById('add-gallery-modal-content');
    modalContent.innerHTML = `
        <span class="auth-modal-close" id="close-add-gallery-modal">&times;</span>
        <h2>${editData ? 'Редактировать фото' : 'Добавить фото'}</h2>
        <form id="add-gallery-form">
            <label for="gallery-desc">Описание <span style="color:red">*</span></label>
            <textarea id="gallery-desc" maxlength="1000" rows="4" required>${editData ? editData.desc : ''}</textarea>
            <label for="gallery-photos">Фото (до 10, обязательно)</label>
            <input type="file" id="gallery-photos" accept="image/*" multiple required>
            <div id="gallery-photos-preview" style="display:flex;gap:8px;flex-wrap:wrap;margin:8px 0;"></div>
            <button type="submit">${editData ? 'Сохранить' : 'Добавить'}</button>
            <div class="auth-modal-error" id="add-gallery-error"></div>
        </form>
    `;
    document.getElementById('close-add-gallery-modal').onclick = () => hideGalleryModal();
    const photosInput = document.getElementById('gallery-photos');
    const previewDiv = document.getElementById('gallery-photos-preview');
    if (editData && editData.photos && editData.photos.length) {
        editData.photos.forEach((src, i) => {
            const img = document.createElement('img');
            img.src = src;
            img.style.maxWidth = '70px';
            img.style.maxHeight = '70px';
            img.style.borderRadius = '6px';
            img.title = 'Загружено ранее';
            previewDiv.appendChild(img);
        });
    }
    photosInput.onchange = function() {
        previewDiv.innerHTML = '';
        const files = Array.from(photosInput.files).slice(0,10);
        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = e => {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.maxWidth = '70px';
                img.style.maxHeight = '70px';
                img.style.borderRadius = '6px';
                previewDiv.appendChild(img);
            };
            reader.readAsDataURL(file);
        });
    };
    document.getElementById('add-gallery-form').onsubmit = function(e) {
        e.preventDefault();
        const desc = document.getElementById('gallery-desc').value.trim();
        const files = Array.from(photosInput.files).slice(0,10);
        let error = '';
        if (!desc) error = 'Введите описание';
        else if (desc.length > 1000) error = 'Описание не более 1000 символов';
        else if (!files.length) error = 'Добавьте хотя бы одно фото';
        if (error) {
            document.getElementById('add-gallery-error').innerText = error;
            return;
        }
        let loaded = 0;
        let photosBase64 = [];
        files.forEach((file, i) => {
            const reader = new FileReader();
            reader.onload = e => {
                photosBase64[i] = e.target.result;
                loaded++;
                if (loaded === files.length) saveGallery(photosBase64);
            };
            reader.readAsDataURL(file);
        });
        function saveGallery(photosBase64) {
            let galleryArr = getGalleryList();
            const user = getCurrentUser();
            const now = new Date();
            const galleryObj = {
                desc,
                photos: photosBase64,
                author: user,
                date: now.toLocaleString('ru-RU'),
            };
            if (editData && editIndex !== null) {
                galleryArr[editIndex] = galleryObj;
            } else {
                galleryArr.unshift(galleryObj);
            }
            setGalleryList(galleryArr);
            hideGalleryModal();
            showToast(editData ? 'Фото обновлены!' : 'Фото добавлены!', 'success');
            renderGalleryList();
        }
    };
}
function getGalleryList() {
    return JSON.parse(localStorage.getItem('galleryList') || '[]');
}
function setGalleryList(arr) {
    localStorage.setItem('galleryList', JSON.stringify(arr));
}
function showGalleryModal(editData = null, editIndex = null) {
    document.getElementById('add-gallery-modal').style.display = 'block';
    renderAddGalleryForm(editData, editIndex);
}
function hideGalleryModal() {
    document.getElementById('add-gallery-modal').style.display = 'none';
}
function renderGalleryList() {
    const container = document.querySelector('.news-list-container');
    if (!container) return;
    const galleryArr = getGalleryList();
    const user = getCurrentUser();
    container.innerHTML = '';
    if (!galleryArr.length) {
        container.innerHTML = '<div style="color:#888;text-align:center;margin:2em 0;">Пока нет фотографий</div>';
        return;
    }
    galleryArr.forEach((item, i) => {
        const block = document.createElement('div');
        block.className = 'news-block';
        block.innerHTML = `
            <div class="news-block-header">
                <div class="news-block-title">Фото</div>
                <div class="news-block-date">${item.date}</div>
            </div>
            <div class="news-block-desc">${item.desc.replace(/</g,'&lt;').replace(/\n/g,'<br>')}</div>
            <div class="news-block-photos">${item.photos.map((src, idx) => `<img src="${src}" alt="фото" class="gallery-img" data-i="${i}" data-idx="${idx}">`).join('')}</div>
            <div class="news-block-actions">${isAdminUser() || user === item.author ? `<button class="edit-gallery-btn" data-i="${i}">Редактировать</button> <button class="delete-gallery-btn" data-i="${i}">Удалить</button>` : ''}</div>
        `;
        container.appendChild(block);
    });
    container.querySelectorAll('.edit-gallery-btn').forEach(btn => {
        btn.onclick = function() {
            const idx = +btn.getAttribute('data-i');
            showGalleryModal(galleryArr[idx], idx);
        };
    });
    container.querySelectorAll('.delete-gallery-btn').forEach(btn => {
        btn.onclick = function() {
            const idx = +btn.getAttribute('data-i');
            if (confirm('Удалить фото?')) {
                galleryArr.splice(idx, 1);
                setGalleryList(galleryArr);
                renderGalleryList();
                showToast('Фото удалены', 'success');
            }
        };
    });
    container.querySelectorAll('.gallery-img').forEach(img => {
        img.onclick = function() {
            showImageModal(img.src);
        };
    });
}
function createImageModal() {
    const modal = document.createElement('div');
    modal.id = 'image-view-modal';
    modal.className = 'auth-modal';
    modal.innerHTML = `<div class="auth-modal-content" id="image-view-modal-content" style="background:#fff;max-width:90vw;max-height:90vh;display:flex;align-items:center;justify-content:center;"></div>`;
    document.body.appendChild(modal);
}
function showImageModal(src) {
    const modal = document.getElementById('image-view-modal');
    const content = document.getElementById('image-view-modal-content');
    content.innerHTML = `<img src="${src}" style="max-width:80vw;max-height:80vh;border-radius:10px;">`;
    modal.style.display = 'flex';
    modal.onclick = () => { modal.style.display = 'none'; };
}
function getNews1Photos() {
    return JSON.parse(localStorage.getItem('news1Photos') || '[]');
}
function setNews1Photos(arr) {
    localStorage.setItem('news1Photos', JSON.stringify(arr));
}
function renderNews1Photos() {
    const photosDiv = document.getElementById('news-1-photos');
    if (!photosDiv) return;
    const photos = getNews1Photos();
    photosDiv.innerHTML = '';
    if (!photos.length) {
        if (isAdminUser()) {
            photosDiv.innerHTML = '<input type="file" id="news1-photo-input" accept="image/*" multiple><button id="news1-photo-save">Добавить фото</button>';
            document.getElementById('news1-photo-save').onclick = function() {
                const input = document.getElementById('news1-photo-input');
                const files = Array.from(input.files).slice(0,5);
                if (!files.length) return;
                let loaded = 0;
                let photosBase64 = [];
                files.forEach((file, i) => {
                    const reader = new FileReader();
                    reader.onload = e => {
                        photosBase64[i] = e.target.result;
                        loaded++;
                        if (loaded === files.length) {
                            setNews1Photos(photosBase64);
                            renderNews1Photos();
                        }
                    };
                    reader.readAsDataURL(file);
                });
            };
        } else {
            photosDiv.innerHTML = '<div style="color:#888;">Фото пока не добавлены</div>';
        }
        return;
    }
    photos.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'фото';
        img.className = 'gallery-img';
        img.style.maxWidth = '120px';
        img.style.maxHeight = '90px';
        img.style.margin = '4px';
        img.onclick = function() { showImageModal(src); };
        photosDiv.appendChild(img);
    });
    if (isAdminUser()) {
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Удалить все фото';
        delBtn.onclick = function() {
            if (confirm('Удалить все фото?')) {
                setNews1Photos([]);
                renderNews1Photos();
            }
        };
        photosDiv.appendChild(delBtn);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    createAuthModals();
    createAddModals();
    createGalleryModal();
    createImageModal();
    updateAuthUI();
    let addNewsBtn = document.getElementById('add-news-btn');
    if (window.location.pathname.includes('gallery.html')) {
        addNewsBtn.textContent = '';
        addNewsBtn.className = 'add-news-btn';
        addNewsBtn.innerHTML = '<span class="add-icon">+</span>Добавить фото';
        addNewsBtn.onclick = () => {
            if (getCurrentUser()) {
                showGalleryModal();
            } else {
                showModal('register-modal');
            }
        };
        renderGalleryList();
    } else {
        addNewsBtn.innerHTML = '<span class="add-icon">+</span>Добавить новость';
        addNewsBtn.onclick = () => {
            if (getCurrentUser()) {
                showAddModal('news');
            } else {
                showModal('register-modal');
            }
        };
        renderNewsList();
    }
    const adminBtn = document.getElementById('admin-panel-btn');
    if (adminBtn) {
      adminBtn.onclick = () => {
        showModal('admin-login-modal');
      };
    }
    window.addEventListener('click', function(event) {
        if (event.target.id === 'add-news-modal') hideAddModal('news');
        if (event.target.id === 'add-gallery-modal') hideGalleryModal();
    });
    document.getElementById('close-login-modal').onclick = () => hideModal('login-modal');
    document.getElementById('close-register-modal').onclick = () => hideModal('register-modal');
    document.getElementById('login-form').onsubmit = function(e) {
        e.preventDefault();
        const username = document.getElementById('login-username').value.trim();
        const password = document.getElementById('login-password').value;
        const users = getUsers();
        if (username === 'null' && password === 'null') {
            isAdmin = true;
            localStorage.setItem('isAdmin', 'true');
            hideModal('login-modal');
            updateAuthUI();
            if (window.location.pathname.includes('gallery.html')) {
                renderGalleryList();
            } else {
                renderNewsList();
            }
            showToast('Вы вошли как админ!', 'success');
            return;
        }
        if (users[username] && users[username].password === password) {
            setCurrentUser(username);
            hideModal('login-modal');
            updateAuthUI();
            showToast('Вы успешно вошли!', 'success');
            isAdmin = false;
            localStorage.setItem('isAdmin', 'false');
        } else {
            document.getElementById('login-error').innerText = 'Неверный логин или пароль';
        }
    };
    document.getElementById('register-form').onsubmit = function(e) {
        e.preventDefault();
        const username = document.getElementById('register-username').value.trim();
        const password = document.getElementById('register-password').value;
        const password2 = document.getElementById('register-password2').value;
        const users = getUsers();
        if (users[username]) {
            document.getElementById('register-error').innerText = 'Логин уже занят';
            return;
        }
        if (password !== password2) {
            document.getElementById('register-error').innerText = 'Пароли не совпадают';
            return;
        }
        if (username.length < 3 || password.length < 3) {
            document.getElementById('register-error').innerText = 'Минимум 3 символа в логине и пароле';
            return;
        }
        users[username] = { password };
        setUsers(users);
        setCurrentUser(username);
        hideModal('register-modal');
        updateAuthUI();
        showToast('Регистрация успешна!', 'success');
    };
    document.getElementById('close-admin-login-modal').onclick = () => hideModal('admin-login-modal');
    document.getElementById('admin-login-form').onsubmit = function(e) {
      e.preventDefault();
      const username = document.getElementById('admin-login-username').value.trim();
      const password = document.getElementById('admin-login-password').value;
      if (username === 'null' && password === 'null') {
        isAdmin = true;
        localStorage.setItem('isAdmin', 'true');
        hideModal('admin-login-modal');
        showAdminPanel();
      } else {
        document.getElementById('admin-login-error').innerText = 'Неверный логин или пароль';
      }
    };
    if (window.location.pathname.includes('gallery.html')) {
        renderGalleryList();
    } else {
        renderNewsList();
    }
    renderNews1Photos();
});
function renderNewsList() {
    const container = document.querySelector('.news-list-container');
    if (!container) return;
    const newsArr = getNewsList();
    const user = getCurrentUser();
    if (container) container.innerHTML = '';
    if (!newsArr.length) {
        if (container) container.innerHTML = '<div style="color:#888;text-align:center;margin:2em 0;">Новостей пока нет</div>';
        return;
    }
    newsArr.forEach((news, i) => {
        const block = document.createElement('div');
        block.className = 'news-block';
        block.innerHTML = `
            <div class="news-block-header">
                <div class="news-block-title">${news.title.replace(/</g,'&lt;')}</div>
                <div class="news-block-date">${news.date}</div>
            </div>
            <div class="news-block-desc">${news.desc.replace(/</g,'&lt;').replace(/\n/g,'<br>')}</div>
            ${news.photos && news.photos.length ? `<div class="news-block-photos">${news.photos.map(src => `<img src='${src}' alt='фото' class='gallery-img'>`).join('')}</div>` : ''}
            <div class="news-block-actions">${isAdminUser() || user === news.author ? `<button class="edit-news-btn" data-i="${i}">Редактировать</button> <button class="delete-news-btn" data-i="${i}">Удалить</button>` : ''}</div>
        `;
        if (container) container.appendChild(block);
    });
    if (container) {
        container.querySelectorAll('.edit-news-btn').forEach(btn => {
            btn.onclick = function() {
                const idx = +btn.getAttribute('data-i');
                showAddModal('news', newsArr[idx], idx);
            };
        });
        container.querySelectorAll('.delete-news-btn').forEach(btn => {
            btn.onclick = function() {
                const idx = +btn.getAttribute('data-i');
                if (confirm('Удалить новость?')) {
                    newsArr.splice(idx, 1);
                    setNewsList(newsArr);
                    renderNewsList();
                    showToast('Новость удалена', 'success');
                }
            };
        });
        container.querySelectorAll('.gallery-img').forEach(img => {
            img.onclick = function() {
                showImageModal(img.src);
            };
        });
    }
} 
function showAdminPanel() {
  const modal = document.getElementById('admin-panel-modal');
  const content = document.getElementById('admin-news-list');
  const newsArr = getNewsList();
  content.innerHTML = '';
  if (!newsArr.length) {
    content.innerHTML = '<div style="color:#888;text-align:center;margin:2em 0;">Новостей пока нет</div>';
  } else {
    newsArr.forEach((news, i) => {
      const block = document.createElement('div');
      block.className = 'news-block';
      block.innerHTML = `
        <div class="news-block-header">
          <div class="news-block-title">${news.title.replace(/</g,'&lt;')}</div>
          <div class="news-block-date">${news.date}</div>
        </div>
        <div class="news-block-desc">${news.desc.replace(/</g,'&lt;').replace(/\n/g,'<br>')}</div>
        <div class="news-block-photos">${news.photos && news.photos.length ? news.photos.map(src => `<img src='${src}' alt='фото' class='gallery-img'>`).join('') : ''}</div>
        <div class="news-block-actions"><button class="admin-delete-news-btn" data-i="${i}">Удалить</button></div>
      `;
      content.appendChild(block);
    });
    content.querySelectorAll('.admin-delete-news-btn').forEach(btn => {
      btn.onclick = function() {
        const idx = +btn.getAttribute('data-i');
        if (confirm('Удалить новость?')) {
          let newsArr = getNewsList();
          newsArr.splice(idx, 1);
          setNewsList(newsArr);
          showAdminPanel();
        }
      };
    });
  }
  modal.style.display = 'block';
  document.getElementById('close-admin-panel-modal').onclick = () => { modal.style.display = 'none'; };
  document.getElementById('admin-logout-btn').onclick = () => {
    isAdmin = false;
    localStorage.setItem('isAdmin', 'false');
    modal.style.display = 'none';
  };
}

