// Typing animation for input placeholder
const typingInput = document.getElementById('typing-input');
const phrases = [
    "Build an Asian food restaurant business",
    "Create a fitness app for seniors",
    "Design a property management system",
    "Build a subscription tracking app",
    "Create an inventory management tool"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingInput.placeholder = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingInput.placeholder = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => { isDeleting = true; }, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// Start typing animation after page load
setTimeout(typeEffect, 500);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Button click handlers (placeholder for backend integration)
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        if (!this.getAttribute('type')) {
            console.log('Button clicked:', this.textContent);
            // Add your backend API calls here
        }
    });
});

// Auth button logic - redirect to login page
const authBtn = document.querySelector('.auth-btn');
const user = JSON.parse(localStorage.getItem('yolo_user'));

if (user && user.loggedIn) {
    authBtn.textContent = 'Dashboard';
    authBtn.addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });
} else {
    authBtn.textContent = 'Sign Up';
    authBtn.addEventListener('click', () => {
        window.location.href = 'login.html';
    });
}

// Redirect Build button and option buttons to login
document.querySelector('.hero-btn')?.addEventListener('click', () => {
    window.location.href = 'login.html';
});

document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        window.location.href = 'login.html';
    });
});
