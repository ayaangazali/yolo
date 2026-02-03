// Test credentials
const TEST_USERS = [
    { email: 'test@yolo.com', password: 'test123', name: 'Test User' },
    { email: 'demo@yolo.com', password: 'demo123', name: 'Demo User' }
];

// Handle Login
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Check against test users
    const user = TEST_USERS.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Store user session
        localStorage.setItem('yolo_user', JSON.stringify({
            email: user.email,
            name: user.name,
            loggedIn: true
        }));
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid email or password. Please try the test credentials:\n\nEmail: test@yolo.com\nPassword: test123');
    }
}

// Handle Google Login
function handleGoogleLogin() {
    alert('Google login would connect here. For now, use test credentials:\n\nEmail: test@yolo.com\nPassword: test123');
}

// Show Signup (for now just alerts)
function showSignup() {
    alert('Signup page coming soon! For now, use test login:\n\nEmail: test@yolo.com\nPassword: test123');
}

// Check if already logged in
if (localStorage.getItem('yolo_user')) {
    const currentPage = window.location.pathname;
    if (currentPage.includes('login.html')) {
        window.location.href = 'dashboard.html';
    }
}
