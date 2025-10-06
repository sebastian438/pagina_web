// año dinámico y toggle menú
document.addEventListener('DOMContentLoaded', () => {
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    const toggle = document.querySelector('.nav-toggle');
    const menu = document.getElementById('menu');
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            const isOpen = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!isOpen));
        });
    }
});