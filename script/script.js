// script.js

// Select DOM elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Function to toggle the menu
const toggleMenu = () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');

    // Update ARIA attribute for accessibility
    const isExpanded = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
};

// Event listeners
hamburger.addEventListener('click', toggleMenu);
hamburger.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
        toggleMenu();
    }
});

// Close the menu when clicking outside of it
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', false);
        }
    }
});
