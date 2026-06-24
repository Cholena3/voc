// ===== Portfolio Data =====
// Each item has a category matching the filter buttons, plus thumbnail, title,
// description and a sample video link. Swap the links with real Editkaro.in work.
const portfolioItems = [
    {
        category: 'short-form',
        categoryLabel: 'Short-Form',
        title: 'Viral Reel Edit',
        desc: 'A high-energy short-form reel designed to stop the scroll and boost engagement.',
        thumb: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop',
        link: 'https://www.youtube.com/watch?v=5O0YDHiosD0'
    },
    {
        category: 'long-form',
        categoryLabel: 'Long-Form',
        title: 'YouTube Feature',
        desc: 'A polished long-form video with seamless cuts, B-roll, and storytelling flow.',
        thumb: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop',
        link: 'https://www.youtube.com/watch?v=5O0YDHiosD0'
    },
    {
        category: 'gaming',
        categoryLabel: 'Gaming',
        title: 'Epic Gaming Montage',
        desc: 'Fast-paced gaming highlights with synced beats and dynamic transitions.',
        thumb: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop',
        link: 'https://www.youtube.com/watch?v=5O0YDHiosD0'
    },
    {
        category: 'football',
        categoryLabel: 'Football Edits',
        title: 'Goal of the Season',
        desc: 'Cinematic football edit capturing the intensity and emotion of the game.',
        thumb: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=400&fit=crop',
        link: 'https://www.youtube.com/watch?v=5O0YDHiosD0'
    },
    {
        category: 'ecommerce',
        categoryLabel: 'eCommerce Ads',
        title: 'Product Showcase Ad',
        desc: 'Conversion-focused eCommerce ad highlighting product features beautifully.',
        thumb: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
        link: 'https://www.youtube.com/watch?v=5O0YDHiosD0'
    },
    {
        category: 'documentary',
        categoryLabel: 'Documentary',
        title: 'Untold Story',
        desc: 'Documentary-style edit with narrative depth, mood, and cinematic pacing.',
        thumb: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop',
        link: 'https://www.youtube.com/watch?v=5O0YDHiosD0'
    },
    {
        category: 'color-grading',
        categoryLabel: 'Color Grading',
        title: 'Cinematic Color Grade',
        desc: 'Before/after color grading that transforms raw footage into film-grade visuals.',
        thumb: 'https://images.unsplash.com/photo-1502136969935-8d8eef54d77b?w=600&h=400&fit=crop',
        link: 'https://www.youtube.com/watch?v=5O0YDHiosD0'
    },
    {
        category: 'anime',
        categoryLabel: 'Anime',
        title: 'Anime AMV Edit',
        desc: 'Beat-synced anime music video with smooth effects and dramatic timing.',
        thumb: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&h=400&fit=crop',
        link: 'https://www.youtube.com/watch?v=5O0YDHiosD0'
    },
    {
        category: 'ads',
        categoryLabel: 'Ads',
        title: 'Brand Commercial',
        desc: 'Punchy brand advertisement crafted to deliver the message in seconds.',
        thumb: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop',
        link: 'https://www.youtube.com/watch?v=5O0YDHiosD0'
    },
    {
        category: 'short-form',
        categoryLabel: 'Short-Form',
        title: 'TikTok Trend Edit',
        desc: 'Trend-driven short clip optimized for maximum reach and shares.',
        thumb: 'https://images.unsplash.com/photo-1622618760546-8e443f8a909e?w=600&h=400&fit=crop',
        link: 'https://www.youtube.com/watch?v=5O0YDHiosD0'
    },
    {
        category: 'gaming',
        categoryLabel: 'Gaming',
        title: 'Stream Highlights',
        desc: 'Best moments compiled from live streams with engaging overlays.',
        thumb: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=400&fit=crop',
        link: 'https://www.youtube.com/watch?v=5O0YDHiosD0'
    },
    {
        category: 'ecommerce',
        categoryLabel: 'eCommerce Ads',
        title: 'Fashion Promo',
        desc: 'Stylish promo video built to showcase apparel and drive sales.',
        thumb: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop',
        link: 'https://www.youtube.com/watch?v=5O0YDHiosD0'
    }
];

// ===== Render Portfolio Items =====
const portfolioGrid = document.getElementById('portfolioGrid');

function renderItems(filter) {
    portfolioGrid.innerHTML = '';

    const filtered = filter === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === filter);

    filtered.forEach((item, index) => {
        const el = document.createElement('div');
        el.className = 'portfolio-item';
        el.style.animationDelay = (index * 0.07) + 's';
        el.innerHTML = `
            <div class="thumb" style="background-image: url('${item.thumb}')"></div>
            <div class="play-icon"></div>
            <div class="overlay">
                <span class="item-category">${item.categoryLabel}</span>
                <span class="item-title">${item.title}</span>
            </div>
        `;
        el.addEventListener('click', () => openLightbox(item));
        portfolioGrid.appendChild(el);
    });
}

// ===== Filter Logic =====
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderItems(btn.dataset.filter);
    });
});

// ===== Lightbox =====
const lightbox = document.getElementById('lightbox');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxThumb = document.getElementById('lightboxThumb');
const lightboxCategory = document.getElementById('lightboxCategory');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDesc = document.getElementById('lightboxDesc');
const lightboxLink = document.getElementById('lightboxLink');

function openLightbox(item) {
    lightboxThumb.style.backgroundImage = `url('${item.thumb}')`;
    lightboxCategory.textContent = item.categoryLabel;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.desc;
    lightboxLink.href = item.link;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

// ===== Mobile Nav Toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== Animated Counter Stats =====
const statNumbers = document.querySelectorAll('.stat-number');
let countersStarted = false;

function animateCounters() {
    statNumbers.forEach(stat => {
        const target = +stat.dataset.target;
        const duration = 1500;
        const stepTime = 20;
        const steps = duration / stepTime;
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

// Trigger counters when hero is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
            countersStarted = true;
            animateCounters();
        }
    });
}, { threshold: 0.3 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) heroObserver.observe(heroStats);

// ===== Initial Render =====
renderItems('all');
