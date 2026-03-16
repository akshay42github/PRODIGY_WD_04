# 🚀 Akshay Yadav — Personal Portfolio Website

> A premium, cinematic dark-themed personal portfolio built with **vanilla HTML, CSS & JavaScript** — featuring GSAP animations, custom cursor, scroll-triggered reveals, and a fully responsive layout.

---

## 🌐 Live Demo

👉**Hosted via GitHub Pages:(https://akshay42github.github.io/PRODIGY_WD_04/)**  

---

## 📸 Preview

```
┌──────────────────────────────────┐
│  🐍 Python Backend Developer     │
│  Akshay Yadav Portfolio          │
│  Nashik, Maharashtra, India      │
│  akshay.techdevx@gmail.com       │
└──────────────────────────────────┘
```

---

## ✨ Features

- ⚡ **Animated Loading Screen** with progress bar
- 🖱️ **Custom Cursor** with lag-trail ring effect
- 🎞️ **GSAP-powered animations** — text reveals, scroll triggers, staggered effects
- 📜 **Smooth Scrolling** between all sections
- 🌀 **Animated Marquee Strip** of tech skills
- 📱 **Fully Responsive** — Desktop, Tablet & Mobile
- 🍔 **Hamburger Mobile Nav** with overlay
- 📊 **Animated Skill Bars** that fill on scroll
- 🗂️ **Timeline / Journey** section with scroll animations
- 📬 **Contact Form** with animated submit button
- 🌟 **Mouse Parallax** on hero background glows
- 🔢 **Dynamic Section Counter** in hero footer
- 🎨 **Noise texture overlay** for premium feel

---

## 📁 Project Structure

```
portfolio/
│
├── index.html       ← Main HTML structure (all sections)
├── style.css        ← All styling, design tokens, responsive layout
├── script.js        ← All JS: GSAP animations, cursor, nav, form
└── README.md        ← You are here
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic structure |
| CSS3 | Custom properties, Grid, Flexbox, Animations |
| JavaScript (ES6+) | Interactivity, GSAP control, scroll logic |
| [GSAP 3](https://greensock.com/gsap/) | Premium animations (CDN) |
| [ScrollTrigger](https://greensock.com/scrolltrigger/) | Scroll-based animation plugin |
| [Google Fonts](https://fonts.google.com/) | Cormorant Garamond + Syne + DM Mono |

> **Zero build tools.** No npm, no webpack, no framework. Pure browser-ready files.

---

## 🚀 Run Locally

### Option 1 — Just open the file (quickest)

```bash
# 1. Clone the repository
git clone https://github.com/YOUR-USERNAME/portfolio.git

# 2. Open the folder
cd portfolio

# 3. Open index.html in your browser
# On Windows:
start index.html

# On Mac:
open index.html

# On Linux:
xdg-open index.html
```

### Option 2 — Use VS Code Live Server (recommended)

```bash
# 1. Clone the repo
git clone https://github.com/YOUR-USERNAME/portfolio.git

# 2. Open in VS Code
code portfolio

# 3. Install "Live Server" extension from VS Code marketplace
# 4. Right-click index.html → "Open with Live Server"
# 5. Browser opens at http://127.0.0.1:5500
```

### Option 3 — Use Python's built-in server

```bash
# 1. Clone the repo
git clone https://github.com/YOUR-USERNAME/portfolio.git

# 2. Navigate into the folder
cd portfolio

# 3. Start a local server
python -m http.server 8000

# 4. Open browser at:
# http://localhost:8000
```

---

## ✏️ Customization Guide

### Update your personal details

Open `index.html` and find these spots to update:

| What to change | Where to find it |
|---|---|
| Your name & title | Hero section `<h1>` and `<title>` tag |
| Email address | Nav CTA, contact section, footer |
| Phone number | About facts, contact info row |
| LinkedIn URL | Contact socials `<a href="">` |
| GitHub URL | "GitHub Profile →" link + project links |
| Project demo links | Each `.project-link` anchor tag |
| Resume download | Update `btn-outline` href in About section |

### Change accent color

Open `style.css` and edit line ~8:

```css
--accent: #c8a96e;   /* Change this to any color you like */
```

---

## 📦 Sections Included

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Full-screen animated intro with headline, CTA buttons, stats |
| 2 | **Marquee** | Scrolling skill ticker strip |
| 3 | **About** | Bio, avatar, personal facts, email CTA |
| 4 | **Skills** | 3 skill categories with animated progress bars + strength tags |
| 5 | **Projects** | 3 featured projects with tags and links |
| 6 | **Journey** | Academic & learning timeline |
| 7 | **Contact** | Form, email, phone, social links |
| 8 | **Footer** | Copyright + back-to-top button |

---

## 🌍 Deploy on GitHub Pages (Free Hosting)

After pushing to GitHub:

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** (left sidebar)
4. Under **Source** → select `main` branch → `/ (root)` folder
5. Click **Save**
6. Your live URL will be: `https://YOUR-USERNAME.github.io/portfolio/`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Akshay Yadav**  
MCA Student @ Sandip University, Nashik  
Python Backend Developer | AI & Data Science Enthusiast

📧 akshay.techdevx@gmail.com  
📍 Nashik, Maharashtra, India  
🔗 [LinkedIn](https://linkedin.com/) · [GitHub](https://github.com/)

---

> *"Built with passion, Python ☕ and a strong mathematical foundation."*
