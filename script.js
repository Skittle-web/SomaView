document.addEventListener('DOMContentLoaded', function() {
    // Переменные для логина
    const loginButton = document.querySelector('.head__login');
    const logBlock = document.querySelector('.log_block');
    const backLogin = document.querySelector('.back_login');
    const closeBtn = document.querySelector('.close-btn');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.querySelector('.inp2');
    
    // Переменные для регистрации
    const showRegisterLink = document.querySelector('.show-register');
    const registerModal = document.querySelector('.register-modal');
    const closeRegisterBtn = document.querySelector('.close-register-btn');
    const submitRegisterBtn = document.querySelector('.submit-register-btn');
    
    // Переменные для жилья
    const createHousingBtn = document.querySelector('.create-housing-btn');
    const createModal = document.querySelector('.create-modal');
    const viewModal = document.querySelector('.view-modal');
    const closeCreateBtn = document.querySelector('.close-create-btn');
    const closeViewBtn = document.querySelector('.close-view-btn');
    const submitCreateBtn = document.querySelector('.submit-create-btn');
    const housingCards = document.getElementById('housingCards');
    const searchInput = document.querySelector('.search-input');
    const filterInputs = document.querySelectorAll('.filter-input');
    
    let housings = []; // Массив для хранения созданных жилищ
    
    // Функции для логина
    function showLogin() {
        logBlock.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function hideLogin() {
        logBlock.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    function togglePasswordVisibility(input) {
        if (input.type === 'password') {
            input.type = 'text';
        } else {
            input.type = 'password';
        }
    }
    
    // Функции для регистрации
    function showRegister() {
        registerModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        hideLogin(); // Скрываем окно логина при открытии регистрации
    }
    
    function hideRegister() {
        registerModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        clearRegisterForm();
    }
    
    function clearRegisterForm() {
        document.querySelector('.register-name').value = '';
        document.querySelector('.register-email').value = '';
        document.querySelector('.register-phone').value = '';
        document.querySelector('.register-password').value = '';
        document.querySelector('.register-confirm').value = '';
    }
    
    function registerAccount() {
        const name = document.querySelector('.register-name').value;
        const email = document.querySelector('.register-email').value;
        const phone = document.querySelector('.register-phone').value;
        const password = document.querySelector('.register-password').value;
        const confirmPassword = document.querySelector('.register-confirm').value;
        
        // Базовая валидация
        if (!name || !email || !phone || !password || !confirmPassword) {
            alert('Please fill in all required fields');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }
        
        // Здесь будет подключение к БД
        console.log('Registration data for DB:', {
            name,
            email,
            phone, // Телефон сохраняется в БД, но не используется в функционале
            password
        });
        
        // Временное сообщение об успехе
        alert('Account created successfully! You can now log in.');
        hideRegister();
    }
    
    // Функция для прокрутки к секции жилья
    function scrollToHousing() {
        const housingSection = document.getElementById('housingSection');
        housingSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    // Функции для жилья
    function showCreateModal() {
        createModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function hideCreateModal() {
        createModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        clearCreateForm();
    }
    
    function showViewModal(housing) {
        document.getElementById('viewHouseTitle').textContent = housing.name;
        document.getElementById('viewHouseDescription').textContent = housing.description;
        
        const featuresContainer = document.getElementById('viewHouseFeatures');
        featuresContainer.innerHTML = '';
        
        housing.features.forEach(feature => {
            const featureTag = document.createElement('span');
            featureTag.className = 'feature-tag';
            featureTag.textContent = feature;
            featuresContainer.appendChild(featureTag);
        });
        
        viewModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    
    function hideViewModal() {
        viewModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    function clearCreateForm() {
        document.querySelector('.create-name').value = '';
        document.querySelector('.create-description').value = '';
        document.querySelector('.create-image').value = '';
        document.querySelectorAll('.create-filter').forEach(checkbox => {
            checkbox.checked = false;
        });
    }
    
    function createHousing() {
        const name = document.querySelector('.create-name').value;
        const description = document.querySelector('.create-description').value;
        const imageInput = document.querySelector('.create-image');
        const features = Array.from(document.querySelectorAll('.create-filter:checked'))
            .map(checkbox => checkbox.value);
        
        if (!name || !description) {
            alert('Please fill in name and description');
            return;
        }
        
        let imageUrl = 'images/default-house.png';
        
        // Обработка загруженного файла
        if (imageInput.files && imageInput.files[0]) {
            const file = imageInput.files[0];
            // В будущем здесь будет загрузка в БД
            // Сейчас создаем временный URL для предпросмотра
            imageUrl = URL.createObjectURL(file);
        }
        
        const housing = {
            id: Date.now(),
            name,
            description,
            image: imageUrl,
            features,
            // В будущем добавим fileData для сохранения в БД
            fileData: imageInput.files[0] ? {
                name: imageInput.files[0].name,
                type: imageInput.files[0].type,
                size: imageInput.files[0].size
            } : null
        };
        
        housings.push(housing);
        renderHousings();
        hideCreateModal();
    }
    
    function renderHousings() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeFilters = Array.from(filterInputs)
            .filter(input => input.checked)
            .map(input => input.value);
        
        const filteredHousings = housings.filter(housing => {
            const matchesSearch = housing.name.toLowerCase().includes(searchTerm);
            const matchesFilters = activeFilters.length === 0 || 
                activeFilters.every(filter => housing.features.includes(filter));
            
            return matchesSearch && matchesFilters;
        });
        
        housingCards.innerHTML = '';
        
        filteredHousings.forEach(housing => {
            const card = document.createElement('div');
            card.className = 'housing-card';
            card.innerHTML = `
                <img src="${housing.image}" alt="${housing.name}" class="housing-card-img"
                     onerror="this.src='images/default-house.png'">
                <div class="housing-card-content">
                    <h3 class="housing-card-title">${housing.name}</h3>
                    <div class="housing-card-features">
                        ${housing.features.map(feature => 
                            `<span class="feature-tag">${feature}</span>`
                        ).join('')}
                    </div>
                </div>
            `;
            
            card.addEventListener('click', () => showViewModal(housing));
            housingCards.appendChild(card);
        });
    }
    
    // Слушатели для логина
    loginButton.addEventListener('click', showLogin);
    backLogin.addEventListener('click', hideLogin);
    closeBtn.addEventListener('click', hideLogin);
    togglePassword.addEventListener('click', () => togglePasswordVisibility(passwordInput));
    
    // Слушатели для регистрации
    showRegisterLink.addEventListener('click', function(e) {
        e.preventDefault();
        showRegister();
    });
    
    closeRegisterBtn.addEventListener('click', hideRegister);
    submitRegisterBtn.addEventListener('click', registerAccount);
    
    // Слушатели для переключения видимости пароля в регистрации
    const registerPasswordInput = document.querySelector('.register-password');
    const registerConfirmInput = document.querySelector('.register-confirm');
    const registerToggleButtons = document.querySelectorAll('.register-group .toggle-password');
    
    registerToggleButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const input = index === 0 ? registerPasswordInput : registerConfirmInput;
            togglePasswordVisibility(input);
        });
    });
    
    // Слушатель для кнопки "See more"
    document.querySelector('.main__see').addEventListener('click', scrollToHousing);
    
    // Слушатели для жилья
    createHousingBtn.addEventListener('click', showCreateModal);
    closeCreateBtn.addEventListener('click', hideCreateModal);
    closeViewBtn.addEventListener('click', hideViewModal);
    submitCreateBtn.addEventListener('click', createHousing);
    
    // Фильтрация и поиск
    searchInput.addEventListener('input', renderHousings);
    filterInputs.forEach(input => {
        input.addEventListener('change', renderHousings);
    });
    
    // Закрытие по ESC и клику на бэкдроп
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            if (logBlock.style.display === 'block') hideLogin();
            if (registerModal.style.display === 'block') hideRegister();
            if (createModal.style.display === 'block') hideCreateModal();
            if (viewModal.style.display === 'block') hideViewModal();
        }
    });
    
    document.querySelector('.create-backdrop').addEventListener('click', hideCreateModal);
    document.querySelector('.view-backdrop').addEventListener('click', hideViewModal);
    document.querySelector('.register-backdrop').addEventListener('click', hideRegister);
    
    // Предотвращаем закрытие при клике на контент модальных окон
    document.querySelector('.main_login').addEventListener('click', function(event) {
        event.stopPropagation();
    });
    
    document.querySelector('.create-content').addEventListener('click', function(event) {
        event.stopPropagation();
    });
    
    document.querySelector('.view-content').addEventListener('click', function(event) {
        event.stopPropagation();
    });
    
    document.querySelector('.register-content').addEventListener('click', function(event) {
        event.stopPropagation();
    });
    
    // Инициализация
    renderHousings();
});
