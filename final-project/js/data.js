/* ===================================================
   Editkaro.in - Portfolio & Team Data
   Replace thumbnails and links with the client's real
   video content and YouTube/Instagram links.
   =================================================== */

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
        category: 'short-form',
        categoryLabel: 'Short-Form',
        title: 'TikTok Trend Edit',
        desc: 'Trend-driven short clip optimized for maximum reach and shares.',
        thumb: 'https://images.unsplash.com/photo-1622618760546-8e443f8a909e?w=600&h=400&fit=crop',
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
        category: 'long-form',
        categoryLabel: 'Long-Form',
        title: 'Podcast Highlight Reel',
        desc: 'Engaging long-form podcast edit with dynamic captions and pacing.',
        thumb: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&h=400&fit=crop',
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
        category: 'gaming',
        categoryLabel: 'Gaming',
        title: 'Stream Highlights',
        desc: 'Best moments compiled from live streams with engaging overlays.',
        thumb: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=400&fit=crop',
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
        category: 'football',
        categoryLabel: 'Football Edits',
        title: 'Player Tribute',
        desc: 'Emotional tribute edit celebrating a legendary footballer\'s career.',
        thumb: 'https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=600&h=400&fit=crop',
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
        category: 'ecommerce',
        categoryLabel: 'eCommerce Ads',
        title: 'Fashion Promo',
        desc: 'Stylish promo video built to showcase apparel and drive sales.',
        thumb: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop',
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
        category: 'documentary',
        categoryLabel: 'Documentary',
        title: 'Travel Documentary',
        desc: 'A cinematic journey through breathtaking landscapes and cultures.',
        thumb: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=400&fit=crop',
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
        category: 'color-grading',
        categoryLabel: 'Color Grading',
        title: 'Moody Film Look',
        desc: 'Rich, teal-and-orange grade creating a dramatic cinematic atmosphere.',
        thumb: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=400&fit=crop',
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
        category: 'anime',
        categoryLabel: 'Anime',
        title: 'Anime Edit Montage',
        desc: 'High-impact anime montage with glowing effects and seamless transitions.',
        thumb: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&h=400&fit=crop',
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
        category: 'ads',
        categoryLabel: 'Ads',
        title: 'App Promo Ad',
        desc: 'Sleek app promotion ad designed to drive downloads and sign-ups.',
        thumb: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
        link: 'https://www.youtube.com/watch?v=5O0YDHiosD0'
    }
];

// Team members (placeholder data with random names & avatars)
const teamMembers = [
    {
        name: 'Aarav Sharma',
        role: 'Founder & Lead Editor',
        img: 'https://i.pravatar.cc/200?img=12'
    },
    {
        name: 'Priya Patel',
        role: 'Creative Director',
        img: 'https://i.pravatar.cc/200?img=45'
    },
    {
        name: 'Rohan Mehta',
        role: 'Motion Graphics Artist',
        img: 'https://i.pravatar.cc/200?img=33'
    },
    {
        name: 'Sneha Reddy',
        role: 'Social Media Manager',
        img: 'https://i.pravatar.cc/200?img=47'
    },
    {
        name: 'Vikram Singh',
        role: 'Color Grading Specialist',
        img: 'https://i.pravatar.cc/200?img=15'
    },
    {
        name: 'Ananya Iyer',
        role: 'Content Strategist',
        img: 'https://i.pravatar.cc/200?img=44'
    }
];
