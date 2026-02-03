// Check if user is logged in
const user = JSON.parse(localStorage.getItem('yolo_user'));

if (!user || !user.loggedIn) {
    // Redirect to login if not logged in
    window.location.href = 'login.html';
} else {
    // Display user info
    const userInfo = document.getElementById('userInfo');
    if (userInfo) {
        const avatar = user.name.charAt(0).toUpperCase();
        userInfo.innerHTML = `
            <div class="user-avatar">${avatar}</div>
            <div class="user-details">
                <div class="user-name">${user.name}</div>
                <div class="user-email">${user.email}</div>
            </div>
        `;
    }
}

// Handle Logout
function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('yolo_user');
        window.location.href = 'index.html';
    }
}

// Add click handlers for cards
document.querySelectorAll('.card-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('This feature is coming soon! YOLO will help you set up and manage your AI departments.');
    });
});

document.querySelector('.new-project-btn')?.addEventListener('click', function() {
    alert('New project creation coming soon! You\'ll be able to describe your business and YOLO will set up the departments automatically.');
});
