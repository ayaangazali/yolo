// Typing animation for input placeholder
const typingInput = document.getElementById('typing-input');
const phrases = [
    "NFL Super Bowl halftime ad...",
    "Create a Chiefs playoff hype video...",
    "Build a Super Bowl beer commercial...",
    "Generate a sports car Super Bowl ad...",
    "Make an NFL team merchandise campaign...",
    "Create an epic game day commercial...",
    "Build a Super Bowl snack food ad..."
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

// Simple button logging (no auth/routing for now)
document.querySelectorAll('button').forEach(button => {
    if (!button.hasAttribute('data-listener')) {
        button.setAttribute('data-listener', 'true');
        button.addEventListener('click', function(e) {
            console.log('Button clicked:', this.textContent);
        });
    }
});
