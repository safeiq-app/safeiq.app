/* ============================================================
   Safe IQ — script.js v3
   Vanilla JS, no dependencies. ~2.5KB.
   ============================================================ */

(() => {
  'use strict';

  /* ---- Dynamic year ---- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();


  /* ---- Mobile nav toggle ---- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu on link tap
    navLinks.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navLinks.classList.contains('open')) return;
      const inside = navLinks.contains(e.target) || navToggle.contains(e.target);
      if (!inside) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }


  /* ---- Sticky header shadow on scroll ---- */
  const header = document.getElementById('siteHeader');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }


  /* ---- Scroll-reveal via IntersectionObserver ---- */
  const revealTargets = document.querySelectorAll(
    // Hero
    '.hero-badge, .hero-title, .hero-subtitle, .hero-cta-row, .hero-trust, .hero-visual, ' +
    // Logo bar
    '.logo-bar-label, .logo-item, ' +
    // Sections
    '.section-heading, .section .lead, .eyebrow, ' +
    // Feature cards
    '.feature, ' +
    // How steps
    '.how-step, ' +
    // Phone gallery
    '.phone-gallery .phone-frame, ' +
    // Tech cards
    '.tech-card, ' +
    // Roadmap
    '.roadmap-col, ' +
    // Maker
    '.maker-side, .link-chip, ' +
    // Floating problem chips
    '.floating-chip, ' +
    // CTA
    '.cta-icon'
  );

  revealTargets.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.05,
      }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    // Fallback for older browsers
    revealTargets.forEach((el) => el.classList.add('in-view'));
  }


  /* ---- Stagger reveal in grids ---- */
  const stagger = (selector, delayStep = 80) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.style.transitionDelay = `${i * delayStep}ms`;
    });
  };
  stagger('.features .feature', 90);
  stagger('.tech-grid .tech-card', 70);
  stagger('.roadmap-cols .roadmap-col', 100);
  stagger('.phone-gallery .phone-frame', 120);
  stagger('.how-steps .how-step', 150);
  stagger('.maker-links .link-chip', 60);
  stagger('.logo-bar-items .logo-item', 60);
  stagger('.floating-chip', 100);
  stagger('.hero-trust .trust-item', 80);

})();
