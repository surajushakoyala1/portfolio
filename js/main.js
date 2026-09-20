/**
 * Portfolio Interactive Scripts
 * Author: Suraj Kumar Ushakoyala
 * Description: Handles navigation, mobile drawer, scroll animations,
 * active link spy, back-to-top button, and contact form validation.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. Element Selectors
  // -------------------------------------------------------------------------
  const header = document.querySelector('.header');
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.querySelector('.back-to-top');
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const sections = document.querySelectorAll('section[id]');

  // -------------------------------------------------------------------------
  // 2. Mobile Hamburger Navigation
  // -------------------------------------------------------------------------
  if (hamburgerBtn && navMenu) {
    const toggleMenu = () => {
      const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
      hamburgerBtn.classList.toggle('active');
      navMenu.classList.toggle('open');
      document.body.classList.toggle('menu-open', !isExpanded);
    };

    const closeMenu = () => {
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      hamburgerBtn.classList.remove('active');
      navMenu.classList.remove('open');
      document.body.classList.remove('menu-open');
    };

    hamburgerBtn.addEventListener('click', toggleMenu);

    // Close menu when clicking on any navigation link
    navLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside of nav
    document.addEventListener('click', (e) => {
      if (
        navMenu.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        !hamburgerBtn.contains(e.target)
      ) {
        closeMenu();
      }
    });

    // Close menu on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMenu();
        hamburgerBtn.focus();
      }
    });
  }

  // -------------------------------------------------------------------------
  // 3. Header Scroll Effect & Back-to-Top Button
  // -------------------------------------------------------------------------
  const handleScrollEffects = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    // Header background darkens on scroll
    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  };

  window.addEventListener('scroll', handleScrollEffects, { passive: true });
  handleScrollEffects(); // Initial check on load

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // -------------------------------------------------------------------------
  // 4. Active Navigation Link Spy
  // -------------------------------------------------------------------------
  const updateActiveNavLink = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const headerHeight = header ? header.offsetHeight : 70;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - headerHeight - 100;
      const sectionId = current.getAttribute('id');
      const targetLink = document.querySelector(`.nav-link[href*="#${sectionId}"]`);

      if (targetLink) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          targetLink.classList.add('active');
        } else {
          targetLink.classList.remove('active');
        }
      }
    });
  };

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink(); // Initial check

  // -------------------------------------------------------------------------
  // 5. Scroll Reveal Animations (Intersection Observer)
  // -------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.15
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver is not supported
    revealElements.forEach((el) => el.classList.add('revealed'));
  }

  // -------------------------------------------------------------------------
  // 6. Interactive Contact Form Validation
  // -------------------------------------------------------------------------
  if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    // Email regex validator
    const isValidEmail = (email) => {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(String(email).trim().toLowerCase());
    };

    // Field validation helper
    const validateField = (input, isValid, errorMsg) => {
      const parent = input.closest('.form-group');
      const errorSpan = parent ? parent.querySelector('.error-message') : null;

      if (!isValid) {
        input.classList.add('error');
        if (errorSpan) {
          errorSpan.textContent = errorMsg;
          errorSpan.style.display = 'block';
        }
        return false;
      } else {
        input.classList.remove('error');
        if (errorSpan) {
          errorSpan.textContent = '';
          errorSpan.style.display = 'none';
        }
        return true;
      }
    };

    // Real-time validation listeners
    if (nameInput) {
      nameInput.addEventListener('input', () => {
        validateField(nameInput, nameInput.value.trim().length >= 2, 'Please enter your name (at least 2 characters).');
      });
    }

    if (emailInput) {
      emailInput.addEventListener('input', () => {
        validateField(emailInput, isValidEmail(emailInput.value), 'Please enter a valid email address.');
      });
    }

    if (subjectInput) {
      subjectInput.addEventListener('input', () => {
        validateField(subjectInput, subjectInput.value.trim().length >= 3, 'Please enter a subject (at least 3 characters).');
      });
    }

    if (messageInput) {
      messageInput.addEventListener('input', () => {
        validateField(messageInput, messageInput.value.trim().length >= 10, 'Please enter a message (at least 10 characters).');
      });
    }

    // Form submission event
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateField(nameInput, nameInput.value.trim().length >= 2, 'Please enter your name (at least 2 characters).');
      const isEmailValid = validateField(emailInput, isValidEmail(emailInput.value), 'Please enter a valid email address.');
      const isSubjectValid = validateField(subjectInput, subjectInput.value.trim().length >= 3, 'Please enter a subject (at least 3 characters).');
      const isMessageValid = validateField(messageInput, messageInput.value.trim().length >= 10, 'Please enter a message (at least 10 characters).');

      if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
        // Successful client-side validation
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;

        // Feedback state
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <svg class="btn-icon" style="animation: spin 1s linear infinite;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
            <path d="M12 2a10 10 0 0 1 10 10"></path>
          </svg>
          Sending Message...
        `;

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;

          if (formStatus) {
            formStatus.className = 'form-status success';
            formStatus.innerHTML = `
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Thank you! Your message has been prepared. (This portfolio demo uses client-side validation. To receive live emails, connect Formspree or EmailJS in js/main.js).</span>
            `;
          }

          // Reset form fields
          contactForm.reset();

          // Auto-hide status after 7 seconds
          setTimeout(() => {
            if (formStatus) {
              formStatus.style.display = 'none';
            }
          }, 7000);
        }, 1000);
      } else {
        if (formStatus) {
          formStatus.className = 'form-status error';
          formStatus.innerHTML = `
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>Please complete all required fields correctly before submitting.</span>
          `;
        }
      }
    });
  }
});
