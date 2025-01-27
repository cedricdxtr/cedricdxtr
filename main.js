// Select the menu toggle and nav links
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Toggle the 'active' class for the nav links
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('open'); // Optional: Add an 'open' class for animation
});

// Close the menu when a link is clicked (for better UX on mobile)
navLinks.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('open');
  }
});
