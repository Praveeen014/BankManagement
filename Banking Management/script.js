
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const closeLogin = document.getElementById('close-login');
const closeRegister = document.getElementById('close-register');


loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});


registerBtn.addEventListener('click', () => {
    registerModal.style.display = 'flex';
});


closeLogin.addEventListener('click', () => {
    loginModal.style.display = 'none';
});


closeRegister.addEventListener('click', () => {
    registerModal.style.display = 'none';
});


window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target === registerModal) {
        registerModal.style.display = 'none';
    }
});
