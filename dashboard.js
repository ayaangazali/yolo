// Check if user is logged in
const user = JSON.parse(localStorage.getItem('yolo_user'));

if (!user || !user.loggedIn) {
    window.location.href = 'login.html';
} else {
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

// Department data with icons and descriptions
const departmentData = {
    'finance': { icon: '💰', name: 'Finance', agents: 8, description: 'Automate taxes, expenses, and financial workflows' },
    'hr': { icon: '👥', name: 'HR', agents: 6, description: 'Manage hiring, onboarding, and team operations' },
    'legal': { icon: '⚖️', name: 'Legal', agents: 5, description: 'Handle contracts, compliance, and legal workflows' },
    'it': { icon: '💻', name: 'IT', agents: 12, description: 'Manage infrastructure and technical operations' },
    'marketing': { icon: '📢', name: 'Marketing', agents: 9, description: 'Automate lead generation and content creation' },
    'logistics': { icon: '📦', name: 'Logistics', agents: 7, description: 'Manage supply chain and delivery operations' },
    'customer-service': { icon: '💬', name: 'Customer Service', agents: 10, description: 'Handle customer support and satisfaction' },
    'sales': { icon: '🤝', name: 'Sales', agents: 8, description: 'Manage sales pipeline and customer acquisition' },
    'operations': { icon: '⚙️', name: 'Operations', agents: 6, description: 'Streamline business operations and processes' },
    'research': { icon: '🔬', name: 'Research', agents: 4, description: 'Conduct market research and analysis' }
};

// Default departments
const defaultDepartments = ['finance', 'hr', 'legal', 'it', 'marketing', 'logistics', 'customer-service'];

// Get departments from localStorage or use defaults
function getDepartments() {
    const stored = localStorage.getItem('yolo_departments');
    return stored ? JSON.parse(stored) : [...defaultDepartments];
}

// Save departments to localStorage
function saveDepartments(departments) {
    localStorage.setItem('yolo_departments', JSON.stringify(departments));
}

// Generate category cards
function renderCategoryCards() {
    const categoryGrid = document.getElementById('categoryGrid');
    const departments = getDepartments();
    
    categoryGrid.innerHTML = '';
    
    departments.forEach(dept => {
        const data = departmentData[dept] || {
            icon: '📁',
            name: dept.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
            agents: Math.floor(Math.random() * 10) + 1,
            description: 'Custom department'
        };
        
        const card = document.createElement('div');
        card.className = 'category-card';
        card.setAttribute('data-department', dept);
        card.innerHTML = `
            <div class="category-icon">${data.icon}</div>
            <div class="category-name">${data.name}</div>
            <div class="category-count">${data.agents} Agents</div>
        `;
        
        card.addEventListener('click', () => {
            alert(`Opening ${data.name} department...\nThis will show ${data.agents} AI agents ready to ${data.description.toLowerCase()}`);
        });
        
        categoryGrid.appendChild(card);
    });
}

// Initialize category cards
renderCategoryCards();

// Hamburger menu toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sidebar = document.getElementById('sidebar');

hamburgerBtn.addEventListener('click', function() {
    sidebar.classList.toggle('collapsed');
    localStorage.setItem('yolo_sidebar_collapsed', sidebar.classList.contains('collapsed'));
});

// Restore sidebar state
const sidebarCollapsed = localStorage.getItem('yolo_sidebar_collapsed') === 'true';
if (sidebarCollapsed) {
    sidebar.classList.add('collapsed');
}

// Navigation click handlers
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active from all
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        // Add active to clicked
        this.classList.add('active');
        
        const page = this.getAttribute('data-page');
        
        if (page === 'home') {
            // Already on home
            return;
        }
        
        alert(`${page.charAt(0).toUpperCase() + page.slice(1)} page coming soon!`);
    });
});

// Show more button
document.getElementById('showMoreBtn')?.addEventListener('click', function() {
    alert('More departments can be added through the New Project button!');
});

// Glassmorphism input handler
const userInput = document.getElementById('userInput');
const submitInput = document.getElementById('submitInput');

function handleUserInput() {
    const text = userInput.value.trim();
    
    if (!text) {
        return;
    }
    
    // Store in localStorage for now
    const history = JSON.parse(localStorage.getItem('yolo_input_history') || '[]');
    history.push({
        text: text,
        timestamp: new Date().toISOString(),
        type: text.includes('?') ? 'question' : 'feedback'
    });
    localStorage.setItem('yolo_input_history', JSON.stringify(history));
    
    // Show response
    if (text.includes('?')) {
        alert(`Thanks for your question! YOLO AI will process: "${text}"\n\nThis feature is coming soon!`);
    } else {
        alert(`Thanks for your feedback: "${text}"\n\nWe appreciate your input!`);
    }
    
    userInput.value = '';
}

submitInput?.addEventListener('click', handleUserInput);
userInput?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});

// Handle Logout
function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('yolo_user');
        window.location.href = 'index.html';
    }
}

// New project button
document.querySelector('.new-project-btn')?.addEventListener('click', function() {
    alert('New project creation coming soon! You\'ll be able to describe your business and YOLO will set up the departments automatically.');
});
