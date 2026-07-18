/* ============================================================
   Safe IQ landing page — script.js
   Vanilla JS, no dependencies. ~2KB.
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
      const clickedInsideMenu = navLinks.contains(e.target) || navToggle.contains(e.target);
      if (!clickedInsideMenu) {
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
    '.hero-icon, .hero-badge, .hero-title, .hero-subtitle, .hero-cta-row, ' +
    '.section-heading, .section .lead, ' +
    '.feature, .tech-card, .phone-frame, ' +
    '.preview-note, .maker-links, .link-chip'
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
  stagger('.features .feature', 100);
  stagger('.tech-grid .tech-card', 70);
  stagger('.maker-links .link-chip', 60);

})();
