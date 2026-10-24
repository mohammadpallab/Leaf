// Floating particles
const container = document.getElementById('particles');
const count = 28;

for (let i = 0; i < count; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = Math.random() * 100 + '%';
  p.style.bottom = '-10px';
  p.style.animationDuration = (8 + Math.random() * 14) + 's';
  p.style.animationDelay = (Math.random() * 10) + 's';
  p.style.width = p.style.height = (1.5 + Math.random() * 2.5) + 'px';
  p.style.opacity = 0;
  container.appendChild(p);
}

// Subtle parallax on name when mouse moves
const name = document.getElementById('name');
if (window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 8;
    name.style.transform = `translate(${x}px, ${y}px)`;
  });
}
