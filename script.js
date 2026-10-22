// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== Mobile Menu =====
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ===== Scroll Reveal =====
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Simple fake submit for demo
  contactForm.style.display = 'none';
  formSuccess.classList.add('show');
  
  // Reset after 4 seconds
  setTimeout(() => {
    contactForm.reset();
    contactForm.style.display = 'flex';
    formSuccess.classList.remove('show');
  }, 4000);
});

// ===== Smooth active link highlight (optional polish) =====
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 120;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
    
    if (link) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        link.style.color = 'var(--text)';
      } else {
        link.style.color = '';
      }
    }
  });
});
