// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Contact Modal Elements
    const contactModal = document.getElementById('contactModal');
    const openModalButtons = document.querySelectorAll('.open-contact-modal');
    const closeModalButton = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    
    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    
    // Open Modal Function
    function openContactModal() {
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        console.log('Contact modal opened');
    }
    
    // Close Modal Function
    function closeContactModal() {
        contactModal.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
        console.log('Contact modal closed');
    }
    
    // Add click events to all "Send Message" and "Hire Me" buttons
    openModalButtons.forEach(button => {
        button.addEventListener('click', openContactModal);
    });
    
    // Close modal on close button click
    closeModalButton.addEventListener('click', closeContactModal);
    
    // Close modal on overlay click
    modalOverlay.addEventListener('click', closeContactModal);
    
    // Close modal on Escape key press
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && contactModal.classList.contains('active')) {
            closeContactModal();
        }
    });
    
    // Track which contact option is chosen
    document.querySelectorAll('.contact-option').forEach(option => {
        option.addEventListener('click', function(e) {
            const platform = this.classList.contains('linkedin-option') ? 'LinkedIn' :
                            this.classList.contains('whatsapp-option') ? 'WhatsApp' :
                            this.classList.contains('email-option') ? 'Email' : 'Contact';
            
            console.log(`Contact option chosen: ${platform}`);
            
            // Optional: Add Google Analytics tracking here
            // if (typeof gtag !== 'undefined') {
            //     gtag('event', 'contact_option', {
            //         'event_category': 'Contact',
            //         'event_label': platform
            //     });
            // }
            
            // Close modal after a short delay (allowing link to open)
            setTimeout(() => {
                closeContactModal();
            }, 300);
        });
    });
    
    // Back to Top Button Functionality
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // Set active nav link based on scroll position
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Hire button animation
    const hireBtn = document.querySelector('.hire-btn');
    if (hireBtn) {
        hireBtn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Open contact modal when Hire Me is clicked
            openContactModal();
        });
    }
    
    // Animate skill tags on hover
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Animate cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all cards
    document.querySelectorAll('.skill-category-card, .expertise-card, .stat-card').forEach(card => {
        observer.observe(card);
    });
    
    // Typewriter effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing after a delay
        setTimeout(typeWriter, 1000);
    }
    
    // Animate progress bars on scroll
    const progressBars = document.querySelectorAll('.progress-fill');
    const progressObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressFill = entry.target;
                const width = progressFill.style.width;
                progressFill.style.width = '0';
                
                setTimeout(() => {
                    progressFill.style.width = width;
                }, 300);
                
                progressObserver.unobserve(progressFill);
            }
        });
    }, {
        threshold: 0.5
    });
    
    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
    
    // Animate stats counters
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stat = entry.target;
                const target = stat.textContent.replace('+', '').replace('%', '');
                
                if (!isNaN(target)) {
                    let count = 0;
                    const increment = target / 50;
                    const timer = setInterval(() => {
                        count += increment;
                        if (count >= target) {
                            stat.textContent = stat.textContent.includes('+') ? 
                                target + '+' : 
                                stat.textContent.includes('%') ? 
                                target + '%' : 
                                target;
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(count);
                        }
                    }, 30);
                    
                    statsObserver.unobserve(stat);
                }
            }
        });
    }, {
        threshold: 0.5
    });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
    
    // Add hover effect to contact cards
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Don't create ripple for modal open buttons
            if (this.classList.contains('open-contact-modal')) return;
            
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.7);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                top: ${y}px;
                left: ${x}px;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Track social link clicks
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('click', function(e) {
            const platform = this.classList.contains('linkedin') ? 'LinkedIn' :
                            this.classList.contains('github') ? 'GitHub' :
                            this.classList.contains('instagram') ? 'Instagram' :
                            this.classList.contains('whatsapp') ? 'WhatsApp' :
                            this.classList.contains('email') ? 'Email' :
                            this.classList.contains('phone') ? 'Phone' : 'Social';
            
            console.log(`Social link clicked: ${platform} - ${this.href}`);
        });
    });
    
    // Also track contact card clicks
    document.querySelectorAll('.contact-value').forEach(link => {
        link.addEventListener('click', function() {
            console.log(`Contact link clicked: ${this.textContent}`);
        });
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .social-icon {
            position: relative;
            overflow: visible !important;
        }
        
        .social-icon::after {
            content: attr(title);
            position: absolute;
            bottom: -40px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.85);
            color: white;
            padding: 6px 12px;
            border-radius: 6px;
            font-size: 0.8rem;
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            pointer-events: none;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .social-icon:hover::after {
            opacity: 1;
            visibility: visible;
            bottom: -35px;
        }
        
        /* Animation for cards */
        .skill-category-card.animate-in,
        .expertise-card.animate-in,
        .stat-card.animate-in {
            animation: slideUp 0.8s ease forwards;
            opacity: 0;
            transform: translateY(30px);
        }
        
        @keyframes slideUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        /* Modal animations */
        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: translateY(-50px) scale(0.9);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        /* Prevent scrolling when modal is open */
        body.modal-open {
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
    
    // Initialize particle animation for background
    initParticles();
});

// Particle Animation for Background
function initParticles() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const particles = [];
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.color = `rgba(67, 97, 238, ${Math.random() * 0.3})`;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            else if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            else if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    function init() {
        for (let i = 0; i < 50; i++) {
            particles.push(new Particle());
        }
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            // Connect particles with lines
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(67, 97, 238, ${0.1 * (1 - distance / 100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animateParticles);
    }
    
    init();
    animateParticles();
}
