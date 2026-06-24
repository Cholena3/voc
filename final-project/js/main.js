/* ===================================================
   Editkaro.in - Main JavaScript
   Handles: nav toggle, portfolio rendering, filters,
   lightbox, team rendering, counters, scroll reveal.
   =================================================== */

// ===== Mobile Nav Toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
}

// ===== Lightbox =====
const lightbox = document.getElementById('lightbox');

function openLightbox(item) {
    if (!lightbox) return;
    document.getElementById('lightboxThumb').style.backgroundImage = `url('${item.thumb}')`;
    document.getElementById('lightboxCategory').textContent = item.categoryLabel;
    document.getElementById('lightboxTitle').textContent = item.title;
    document.getElementById('lightboxDesc').textContent = item.desc;
    document.getElementById('lightboxLink').href = item.link;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

if (lightbox) {
    document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });
}

// ===== Render Portfolio Items =====
function createPortfolioItem(item, index) {
    const el = document.createElement('div');
    el.className = 'portfolio-item';
    el.style.animationDelay = (index * 0.06) + 's';
    el.innerHTML = `
        <div class="thumb" style="background-image: url('${item.thumb}')"></div>
        <div class="play-icon"></div>
        <div class="overlay">
            <span class="item-category">${item.categoryLabel}</span>
            <span class="item-title">${item.title}</span>
        </div>
    `;
    el.addEventListener('click', () => openLightbox(item));
    return el;
}

// Full portfolio grid (portfolio page)
const portfolioGrid = document.getElementById('portfolioGrid');

function renderPortfolio(filter) {
    if (!portfolioGrid) return;
    portfolioGrid.innerHTML = '';
    const filtered = filter === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === filter);
    filtered.forEach((item, i) => portfolioGrid.appendChild(createPortfolioItem(item, i)));
}

// Filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderPortfolio(btn.dataset.filter);
    });
});

if (portfolioGrid) renderPortfolio('all');

// Featured grid (home page - show first 6)
const featuredGrid = document.getElementById('featuredGrid');
if (featuredGrid && typeof portfolioItems !== 'undefined') {
    portfolioItems.slice(0, 6).forEach((item, i) => {
        featuredGrid.appendChild(createPortfolioItem(item, i));
    });
}

// ===== Render Team =====
const teamGrid = document.getElementById('teamGrid');
if (teamGrid && typeof teamMembers !== 'undefined') {
    teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.className = 'team-card reveal';
        card.innerHTML = `
            <img src="${member.img}" alt="${member.name}" loading="lazy">
            <h3>${member.name}</h3>
            <div class="role">${member.role}</div>
            <div class="socials">
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="LinkedIn">💼</a>
                <a href="#" aria-label="Twitter">🐦</a>
            </div>
        `;
        teamGrid.appendChild(card);
    });
}

// ===== Animated Counters =====
const statNumbers = document.querySelectorAll('.stat-number');
let countersStarted = false;

function animateCounters() {
    statNumbers.forEach(stat => {
        const target = +stat.dataset.target;
        const stepTime = 20;
        const steps = 1500 / stepTime;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current);
            }
        }, stepTime);
    });
}

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersStarted) {
                countersStarted = true;
                animateCounters();
            }
        });
    }, { threshold: 0.3 });
    counterObserver.observe(heroStats);
}

// ===== Scroll Reveal =====
const revealElements = document.querySelectorAll('.reveal');
if (revealElements.length) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));

    // Re-observe dynamically added team cards
    setTimeout(() => {
        document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
    }, 100);
}
