# Tamil's Portfolio — React + Vite

A personal developer portfolio for **Tamilarasan M**, Java Full Stack Developer.  
Converted from a single `index.html` to a proper **React + Vite** project structure.

---

## 📁 Project Structure

```
tamil-portfolio/
├── index.html                  # HTML entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── T.png                   # Favicon
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Root component (layout + scroll logic)
    ├── index.css               # Global styles + Tailwind directives
    ├── assets/                 # Local images (profile, projects)
    │   ├── tamil.jpg
    │   ├── ecom.jpeg
    │   ├── weather.jpeg
    │   ├── blog.jpeg
    │   ├── task.jpg
    │   └── T.png
    ├── data/
    │   └── constants.js        # All data: projects, skills, experience, nav
    └── components/
        ├── Navbar.jsx          # Fixed top navigation + mobile menu
        ├── Hero.jsx            # Landing / hero section with typing animation
        ├── About.jsx           # About me section with rotating company name
        ├── Skills.jsx          # Technical skills grid
        ├── Projects.jsx        # Featured projects cards
        ├── Experience.jsx      # Professional timeline
        ├── Contact.jsx         # Contact form + info
        └── Footer.jsx          # Footer with social links
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder — ready to deploy to Vercel, Netlify, or GitHub Pages.

---

## 🛠 Tech Stack

| Layer      | Technology                  |
|------------|-----------------------------|
| UI Library | React 18                    |
| Bundler    | Vite 5                      |
| Styling    | Tailwind CSS 3              |
| Icons      | Font Awesome 6, Lucide React|
| Fonts      | Google Fonts — Poppins      |

---

## 📦 Deploying to Vercel

```bash
npm install -g vercel
vercel
```

## 📦 Deploying to Netlify

```bash
npm run build
# Drag & drop the dist/ folder at app.netlify.com/drop
```
