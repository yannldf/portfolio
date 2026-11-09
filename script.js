//Toggling Menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}

showMenu('nav-toggle', 'nav-menu');

// Toggling Active Link
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Typing animation for the name
const typeName = () => {
    const nameElement = document.querySelector('.typing');
    if (!nameElement) return;

    const fullText = nameElement.textContent.trim();
    nameElement.textContent = '';
    let index = 0;

    const interval = setInterval(() => {
        nameElement.textContent += fullText[index];
        index += 1;

        if (index === fullText.length) {
            clearInterval(interval);
        }
    }, 100);
};

typeName();

// Dark theme toggle
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';

const selectedTheme = localStorage.getItem('selected-theme');

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
}

themeButton?.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    const currentTheme = document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    localStorage.setItem('selected-theme', currentTheme);
});

// Scroll Reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.home-title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home-img', { delay: 400 });
sr.reveal('.home-social', { delay: 400 });

sr.reveal('.about-img', {});
sr.reveal('.about-subtitle', { delay: 200 });
sr.reveal('.about-text', { delay: 400 });

sr.reveal('.skills-category-title', { delay: 100 });
sr.reveal('.skills-grid', { delay: 150 });
sr.reveal('.skills-section', { interval: 200 });

sr.reveal('.work-img', { interval: 200 });

sr.reveal('.experience-item', { interval: 200 });

sr.reveal('.projet-item', { interval: 200 });

sr.reveal('.veille-card', { interval: 200 });

sr.reveal('.contact-input', { interval: 200 });