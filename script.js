function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
}
