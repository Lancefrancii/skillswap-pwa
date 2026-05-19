// global.js — Shared mock data and state for SkillSwap PH
// Contains ALL required functions for the PWA

window.SkillSwap = window.SkillSwap || {};

// ============================================
// MOCK DATA (replace with real API later)
// ============================================

// Current logged in user
SkillSwap.currentUser = {
    id: 1,
    username: 'JohnDoe',
    email: 'john@skillswap.com',
    avatar: 'JD',
    rating: 4.8,
    exchanges: 5,
    skills_count: 4,
    member_since: 'Jan 2024',
    location: 'Metro Manila',
    bio: 'Passionate web developer and lifelong learner.',
    role: 'admin'
};

// User's skills (what they offer and what they need)
SkillSwap.userSkills = {
    offer: [
        { id: 1, name: 'Web Development', category: 'IT & Programming', level: 'advanced', icon: '💻', color: '#dbeafe' },
        { id: 2, name: 'React / Next.js', category: 'IT & Programming', level: 'intermediate', icon: '⚛️', color: '#dbeafe' }
    ],
    need: [
        { id: 9, name: 'Graphic Design', category: 'Creative Design', level: 'beginner', icon: '🖌️', color: '#f3e8ff' }
    ]
};

// All available skills (for browsing)
SkillSwap.allSkills = [
    { id: 1, name: 'Web Development', category: 'IT & Programming', icon: '💻', color: '#dbeafe' },
    { id: 2, name: 'React / Next.js', category: 'IT & Programming', icon: '⚛️', color: '#dbeafe' },
    { id: 3, name: 'Python', category: 'IT & Programming', icon: '🐍', color: '#dbeafe' },
    { id: 4, name: 'Data Science', category: 'IT & Programming', icon: '📊', color: '#dbeafe' },
    { id: 5, name: 'Machine Learning', category: 'IT & Programming', icon: '🤖', color: '#dbeafe' },
    { id: 6, name: 'Mobile Dev', category: 'IT & Programming', icon: '📱', color: '#dbeafe' },
    { id: 7, name: 'UI/UX Design', category: 'IT & Programming', icon: '🎨', color: '#dbeafe' },
    { id: 8, name: 'Cybersecurity', category: 'IT & Programming', icon: '🔒', color: '#dbeafe' },
    { id: 9, name: 'Graphic Design', category: 'Creative Design', icon: '🖌️', color: '#f3e8ff' },
    { id: 10, name: 'Video Editing', category: 'Creative Design', icon: '🎬', color: '#f3e8ff' },
    { id: 11, name: 'Photography', category: 'Creative Design', icon: '📷', color: '#f3e8ff' },
    { id: 12, name: 'Illustration', category: 'Creative Design', icon: '✏️', color: '#f3e8ff' },
    { id: 13, name: 'Mathematics', category: 'Academic Tutoring', icon: '📐', color: '#fef9c3' },
    { id: 14, name: 'Physics', category: 'Academic Tutoring', icon: '⚡', color: '#fef9c3' },
    { id: 15, name: 'Chemistry', category: 'Academic Tutoring', icon: '🧪', color: '#fef9c3' },
    { id: 16, name: 'English Writing', category: 'Academic Tutoring', icon: '✍️', color: '#fef9c3' },
    { id: 17, name: 'Filipino Language', category: 'Academic Tutoring', icon: '🇵🇭', color: '#fef9c3' },
    { id: 18, name: 'Fitness Training', category: 'Fitness / Lifestyle', icon: '💪', color: '#dcfce7' },
    { id: 19, name: 'Yoga', category: 'Fitness / Lifestyle', icon: '🧘', color: '#dcfce7' },
    { id: 20, name: 'Cooking', category: 'Fitness / Lifestyle', icon: '🍳', color: '#dcfce7' },
    { id: 21, name: 'Nutrition', category: 'Fitness / Lifestyle', icon: '🥗', color: '#dcfce7' },
    { id: 22, name: 'Public Speaking', category: 'Others', icon: '🎤', color: '#fce7f3' },
    { id: 23, name: 'Music (Guitar)', category: 'Others', icon: '🎸', color: '#fce7f3' },
    { id: 24, name: 'Music (Piano)', category: 'Others', icon: '🎹', color: '#fce7f3' },
    { id: 25, name: 'Business Planning', category: 'Others', icon: '💼', color: '#fce7f3' }
];

// Matches (ML recommended matches)
SkillSwap.matches = [
    { id: 1, name: 'Maria Santos', initials: 'MS', rating: 4.8, match_score: 92, offers: ['Web Development', 'React'], needs: ['Graphic Design', 'UI/UX'], location: 'Online', availability: 'Weekends' },
    { id: 2, name: 'Carlo Reyes', initials: 'CR', rating: 4.5, match_score: 87, offers: ['Graphic Design', 'Illustration'], needs: ['Python', 'Data Analysis'], location: 'NCR', availability: 'Weekdays' },
    { id: 3, name: 'Ana Lim', initials: 'AL', rating: 5.0, match_score: 85, offers: ['UI/UX', 'Figma'], needs: ['Web Development', 'Node.js'], location: 'Online', availability: 'Flexible' },
    { id: 4, name: 'Jose Dela Cruz', initials: 'JD', rating: 4.2, match_score: 81, offers: ['Python', 'Machine Learning'], needs: ['React', 'Web Dev'], location: 'Cebu', availability: 'Weekends' },
    { id: 5, name: 'Kim Villanueva', initials: 'KV', rating: 4.7, match_score: 78, offers: ['Video Editing', 'Photography'], needs: ['Graphic Design'], location: 'Online', availability: 'Flexible' },
    { id: 6, name: 'Rina Torres', initials: 'RT', rating: 4.4, match_score: 74, offers: ['Mathematics', 'Physics'], needs: ['Video Editing', 'Photography'], location: 'Davao', availability: 'Weekdays' }
];

// User's exchanges
SkillSwap.exchanges = [
    { id: 1, with_user: 'Maria Santos', skill: 'Web Development', status: 'pending', date: 'May 2, 2026', time: '2:00 PM', mode: 'Online', initials: 'MS' },
    { id: 2, with_user: 'Carlo Reyes', skill: 'Graphic Design', status: 'accepted', date: 'May 5, 2026', time: '10:00 AM', mode: 'On-site', initials: 'CR' },
    { id: 3, with_user: 'Ana Lim', skill: 'UI/UX Design', status: 'completed', date: 'Apr 28, 2026', time: '1:00 PM', mode: 'Online', initials: 'AL' }
];

// Messages
SkillSwap.messages = [
    { id: 1, from: 'Maria Santos', initials: 'MS', preview: 'Hey! Are you available this weekend?', time: '2 hours ago', unread: true },
    { id: 2, from: 'Carlo Reyes', initials: 'CR', preview: 'Thanks for the session yesterday!', time: 'Yesterday', unread: true },
    { id: 3, from: 'Ana Lim', initials: 'AL', preview: 'Can we reschedule to Thursday?', time: '2 days ago', unread: false }
];

// Featured profiles
SkillSwap.featured = [
    { id: 1, name: 'Marco Bautista', initials: 'MB', experience: 'Intermediate', rating: 4.8, reviews: 24, skills: ['React', 'Node.js', 'UI/UX'], portfolio: 3 },
    { id: 2, name: 'Sofia Dela Rosa', initials: 'SR', experience: 'Advanced', rating: 4.9, reviews: 31, skills: ['Python', 'Data Science', 'ML'], portfolio: 5 },
    { id: 3, name: 'Luis Fernandez', initials: 'LF', experience: 'Beginner', rating: 4.2, reviews: 8, skills: ['Photoshop', 'Illustrator'], portfolio: 2 },
    { id: 4, name: 'Grace Aquino', initials: 'GA', experience: 'Intermediate', rating: 4.6, reviews: 17, skills: ['Math', 'Physics', 'Chemistry'], portfolio: 0 }
];

// Upcoming sessions
SkillSwap.sessions = [
    { date: 'May 2, 2026', time: '2:00 PM – 3:30 PM', skill: 'Web Development', with: 'Maria Santos', mode: 'Online' },
    { date: 'May 5, 2026', time: '10:00 AM – 11:00 AM', skill: 'Graphic Design', with: 'Carlo Reyes', mode: 'On-site' }
];

// Reviews
SkillSwap.reviews = [
    { from: 'Maria Santos', initials: 'MS', rating: 5, text: 'Great experience! Very knowledgeable and patient teacher.', time: '2 days ago' },
    { from: 'Carlo Reyes', initials: 'CR', rating: 5, text: 'Super helpful and flexible with schedule.', time: '5 days ago' },
    { from: 'Ana Lim', initials: 'AL', rating: 4, text: 'Very skilled and professional.', time: '1 week ago' }
];

// Categories
SkillSwap.categories = [
    { name: 'All Skills', key: 'all', count: 120 },
    { name: 'IT & Programming', key: 'it', count: 45 },
    { name: 'Creative Design', key: 'design', count: 22 },
    { name: 'Academic Tutoring', key: 'academic', count: 28 },
    { name: 'Fitness / Lifestyle', key: 'fitness', count: 14 },
    { name: 'Others', key: 'others', count: 11 }
];

// ============================================
// REQUIRED FUNCTIONS
// ============================================

// 1. FUNCTION TO FETCH AND DISPLAY USER PROFILE
SkillSwap.fetchUserProfile = function () {
    return new Promise((resolve) => {
        setTimeout(() => {
            const user = SkillSwap.currentUser;
            const welcomeName = document.getElementById('welcomeName');
            if (welcomeName) welcomeName.textContent = `Welcome back, ${user.username}!`;
            const userAvatar = document.getElementById('userAvatar');
            if (userAvatar) userAvatar.textContent = user.avatar;
            const statExchanges = document.getElementById('statExchanges');
            if (statExchanges) statExchanges.textContent = user.exchanges;
            const statSkills = document.getElementById('statSkills');
            if (statSkills) statSkills.textContent = user.skills_count;
            const statRating = document.getElementById('statRating');
            if (statRating) statRating.textContent = user.rating;
            resolve(user);
        }, 300);
    });
};

// 2. FUNCTION TO FETCH AND DISPLAY SKILLS LIST
SkillSwap.fetchSkillsList = function () {
    return new Promise((resolve) => {
        setTimeout(() => {
            const skills = SkillSwap.allSkills;
            const skillsListEl = document.getElementById('allSkillsList');
            if (skillsListEl) {
                skillsListEl.innerHTML = skills.map(skill => `
                    <div class="skill-item" data-id="${skill.id}">
                        <span class="skill-icon">${skill.icon}</span>
                        <span class="skill-name">${skill.name}</span>
                        <span class="skill-category">${skill.category}</span>
                        <button onclick="SkillSwap.addUserSkill(${skill.id})" class="btn-add-skill">+ Add</button>
                    </div>
                `).join('');
            }
            resolve(skills);
        }, 300);
    });
};

// 3. FUNCTION TO ADD SKILL TO USER PROFILE
SkillSwap.addUserSkill = function (skillId, type = 'offer', level = 'beginner') {
    return new Promise((resolve, reject) => {
        const skill = SkillSwap.allSkills.find(s => s.id === skillId);
        if (!skill) {
            reject('Skill not found');
            return;
        }
        if (SkillSwap.userSkills[type].find(s => s.id === skillId)) {
            SkillSwap.showToast('⚠️ Skill already in your list!');
            reject('Skill already exists');
            return;
        }
        setTimeout(() => {
            const newSkill = { ...skill, level: level };
            SkillSwap.userSkills[type].push(newSkill);
            localStorage.setItem('userSkills', JSON.stringify(SkillSwap.userSkills));
            SkillSwap.showToast(`✅ "${skill.name}" added to your ${type === 'offer' ? 'Offering' : 'Learning'} skills!`);
            resolve(newSkill);
        }, 500);
    });
};

// 4. FUNCTION TO REMOVE SKILL FROM USER PROFILE
SkillSwap.removeUserSkill = function (skillId, type) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const skill = SkillSwap.userSkills[type].find(s => s.id === skillId);
            SkillSwap.userSkills[type] = SkillSwap.userSkills[type].filter(s => s.id !== skillId);
            localStorage.setItem('userSkills', JSON.stringify(SkillSwap.userSkills));
            SkillSwap.showToast(`🗑️ "${skill?.name || 'Skill'}" removed from your ${type === 'offer' ? 'Offering' : 'Learning'} skills!`);
            resolve(true);
        }, 500);
    });
};

// 5. FUNCTION TO FETCH AND DISPLAY MATCHES
SkillSwap.fetchMatches = function () {
    return new Promise((resolve) => {
        setTimeout(() => {
            const matches = SkillSwap.matches;
            const matchesContainer = document.getElementById('matchesList');
            if (matchesContainer) {
                matchesContainer.innerHTML = matches.map(match => `
                    <div class="match-card" data-id="${match.id}">
                        <div class="match-header">
                            <div class="match-avatar">${match.initials}</div>
                            <div class="match-info">
                                <h4>${match.name}</h4>
                                <div class="match-rating">⭐ ${match.rating}</div>
                            </div>
                            <div class="match-score">${match.match_score}% Match</div>
                        </div>
                        <div class="match-details">
                            <span>📌 ${match.location}</span>
                            <span>⏰ ${match.availability}</span>
                        </div>
                        <div class="match-skills">
                            <div><strong>Offers:</strong> ${match.offers.join(', ')}</div>
                            <div><strong>Needs:</strong> ${match.needs.join(', ')}</div>
                        </div>
                        <button onclick="SkillSwap.createExchangeRequest(${match.id}, '${match.name}')" class="btn-connect">Connect</button>
                    </div>
                `).join('');
            }
            resolve(matches);
        }, 300);
    });
};

// 6. FUNCTION TO CREATE EXCHANGE REQUEST
SkillSwap.createExchangeRequest = function (targetUserId, userName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newExchange = {
                id: SkillSwap.exchanges.length + 1,
                with_user: userName,
                skill: 'Pending Skill',
                status: 'pending',
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
                mode: 'Online',
                initials: userName.charAt(0) + (userName.split(' ')[1]?.charAt(0) || userName.charAt(1) || 'U')
            };
            SkillSwap.exchanges.push(newExchange);
            localStorage.setItem('exchanges', JSON.stringify(SkillSwap.exchanges));
            SkillSwap.showToast(`✅ Exchange request sent to ${userName}!`);
            const badge = document.getElementById('notifBadge');
            if (badge) {
                badge.textContent = parseInt(badge.textContent) + 1;
            }
            resolve(newExchange);
        }, 500);
    });
};

// 7. FUNCTION TO FETCH AND DISPLAY EXCHANGES
SkillSwap.fetchExchanges = function () {
    return new Promise((resolve) => {
        setTimeout(() => {
            const exchanges = SkillSwap.exchanges;
            const exchangesContainer = document.getElementById('exchangesList');
            if (exchangesContainer) {
                exchangesContainer.innerHTML = exchanges.map(exchange => `
                    <div class="exchange-card" data-id="${exchange.id}">
                        <div class="exchange-header">
                            <div class="exchange-avatar">${exchange.initials}</div>
                            <div class="exchange-info">
                                <h4>${exchange.with_user}</h4>
                                <p>${exchange.skill}</p>
                                <small>📅 ${exchange.date} • ⏰ ${exchange.time}</small>
                            </div>
                            <span class="exchange-status status-${exchange.status}">${exchange.status}</span>
                        </div>
                        <div class="exchange-actions">
                            ${exchange.status === 'pending' ? `
                                <button onclick="SkillSwap.updateExchangeStatus(${exchange.id}, 'accepted')" class="btn-accept">Accept</button>
                                <button onclick="SkillSwap.updateExchangeStatus(${exchange.id}, 'cancelled')" class="btn-cancel">Cancel</button>
                            ` : ''}
                            ${exchange.status === 'accepted' ? `
                                <button onclick="SkillSwap.updateExchangeStatus(${exchange.id}, 'completed')" class="btn-complete">Mark Complete</button>
                            ` : ''}
                        </div>
                    </div>
                `).join('');
            }
            resolve(exchanges);
        }, 300);
    });
};

// 8. FUNCTION TO UPDATE EXCHANGE STATUS
SkillSwap.updateExchangeStatus = function (exchangeId, newStatus) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const exchange = SkillSwap.exchanges.find(e => e.id === exchangeId);
            if (exchange) {
                exchange.status = newStatus;
                localStorage.setItem('exchanges', JSON.stringify(SkillSwap.exchanges));
                SkillSwap.showToast(`✅ Exchange ${newStatus}!`);
                resolve(exchange);
            } else {
                resolve(null);
            }
        }, 500);
    });
};

// ============================================
// HELPER FUNCTIONS
// ============================================

// Toast notification
SkillSwap.showToast = function (msg, duration = 3000) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
};

// Update user avatar in the top nav
SkillSwap.updateUserAvatar = function () {
    const avatarEl = document.getElementById('userAvatar');
    if (avatarEl && SkillSwap.currentUser) {
        avatarEl.textContent = SkillSwap.currentUser.avatar;
    }
};

// Update stats in dashboard
SkillSwap.updateStats = function () {
    const exchangesEl = document.getElementById('statExchanges');
    const skillsEl = document.getElementById('statSkills');
    const ratingEl = document.getElementById('statRating');
    if (exchangesEl) exchangesEl.textContent = SkillSwap.currentUser.exchanges;
    if (skillsEl) skillsEl.textContent = SkillSwap.currentUser.skills_count;
    if (ratingEl) ratingEl.textContent = SkillSwap.currentUser.rating;
};

// Logout function
SkillSwap.logout = function () {
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('user_email');
    localStorage.removeItem('userSkills');
    localStorage.removeItem('exchanges');
    window.location.href = 'index.html';
};

// Initialize app data from localStorage
SkillSwap.initFromStorage = function () {
    const savedUserSkills = localStorage.getItem('userSkills');
    if (savedUserSkills) {
        SkillSwap.userSkills = JSON.parse(savedUserSkills);
    }
    const savedExchanges = localStorage.getItem('exchanges');
    if (savedExchanges) {
        SkillSwap.exchanges = JSON.parse(savedExchanges);
    }
};

// Save current state to localStorage
SkillSwap.saveToStorage = function () {
    localStorage.setItem('userSkills', JSON.stringify(SkillSwap.userSkills));
    localStorage.setItem('exchanges', JSON.stringify(SkillSwap.exchanges));
};

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    SkillSwap.initFromStorage();
    SkillSwap.updateUserAvatar();
    SkillSwap.updateStats();
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link, .sidebar a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });
});