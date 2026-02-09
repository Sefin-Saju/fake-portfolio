// Change navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#0f172a';
    } else {
        navbar.style.background = '#1e293b';
    }
});

// Simple Form Alert
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks for reaching out! This is a demo, so no email was actually sent.');
});