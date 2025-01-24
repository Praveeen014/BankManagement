// Modal Logic for Register and Login
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const closeLogin = document.getElementById('close-login');
const closeRegister = document.getElementById('close-register');

// Open the Login modal
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

// Open the Register modal
registerBtn.addEventListener('click', () => {
    registerModal.style.display = 'flex';
});

// Close the Login modal
closeLogin.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Close the Register modal
closeRegister.addEventListener('click', () => {
    registerModal.style.display = 'none';
});

// Close modals if user clicks outside
window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target === registerModal) {
        registerModal.style.display = 'none';
    }
});
