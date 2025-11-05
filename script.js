// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) navbar.classList.add('scrolled'); else navbar.classList.remove('scrolled');
});
// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
// Form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const successMessage = document.getElementById('success-message');
  successMessage.classList.add('show');
  this.reset();
  setTimeout(() => successMessage.classList.remove('show'), 5000);
});

