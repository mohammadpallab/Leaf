// ===== Cursor Glow =====
const glow = document.getElementById('cursorGlow');
if (glow && window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', (e) => {
    glow.style.opacity = '1';
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
  document.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
  });
}

// ===== Navbar =====
const navbar = document.getElementById('navbar');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}

// ===== Scroll Reveal =====
const reveals = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(el => revealObs.observe(el));

// ===== Skill Bars =====
const skillFills = document.querySelectorAll('.skill-fill');
const skillObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const fill = e.target;
      fill.style.width = fill.dataset.width + '%';
      skillObs.unobserve(fill);
    }
  });
}, { threshold: 0.4 });
skillFills.forEach(f => skillObs.observe(f));

// ===== Counter Animation =====
const counters = document.querySelectorAll('.stat-num');
let counted = false;
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting && !counted) {
      counted = true;
      counters.forEach(c => {
        const target = +c.dataset.count;
        const duration = 1800;
        const step = target / (duration / 16);
        let cur = 0;
        const tick = () => {
          cur += step;
          if (cur < target) {
            c.textContent = Math.ceil(cur);
            requestAnimationFrame(tick);
          } else {
            c.textContent = target;
          }
        };
        tick();
      });
    }
  });
}, { threshold: 0.5 });
if (counters.length) {
  counterObs.observe(counters[0].closest('.hero-stats'));
}
