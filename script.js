/**
 * Portfolio Website - Complete JavaScript
 * Android & eCommerce Developer Portfolio
 */

document.addEventListener('DOMContentLoaded', function() {
  // ==========================================
  // 1. HEADER SCROLL EFFECT
  // ==========================================
  const header = document.getElementById('siteHeader');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    updateActiveNavLink();
  });

  // ==========================================
  // 2. MOBILE MENU TOGGLE
  // ==========================================
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
  }

  window.addEventListener('resize', function() {
    if (window.innerWidth > 1024) {
      nav.classList.remove('active');
      menuToggle.classList.remove('active');
    }
  });

  // ==========================================
  // 3. SMOOTH SCROLL FOR ANCHORS
  // ==========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href && href !== '#' && href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          const headerHeight = 80;
          const targetPosition = targetElement.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // ==========================================
  // 4. UPDATE ACTIVE NAV LINK
  // ==========================================
  function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      
      const href = link.getAttribute('href');
      if (href === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  // ==========================================
  // 5. INTERSECTION OBSERVER FOR ANIMATIONS
  // ==========================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-up, .reveal-card').forEach(el => {
    observer.observe(el);
  });

  // ==========================================
  // 6. VIDEO AUTOPLAY CONTROL
  // ==========================================
  const videos = document.querySelectorAll('.project-video');
  
  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.play().catch(err => {
            console.log('Video autoplay blocked:', err);
          });
        } else {
          entry.target.pause();
        }
      });
    }, { threshold: 0.5 });

    videos.forEach(video => {
      videoObserver.observe(video);
    });
  }

  // ==========================================
  // 7. DYNAMIC YEAR IN FOOTER
  // ==========================================
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ==========================================
  // 8. CONTACT FORM HANDLING
  // ==========================================
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all required fields!');
        return;
      }

      console.log('Form submitted:', { name, email, message });
    });
  }

  // ==========================================
  // 9. FORM INPUT VALIDATION
  // ==========================================
  const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
  
  formInputs.forEach(input => {
    input.addEventListener('blur', function() {
      if (this.hasAttribute('required') && !this.value) {
        this.style.borderColor = '#ff6b9d';
      } else {
        this.style.borderColor = '';
      }
    });

    input.addEventListener('input', function() {
      if (this.value) {
        this.style.borderColor = '';
      }
    });
  });

  // ==========================================
  // 10. LAZY LOAD IMAGES
  // ==========================================
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.add('loaded');
          }
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
});
