/* ============================================================
   Safe IQ landing page — script.js
   No frameworks, no dependencies. Vanilla JS, ~2KB.
   ============================================================ */

(() => {
  'use strict';

  /* --------------------------------------------------
     Dynamic year in footer
  -------------------------------------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* --------------------------------------------------
     Mobile nav toggle
  -------------------------------------------------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close the mobile menu on any link tap
    navLinks.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --------------------------------------------------
     Sticky header — add shadow when scrolled
  -------------------------------------------------- */
  const header = document.getElementById('siteHeader');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* --------------------------------------------------
     Scroll-reveal via IntersectionObserver
     Applies "in-view" class to any element with .reveal
     when it enters the viewport, only once.
  -------------------------------------------------- */
  const revealTargets = document.querySelectorAll(
    '.hero-title, .hero-subtitle, .hero-cta-row, .hero-visual, ' +
    '.section h2, .section .lead, ' +
    '.feature-card, .how-step, .tech-card, .roadmap-col, .faq-item, ' +
    '.stat, .cta-final-title, .cta-final-sub'
  );

  // Give each target the base class so opacity starts at 0
  revealTargets.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target); // fire once only
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -60px 0px', // fire slightly before element top hits viewport
        threshold: 0.05,
      }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    // Fallback for very old browsers — just show everything immediately
    revealTargets.forEach((el) => el.classList.add('in-view'));
  }

  /* --------------------------------------------------
     Stagger reveal within grids (add small delays)
  -------------------------------------------------- */
  const stagger = (selector, delayStep = 80) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.style.transitionDelay = `${i * delayStep}ms`;
    });
  };
  stagger('.features-grid .feature-card');
  stagger('.how-grid .how-step', 120);
  stagger('.tech-grid .tech-card', 60);
  stagger('.roadmap-columns .roadmap-col', 100);
  stagger('.stats-inner .stat', 100);

})();
