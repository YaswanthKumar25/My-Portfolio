# Dasari Yaswanth Kumar — Developer Portfolio

A modern, high-performance developer portfolio built with **React**, **Vite**, and **Tailwind CSS v4**. Designed specifically for a **Python Full Stack Developer**, featuring responsive layouts, a refined dark aesthetic, interactive representative UI previews, and direct resume distribution.

---

## 🚀 Live Demo & Links

- **GitHub Profile**: [https://github.com/YaswanthKumar25](https://github.com/YaswanthKumar25)
- **LinkedIn**: [https://linkedin.com/in/yaswanth-kumar-d-3a9383266](https://linkedin.com/in/yaswanth-kumar-d-3a9383266)
- **Email**: [dasariyeshwanthkumar@gmail.com](mailto:dasariyeshwanthkumar@gmail.com)

---

## 🛠️ Technologies Used

- **Framework**: [React 19](https://react.dev/) (Functional components & Hooks)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter, Space Grotesk, JetBrains Mono

---

## ✨ Features

- **Minimalist Dark Design System**: Tokenized palette (`#09090B` background, `#22D3EE` cyan accent, `#818CF8` secondary indigo) with WCAG compliant contrast.
- **Interactive Hero & Terminal**: Developer profile inspector with tab switcher between `developer.py` and `stack.json`.
- **Selected Project Showcase**:
  - **TaskFlow**: Full-stack task management application (React, Django REST Framework, Python, MySQL, Tailwind CSS) with representative Kanban UI preview.
  - **CodeNest**: Competitive programming platform (React, Django REST Framework, Python, MySQL, Tailwind CSS) with representative code editor and problem pane preview.
  - **React Portfolio**: Component architecture, design token system, and accessible layout.
- **Categorized Tech Stack**: Organized by Languages, Frontend, Backend, Database, and Tools (honest presentation without arbitrary proficiency bars).
- **Academic Timeline**: Structured chronological cards for B.Tech (CGPA: 7.63), Diploma (68.89%), and Secondary Education (75%).
- **Verified Certifications**: NPTEL IoT, Cisco Python, and Smart Interviews Smart Coder certifications.
- **Functional Contact Module**: Client validation, mailto dispatch, clipboard copy backup, and direct communication channels.
- **In-Browser Resume Viewer**: Native PDF preview modal plus one-click PDF download pipeline (`public/resume.pdf`).
- **Responsive & Accessible**: Seamlessly adapts from 320px mobile screens to ultra-wide desktop monitors; keyboard navigation and prefers-reduced-motion supported.

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg             # Custom typographic SVG favicon
│   └── resume.pdf              # Official resume PDF document
├── src/
│   ├── components/
│   │   ├── Button.jsx          # Reusable polymorphic button component
│   │   ├── Footer.jsx          # Dynamic copyright, social links, back to top
│   │   ├── Navbar.jsx          # Responsive header with mobile drawer
│   │   ├── ProjectCard.jsx     # Card component with features, badges, & links
│   │   ├── ProjectPreviews.jsx # Representative UI previews (TaskFlow & CodeNest)
│   │   ├── ResumeModal.jsx     # In-browser PDF modal lightbox
│   │   └── SectionHeading.jsx  # Consistent section title & badge styling
│   ├── data/
│   │   ├── certifications.js   # NPTEL, Cisco, Smart Interviews credentials
│   │   ├── education.js        # B.Tech, Diploma, Secondary education records
│   │   ├── profile.js          # Single source of truth for personal details
│   │   ├── projects.js         # Detailed project metadata and architecture
│   │   └── skills.js           # Categorized technologies and toolchains
│   ├── sections/
│   │   ├── About.jsx           # Background narrative & core competency domains
│   │   ├── Certifications.jsx  # Accredited certifications showcase
│   │   ├── Contact.jsx         # Direct contact information & validated form
│   │   ├── Education.jsx       # Academic timeline & grades
│   │   ├── Hero.jsx            # Headline, CTA buttons, and interactive terminal
│   │   ├── Projects.jsx        # Project grid with category filtering
│   │   └── Skills.jsx          # Structured tech stack cards
│   ├── App.jsx                 # Root layout and modal state management
│   ├── index.css               # Tailwind CSS v4 directives and design variables
│   └── main.jsx                # Application entry point
├── index.html                  # SEO metadata, Open Graph tags, and font links
├── package.json                # Project dependencies and npm scripts
├── vite.config.js              # Vite + Tailwind v4 + React configuration
└── README.md                   # Project documentation
```

---

## 💻 Local Development

### 1. Clone or Open the Repository
```bash
git clone https://github.com/YaswanthKumar25/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📝 Customization Guide

### Updating Personal Information
Edit `src/data/profile.js` to modify your name, role, email, phone number, location, bio paragraphs, or social links. Changes automatically propagate across all sections.

### Replacing the Resume PDF
Replace the file at `public/resume.pdf` with your updated PDF. The filename should remain `resume.pdf` so both the "Download Resume" button and the in-browser viewer load it seamlessly.

### Adding or Updating Projects
Edit `src/data/projects.js` to add new repositories, change live URLs, or update bullet points and technology badges.

---

## 🌐 Deployment Instructions

### Deploying to Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Click **"Add new site"** &rarr; **"Import an existing project"**.
3. Select your **GitHub** account and choose `portfolio` (or your repository name).
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy portfolio"**.

### Deploying to Vercel
1. Log in to [Vercel](https://vercel.com/).
2. Click **"Add New..."** &rarr; **"Project"**.
3. Select your GitHub repository.
4. Framework preset will automatically detect **Vite**.
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**.

---

## 📄 License
Designed and developed by **Dasari Yaswanth Kumar**. Released under the MIT License.
