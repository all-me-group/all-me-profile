/* ============================================================
   SITTHINON PROMYO — PORTFOLIO SCRIPTS
   js/main.js
   ============================================================ */

export default defineConfig({
  base: '/sitthinon.promyo-profile/', // ใส่ชื่อ repo ปิดหัวท้ายด้วยสแลช
  // ... ตั้งค่าอื่นๆ
})

/**
 * 1. SCROLL PROGRESS BAR
 * Updates the width of #scrollLine based on how far
 * the user has scrolled down the page.
 */
function initScrollProgress() {
  const line = document.getElementById('scrollLine');
  if (!line) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    line.style.width = pct + '%';
  });
}

/**
 * 2. FADE-UP SCROLL ANIMATION
 * Uses IntersectionObserver to add the .visible class
 * when an element enters the viewport.
 */
function initFadeUpAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

/**
 * 3. HERO IMMEDIATE REVEAL
 * Triggers the hero section's fade-up animations
 * without waiting for scroll.
 */
function initHeroReveal() {
  setTimeout(() => {
    document.querySelectorAll('#hero .fade-up').forEach(el => {
      el.classList.add('visible');
    });
  }, 100);
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initFadeUpAnimations();
  initHeroReveal();
});
