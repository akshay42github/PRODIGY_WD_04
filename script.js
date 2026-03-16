/* ═══════════════════════════════════════════════════
   AKSHAY YADAV — PORTFOLIO SCRIPT
   Dependencies: GSAP + ScrollTrigger (loaded in HTML)
═══════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────
   1. CUSTOM CURSOR
───────────────────────────────────────────────── */
(function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');

  if (!dot || !ring) return;

  let mx = 0, my = 0;   // mouse position
  let rx = 0, ry = 0;   // ring position (lagged)

  // Instantly snap the dot
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  // Smoothly animate the ring
  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Grow cursor on interactive elements
  const hoverTargets = document.querySelectorAll(
    'a, button, .project-item, .skill-category, .strength-tag, .social-link, .back-top'
  );
  hoverTargets.forEach((el) => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-grow'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-grow'));
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });
})();


/* ─────────────────────────────────────────────────
   2. LOADING SCREEN
───────────────────────────────────────────────── */
(function initLoader() {
  const loader    = document.getElementById('loader');
  const loaderBar = document.getElementById('loaderBar');
  const loaderPct = document.getElementById('loaderPct');
  const loaderTxt = document.querySelector('.loader-text');

  if (!loader) return;

  // Fade in the text
  gsap.to(loaderTxt, { opacity: 1, duration: 0.7, delay: 0.2, ease: 'power2.out' });
  gsap.to(loaderPct, { opacity: 1, duration: 0.7, delay: 0.3, ease: 'power2.out' });

  // Animate the bar and percentage counter
  let pct = 0;
  const interval = setInterval(() => {
    pct += Math.random() * 12;
    if (pct > 100) pct = 100;
    if (loaderBar) loaderBar.style.width = pct + '%';
    if (loaderPct) loaderPct.textContent  = Math.round(pct) + '%';
    if (pct >= 100) clearInterval(interval);
  }, 120);

  // Hide loader after ~2.2s and kick off page animations
  setTimeout(() => {
    gsap.to(loader, {
      opacity:  0,
      duration: 0.8,
      ease:     'power2.inOut',
      onComplete() {
        loader.style.display = 'none';
        initPageAnimations();
      },
    });
  }, 2400);
})();


/* ─────────────────────────────────────────────────
   3. PAGE ANIMATIONS (runs after loader is done)
───────────────────────────────────────────────── */
function initPageAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  /* ── Hero ── */
  const heroTimeline = gsap.timeline({ defaults: { ease: 'power4.out' } });

  // Headline lines slide up from mask
  document.querySelectorAll('.hero-headline .line-inner').forEach((el, i) => {
    heroTimeline.to(el, { y: '0%', duration: 1.2 }, i * 0.14);
  });

  heroTimeline
    .to('.hero-label',   { opacity: 1, y: 0, duration: 0.9 }, 0.15)
    .to('.hero-sub',     { opacity: 1, y: 0, duration: 0.9 }, 0.5)
    .to('.hero-actions', { opacity: 1, y: 0, duration: 0.9 }, 0.68)
    .to('.hero-stats',   { opacity: 1, duration: 0.8 },        0.9)
    .to('.hero-scroll',  { opacity: 1, duration: 0.8 },        1.1)
    .to('.hero-counter', { opacity: 1, duration: 0.8 },        1.1);

  /* ── Reveal-up elements (scroll triggered) ── */
  document.querySelectorAll('.reveal-up').forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start:   'top 85%',
      onEnter() {
        gsap.to(el, {
          opacity:   1,
          y:         0,
          duration:  0.9,
          ease:      'power3.out',
        });
      },
    });
  });

  /* ── Timeline items slide in from left ── */
  document.querySelectorAll('.timeline-item').forEach((el, i) => {
    ScrollTrigger.create({
      trigger: el,
      start:   'top 88%',
      onEnter() {
        gsap.to(el, {
          opacity:  1,
          x:        0,
          duration: 0.8,
          delay:    i * 0.08,
          ease:     'power3.out',
        });
      },
    });
  });

  /* ── Skill bars fill on scroll ── */
  document.querySelectorAll('.skill-bar').forEach((bar) => {
    ScrollTrigger.create({
      trigger: bar,
      start:   'top 92%',
      onEnter() {
        bar.style.width = (bar.dataset.width || 50) + '%';
      },
    });
  });

  /* ── Project items fade in ── */
  document.querySelectorAll('.project-item').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      opacity:  0,
      y:        40,
      duration: 0.9,
      ease:     'power3.out',
    });
  });

  /* ── Strength tags stagger ── */
  ScrollTrigger.create({
    trigger: '.strength-tags',
    start:   'top 88%',
    onEnter() {
      gsap.to('.strength-tag', {
        opacity:  1,
        y:        0,
        duration: 0.5,
        stagger:  0.08,
        ease:     'power3.out',
      });
    },
  });
}


/* ─────────────────────────────────────────────────
   4. NAVIGATION — scroll behaviour & active links
───────────────────────────────────────────────── */
(function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  function onScroll() {
    // Toggle scrolled class
    nav.classList.toggle('scrolled', window.scrollY > 60);

    // Highlight active section link
    const sections = document.querySelectorAll('section[id]');
    let current    = '';
    sections.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 140) current = s.id;
    });
    document.querySelectorAll('.nav-link').forEach((a) => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
})();


/* ─────────────────────────────────────────────────
   5. MOBILE NAV — hamburger toggle
───────────────────────────────────────────────── */
(function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();


/* ─────────────────────────────────────────────────
   6. SMOOTH SCROLL for anchor links
───────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


/* ─────────────────────────────────────────────────
   7. CONTACT FORM — animated submit
───────────────────────────────────────────────── */
(function initContactForm() {
  const form      = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  if (!form || !submitBtn) return;

  const originalHTML = submitBtn.innerHTML;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Loading state
    submitBtn.innerHTML  = 'Sending… <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10" stroke-dasharray="62.8" stroke-dashoffset="62.8"><animate attributeName="stroke-dashoffset" values="62.8;0" dur="1s" repeatCount="indefinite"/></circle></svg>';
    submitBtn.style.opacity = '0.75';
    submitBtn.disabled   = true;

    // Simulate async send (replace with real fetch() to a backend/formspree)
    setTimeout(() => {
      submitBtn.innerHTML       = '✓ Message Sent!';
      submitBtn.style.opacity   = '1';
      submitBtn.style.background = '#4caf82';
      submitBtn.style.color     = '#fff';
      form.reset();

      setTimeout(() => {
        submitBtn.innerHTML        = originalHTML;
        submitBtn.style.background = '';
        submitBtn.style.color      = '';
        submitBtn.disabled         = false;
      }, 3500);
    }, 1800);
  });
})();


/* ─────────────────────────────────────────────────
   8. HERO BACKGROUND — subtle mouse parallax
───────────────────────────────────────────────── */
(function initParallax() {
  const glow1 = document.querySelector('.hero-bg-glow');
  const glow2 = document.querySelector('.hero-bg-glow-2');
  if (!glow1 || !glow2) return;

  document.addEventListener('mousemove', (e) => {
    const cx = e.clientX / window.innerWidth  - 0.5;   // -0.5 → 0.5
    const cy = e.clientY / window.innerHeight - 0.5;

    glow1.style.transform = `translate(${cx * 30}px, ${cy * 20}px)`;
    glow2.style.transform = `translate(${cx * -20}px, ${cy * -15}px)`;
  });
})();


/* ─────────────────────────────────────────────────
   9. SECTION COUNTER update in hero
───────────────────────────────────────────────── */
(function initSectionCounter() {
  const counter  = document.querySelector('.hero-counter');
  const sections = document.querySelectorAll('section[id]');
  if (!counter || !sections.length) return;

  const labels = {
    hero:       'Software Engineer Trainee',
    about:      'About — Akshay Yadav',
    skills:     'Python · Django · ML',
    work:       'Projects Portfolio',
    experience: 'Academic Journey',
    contact:    'Get in Touch',
  };

  window.addEventListener('scroll', () => {
    let current = 'hero';
    sections.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 200) current = s.id;
    });
    counter.textContent = labels[current] || current;
  }, { passive: true });
})();


/* ─────────────────────────────────────────────────
   10. PROJECT IMAGE — hover ripple glow
───────────────────────────────────────────────── */
(function initProjectHover() {
  document.querySelectorAll('.project-item').forEach((item) => {
    const glow = item.querySelector('.proj-glow');
    if (!glow) return;

    item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect();
      const x    = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
      const y    = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
      glow.style.left = x + '%';
      glow.style.top  = y + '%';
      glow.style.transform = 'translate(-50%, -50%)';
    });
  });
})();
