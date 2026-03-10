// Toggle mobile nav
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// Close nav when clicking outside
document.addEventListener('click', (e) => {
    const nav = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');
    if (nav.classList.contains('active') &&
        !nav.contains(e.target) &&
        !hamburger.contains(e.target)) {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Force hero elements visible on load with stagger
window.addEventListener('load', () => {
    const heroEls = document.querySelectorAll('#hero .fade-in, #hero .slide-left, #hero .slide-right');
    heroEls.forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), 200 + i * 150);
    });
});

// Scroll animations for everything else
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in, .slide-left, .slide-right').forEach(el => {
    // Skip hero elements — handled above
    if (!el.closest('#hero')) observer.observe(el);
});

// Stagger project cards
document.querySelectorAll('.project-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.12}s`;
    observer.observe(card);
});

// Stagger skill blocks
document.querySelectorAll('.skill-block').forEach((block, i) => {
    block.style.transitionDelay = `${i * 0.1}s`;
    observer.observe(block);
});
