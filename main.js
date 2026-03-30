// ===== МОДАЛЬНОЕ ОКНО =====
function openModal() {
    const modal = document.getElementById('callback-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';  // Блокируем прокрутку
    }
}

function closeModal() {
    const modal = document.getElementById('callback-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';  // Возвращаем прокрутку
    }
}

// Закрытие по клику вне модального окна
window.onclick = function(event) {
    const modal = document.getElementById('callback-modal');
    if (event.target == modal) {
        closeModal();
    }
}

// Закрытие по ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// ===== ПЛАВНАЯ ПРОКРУТКА =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== МАСКА ДЛЯ ТЕЛЕФОНА =====
document.addEventListener('DOMContentLoaded', function() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');

    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value[0] === '7' || value[0] === '8') {
                    value = value.substring(1);
                }
                let formattedValue = '+7';
                if (value.length > 0) {
                    formattedValue += ' (' + value.substring(0, 3);
                }
                if (value.length >= 3) {
                    formattedValue += ') ' + value.substring(3, 6);
                }
                if (value.length >= 6) {
                    formattedValue += '-' + value.substring(6, 8);
                }
                if (value.length >= 8) {
                    formattedValue += '-' + value.substring(8, 10);
                }
                e.target.value = formattedValue;
            }
        });
    });
});