// Smooth-ish scroll (nativo, semplice)
document.documentElement.style.scrollBehavior = 'smooth';

// Reveal on scroll con IntersectionObserver
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Parallax leggero sul hero in base allo scroll
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  const y = window.scrollY * 0.08;
  hero.style.backgroundPosition = `center ${-y}px`;
});
