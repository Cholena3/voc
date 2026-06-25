# Editkaro.in — Complete Website (Final Major Project)

A fully responsive, multi-page website for **Editkaro.in**, a social media marketing and video editing agency. Built with HTML, CSS, and vanilla JavaScript.

## 🔗 Live Demo

**Live site:** [https://cholena3.github.io/voc/final-project/](https://cholena3.github.io/voc/final-project/)

- Home: https://cholena3.github.io/voc/final-project/
- Portfolio: https://cholena3.github.io/voc/final-project/portfolio.html
- About Us: https://cholena3.github.io/voc/final-project/about.html
- Contact: https://cholena3.github.io/voc/final-project/contact.html

## 📁 Project Structure

```
final-project/
├── index.html              # Home page (hero, services, featured work, email collector)
├── portfolio.html          # Portfolio with category filters + video lightbox
├── about.html              # Mission, vision, and team
├── contact.html            # Contact form
├── css/
│   └── styles.css          # Shared stylesheet (design system + responsive)
├── js/
│   ├── data.js             # Portfolio & team data
│   ├── main.js             # Nav, rendering, filters, lightbox, counters, scroll reveal
│   └── forms.js            # Email + contact form handling (Google Sheets)
├── google-apps-script.gs   # Backend script for storing form data in Google Sheets
├── robots.txt              # SEO
├── sitemap.xml             # SEO
└── README.md
```

## ✨ Features

### Home Page
- Animated hero with gradient text and counting stats
- Services overview
- Featured work preview (links to full portfolio)
- **Email subscription form** → stores emails in Google Sheets

### Portfolio Page
- All 9 client categories: Short-Form, Long-Form, Gaming, Football Edits, eCommerce Ads, Documentary, Color Grading, Anime, Ads
- Filter buttons to sort by category
- Hover effects + click-to-open **video lightbox** with details and watch link

### About Us Page
- Company story, mission, and vision
- **Team section** with placeholder names and avatars

### Contact Page
- **Contact form** (name, email, phone, message) → stores submissions in Google Sheets
- Company contact details

### Across the site
- Fully responsive (mobile, tablet, desktop) with a hamburger menu
- SEO best practices: meta descriptions, keywords, Open Graph tags, canonical URLs, robots.txt, sitemap.xml
- Performance: lazy-loaded images, preconnect to fonts, minimal dependencies (no frameworks)

## 🔧 Google Sheets Integration (Email Collector & Contact Form)

Both forms send data to a Google Apps Script Web App that writes to a Google Sheet.

**Setup:**
1. Create a Google Sheet with two tabs: `Subscribers` and `Contacts`.
2. Open **Extensions → Apps Script**, paste the contents of `google-apps-script.gs`.
3. **Deploy → New deployment → Web app**, execute as *Me*, access *Anyone*.
4. Copy the Web App URL and paste it into `js/forms.js` as `GOOGLE_SCRIPT_URL`.

> Until a URL is configured, submissions fall back to `localStorage` so the forms stay functional for demos and testing.

## 🚀 Deployment

**GitHub Pages:** Settings → Pages → select branch → `/final-project` or root.

**Netlify / Vercel:** Drag-and-drop the `final-project` folder, or connect the repo and set the publish directory.

## 🛠️ Customization

- **Replace portfolio videos:** edit the `portfolioItems` array in `js/data.js` (thumbnails + YouTube/Instagram links).
- **Replace team members:** edit the `teamMembers` array in `js/data.js`.
- **Brand colors:** adjust the CSS variables at the top of `css/styles.css`.

## 📝 Report: Changes, Challenges & Solutions

**Changes made**
- Built a complete 4-page site from the single-page portfolio concept.
- Added an email collector and a contact form wired to Google Sheets.
- Implemented category filtering, a video lightbox, animated counters, and scroll-reveal effects.
- Added SEO meta tags, sitemap, and robots.txt.

**Challenges & how they were overcome**
- *CORS with Google Apps Script:* browser requests to Apps Script trigger CORS errors. Solved by posting with `mode: 'no-cors'` and treating the request as fire-and-forget, with the Apps Script handling storage server-side.
- *Forms breaking without backend setup:* added a `localStorage` fallback so the site stays fully functional during development and grading even before the Sheets URL is configured.
- *Consistent design across pages:* extracted a shared `styles.css` design system using CSS variables so all pages stay visually consistent and easy to re-theme.
- *Responsiveness:* used CSS Grid with `auto-fit`/`minmax` plus media queries and a slide-in mobile nav to adapt cleanly from desktop to mobile.

## 📦 Tech Stack

- HTML5
- CSS3 (Grid, Flexbox, custom properties, animations)
- Vanilla JavaScript (ES6+)
- Google Apps Script (form backend)
