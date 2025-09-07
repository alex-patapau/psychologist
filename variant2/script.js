// Warm Professional Design - JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality with warm animations
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (mobileMenuToggle && navList) {
        mobileMenuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            
            // Animate hamburger menu with warm colors
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (navList.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[0].style.backgroundColor = 'var(--accent-color)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
                spans[2].style.backgroundColor = 'var(--accent-color)';
            } else {
                spans[0].style.transform = 'none';
                spans[0].style.backgroundColor = 'var(--text-color)';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
                spans[2].style.backgroundColor = 'var(--text-color)';
            }
        });
    }

    // Smooth scrolling for navigation links with warm easing
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
                    spans[0].style.backgroundColor = 'var(--text-color)';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                    spans[2].style.backgroundColor = 'var(--text-color)';
                }
            }
        });
    });

    // Enhanced contact form handling with warm feedback
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const message = formData.get('message');
            
            // Enhanced validation with warm messaging
            if (!name || !email) {
                showWarmNotification('Пожалуйста, заполните обязательные поля', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showWarmNotification('Пожалуйста, введите корректный email адрес', 'error');
                return;
            }
            
            if (name.length < 2) {
                showWarmNotification('Имя должно содержать минимум 2 символа', 'error');
                return;
            }
            
            // Simulate form submission with warm feedback
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Отправляется...';
            submitButton.disabled = true;
            submitButton.style.background = 'linear-gradient(135deg, var(--warm-brown), var(--accent-color))';
            
            // Simulate API call with warm success message
            setTimeout(() => {
                showWarmNotification('Спасибо за ваше сообщение! Я обязательно свяжусь с вами в ближайшее время.', 'success');
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.style.background = 'linear-gradient(135deg, var(--accent-color), var(--secondary-color))';
            }, 2500);
        });
    }

    // Enhanced scroll animations with warm effects
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add warm glow effect for service cards
                if (entry.target.classList.contains('service-card')) {
                    entry.target.style.boxShadow = 'var(--shadow-hover)';
                    entry.target.style.borderColor = 'var(--accent-color)';
                }
            }
        });
    }, observerOptions);

    // Observe elements for warm animations
    const animatedElements = document.querySelectorAll('.service-card, .qualification-card, .approach-item, .testimonial-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease, box-shadow 0.3s ease, border-color 0.3s ease';
        observer.observe(el);
    });

    // Warm header scroll effect
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'linear-gradient(135deg, rgba(245, 245, 220, 0.95) 0%, rgba(255, 248, 220, 0.95) 100%)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.borderBottomColor = 'var(--accent-color)';
        } else {
            header.style.background = 'linear-gradient(135deg, var(--warm-cream) 0%, var(--warm-beige) 100%)';
            header.style.backdropFilter = 'none';
            header.style.borderBottomColor = 'var(--border-color)';
        }
        
        lastScrollY = currentScrollY;
    });

    // Enhanced service card hover effects with warm animations
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
            this.style.boxShadow = 'var(--shadow-hover)';
            this.style.borderColor = 'var(--accent-color)';
            
            // Add warm glow to service icon
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'var(--shadow)';
            this.style.borderColor = 'var(--border-color)';
            
            // Reset icon
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });

    // Qualification card hover effects
    const qualificationCards = document.querySelectorAll('.qualification-card');
    qualificationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.borderColor = 'var(--accent-color)';
            
            const icon = this.querySelector('.qualification-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.borderColor = 'var(--border-color)';
            
            const icon = this.querySelector('.qualification-icon');
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
            this.style.borderColor = 'var(--accent-color)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.borderColor = 'var(--border-color)';
        });
    });

    // Contact item hover effects
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.borderColor = 'var(--accent-color)';
            
            const icon = this.querySelector('.contact-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.borderColor = 'var(--border-color)';
            
            const icon = this.querySelector('.contact-icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });

    // Warm floating animation for hero circles
    const warmCircles = document.querySelectorAll('.warm-circle');
    warmCircles.forEach((circle, index) => {
        // Add random floating variations
        const randomDelay = Math.random() * 2;
        const randomDuration = 4 + Math.random() * 4;
        circle.style.animationDelay = `-${randomDelay}s`;
        circle.style.animationDuration = `${randomDuration}s`;
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

// Enhanced utility functions with warm messaging
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showWarmNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.warm-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create warm notification element
    const notification = document.createElement('div');
    notification.className = `warm-notification warm-notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">${type === 'success' ? '✨' : type === 'error' ? '💝' : '💬'}</div>
            <div class="notification-message">${message}</div>
        </div>
    `;
    
    // Style the warm notification
    const colors = {
        success: { bg: 'linear-gradient(135deg, #27ae60, #2ecc71)', border: '#27ae60' },
        error: { bg: 'linear-gradient(135deg, #e74c3c, #c0392b)', border: '#e74c3c' },
        info: { bg: 'linear-gradient(135deg, var(--accent-color), var(--secondary-color))', border: 'var(--accent-color)' }
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type].bg};
        color: white;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(139, 69, 19, 0.2);
        z-index: 10000;
        font-weight: 500;
        max-width: 400px;
        transform: translateX(100%);
        transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        border: 2px solid ${colors[type].border};
    `;
    
    // Style notification content
    const style = document.createElement('style');
    style.textContent = `
        .warm-notification .notification-content {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .warm-notification .notification-icon {
            font-size: 1.5rem;
        }
        .warm-notification .notification-message {
            flex: 1;
            line-height: 1.4;
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Animate in with warm bounce
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 6 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
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
            spans[0].style.backgroundColor = 'var(--text-color)';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            spans[2].style.backgroundColor = 'var(--text-color)';
        }
    }
});

// Enhanced form validation with warm feedback
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#e74c3c';
            input.style.boxShadow = '0 0 0 3px rgba(231, 76, 60, 0.1)';
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
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = '#e74c3c';
                this.style.boxShadow = '0 0 0 3px rgba(231, 76, 60, 0.1)';
            } else {
                this.style.borderColor = 'var(--border-color)';
                this.style.boxShadow = 'none';
            }
        });
        
        input.addEventListener('input', function() {
            if (this.style.borderColor === 'rgb(231, 76, 60)') {
                this.style.borderColor = 'var(--border-color)';
                this.style.boxShadow = 'none';
            }
        });
        
        input.addEventListener('focus', function() {
            this.style.borderColor = 'var(--accent-color)';
            this.style.boxShadow = '0 0 0 3px rgba(210, 105, 30, 0.1)';
        });
    });
}

// Add warm typing effect for hero subtitle
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

// Initialize typing effect for hero subtitle
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const originalText = heroSubtitle.textContent;
    setTimeout(() => {
        typeWriter(heroSubtitle, originalText, 80);
    }, 1000);
}
