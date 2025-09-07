// Contemporary Bold Design - JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality with bold animations
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (mobileMenuToggle && navList) {
        mobileMenuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            
            // Animate hamburger menu with bold colors
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (navList.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[0].style.background = 'var(--gradient-primary)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
                spans[2].style.background = 'var(--gradient-primary)';
            } else {
                spans[0].style.transform = 'none';
                spans[0].style.background = 'var(--gradient-primary)';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
                spans[2].style.background = 'var(--gradient-primary)';
            }
        });
    }

    // Smooth scrolling for navigation links with bold easing
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navList && navList.classList.contains('active')) {
                    navList.classList.remove('active');
                    const spans = mobileMenuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[0].style.background = 'var(--gradient-primary)';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                    spans[2].style.background = 'var(--gradient-primary)';
                }
            }
        });
    });

    // Enhanced contact form handling with bold feedback
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const service = formData.get('service');
            const message = formData.get('message');
            
            // Enhanced validation with bold messaging
            if (!name || !email) {
                showBoldNotification('Пожалуйста, заполните обязательные поля', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showBoldNotification('Пожалуйста, введите корректный email адрес', 'error');
                return;
            }
            
            if (name.length < 2) {
                showBoldNotification('Имя должно содержать минимум 2 символа', 'error');
                return;
            }
            
            // Simulate form submission with bold feedback
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.querySelector('span').textContent;
            submitButton.querySelector('span').textContent = 'Отправляется...';
            submitButton.disabled = true;
            submitButton.style.background = 'var(--gradient-accent)';
            
            // Simulate API call with bold success message
            setTimeout(() => {
                showBoldNotification('Отлично! Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время!', 'success');
                this.reset();
                submitButton.querySelector('span').textContent = originalText;
                submitButton.disabled = false;
                submitButton.style.background = 'var(--gradient-primary)';
            }, 2500);
        });
    }

    // Enhanced scroll animations with bold effects
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add bold glow effect for service cards
                if (entry.target.classList.contains('service-card')) {
                    entry.target.style.boxShadow = 'var(--shadow-xl)';
                    if (entry.target.classList.contains('featured')) {
                        entry.target.style.boxShadow = 'var(--shadow-glow)';
                    }
                }
                
                // Animate approach numbers
                if (entry.target.classList.contains('approach-item')) {
                    const number = entry.target.querySelector('.approach-number');
                    if (number) {
                        animateNumber(number);
                    }
                }
            }
        });
    }, observerOptions);

    // Observe elements for bold animations
    const animatedElements = document.querySelectorAll('.service-card, .highlight-item, .approach-item, .testimonial-card, .visual-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease, box-shadow 0.3s ease';
        observer.observe(el);
    });

    // Bold header scroll effect
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
    });

    // Enhanced service card hover effects with bold animations
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
            this.style.boxShadow = 'var(--shadow-xl)';
            
            if (this.classList.contains('featured')) {
                this.style.boxShadow = 'var(--shadow-glow)';
            }
            
            // Add bold glow to service icon
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'var(--shadow)';
            
            if (this.classList.contains('featured')) {
                this.style.boxShadow = 'var(--shadow-glow)';
            }
            
            // Reset icon
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    // Highlight item hover effects
    const highlightItems = document.querySelectorAll('.highlight-item');
    highlightItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = 'var(--shadow-lg)';
            
            const icon = this.querySelector('.highlight-icon');
            if (icon) {
                icon.style.transform = 'scale(1.3) rotate(10deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'var(--shadow)';
            
            const icon = this.querySelector('.highlight-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    // Testimonial card hover effects
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.01)';
            this.style.boxShadow = 'var(--shadow-lg)';
            
            const avatar = this.querySelector('.author-avatar');
            if (avatar) {
                avatar.style.transform = 'scale(1.1)';
                avatar.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'var(--shadow)';
            
            const avatar = this.querySelector('.author-avatar');
            if (avatar) {
                avatar.style.transform = 'scale(1)';
            }
        });
    });

    // Contact item hover effects
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = 'var(--shadow-lg)';
            
            const icon = this.querySelector('.contact-icon');
            if (icon) {
                icon.style.transform = 'scale(1.3) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'var(--shadow)';
            
            const icon = this.querySelector('.contact-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    // Bold floating animation for hero orbs
    const gradientOrbs = document.querySelectorAll('.gradient-orb');
    gradientOrbs.forEach((orb, index) => {
        // Add random floating variations
        const randomDelay = Math.random() * 3;
        const randomDuration = 6 + Math.random() * 4;
        orb.style.animationDelay = `-${randomDelay}s`;
        orb.style.animationDuration = `${randomDuration}s`;
    });

    // Animate hero stats on scroll
    const heroStats = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
            }
        });
    }, { threshold: 0.5 });

    heroStats.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Lazy loading for images (if any are added later)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                setTimeout(() => {
                    img.style.opacity = '1';
                }, 100);
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// Enhanced utility functions with bold messaging
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showBoldNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.bold-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create bold notification element
    const notification = document.createElement('div');
    notification.className = `bold-notification bold-notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">${type === 'success' ? '🚀' : type === 'error' ? '⚠️' : '💡'}</div>
            <div class="notification-message">${message}</div>
        </div>
    `;
    
    // Style the bold notification
    const colors = {
        success: { 
            bg: 'linear-gradient(135deg, #10b981, #059669)', 
            border: '#10b981',
            glow: '0 0 20px rgba(16, 185, 129, 0.3)'
        },
        error: { 
            bg: 'linear-gradient(135deg, #ef4444, #dc2626)', 
            border: '#ef4444',
            glow: '0 0 20px rgba(239, 68, 68, 0.3)'
        },
        info: { 
            bg: 'var(--gradient-primary)', 
            border: 'var(--primary-color)',
            glow: 'var(--shadow-glow)'
        }
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type].bg};
        color: white;
        padding: 20px;
        border-radius: 16px;
        box-shadow: ${colors[type].glow};
        z-index: 10000;
        font-weight: 600;
        max-width: 400px;
        transform: translateX(100%) scale(0.8);
        transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        border: 2px solid ${colors[type].border};
    `;
    
    // Style notification content
    const style = document.createElement('style');
    style.textContent = `
        .bold-notification .notification-content {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .bold-notification .notification-icon {
            font-size: 1.5rem;
        }
        .bold-notification .notification-message {
            flex: 1;
            line-height: 1.4;
            font-size: 14px;
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Animate in with bold bounce
    setTimeout(() => {
        notification.style.transform = 'translateX(0) scale(1)';
    }, 100);
    
    // Auto remove after 6 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%) scale(0.8)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
            if (style.parentNode) {
                style.parentNode.removeChild(style);
            }
        }, 400);
    }, 6000);
}

// Animate numbers with bold effect
function animateNumber(element) {
    const target = parseInt(element.textContent.replace(/\D/g, ''));
    const suffix = element.textContent.replace(/\d/g, '');
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 30);
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Scroll handling logic can be added here if needed
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Enhanced accessibility improvements
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const navList = document.querySelector('.nav-list');
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        
        if (navList && navList.classList.contains('active')) {
            navList.classList.remove('active');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[0].style.background = 'var(--gradient-primary)';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            spans[2].style.background = 'var(--gradient-primary)';
        }
    }
});

// Enhanced form validation with bold feedback
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ef4444';
            input.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
            isValid = false;
        } else {
            input.style.borderColor = 'var(--border-color)';
            input.style.boxShadow = 'none';
        }
    });
    
    return isValid;
}

// Add enhanced form validation to contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = '#ef4444';
                this.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
            } else {
                this.style.borderColor = 'var(--border-color)';
                this.style.boxShadow = 'none';
            }
        });
        
        input.addEventListener('input', function() {
            if (this.style.borderColor === 'rgb(239, 68, 68)') {
                this.style.borderColor = 'var(--border-color)';
                this.style.boxShadow = 'none';
            }
        });
        
        input.addEventListener('focus', function() {
            this.style.borderColor = 'var(--primary-color)';
            this.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)';
        });
    });
}

// Add bold typing effect for hero title
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect for hero title
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const originalText = heroTitle.textContent;
    setTimeout(() => {
        typeWriter(heroTitle, originalText, 100);
    }, 1000);
}

// Add parallax effect to hero orbs
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');
    
    orbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        orb.style.transform = `translateY(${yPos}px)`;
    });
});

// Add bold hover effects to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});
