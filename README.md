# Suraj Kumar Ushakoyala - Personal Portfolio Website

A modern, fast, and fully responsive personal portfolio website crafted for **Suraj Kumar Ushakoyala** (B.Tech in Computer Science and Engineering, specializing in Artificial Intelligence and Machine Learning, Hyderabad, India).

Designed for college internships, placements, and software engineering / AI-ML job applications.

---

## 🚀 Live Previewing Locally

Because this project is built with vanilla **HTML5, CSS3, and JavaScript**, no dependencies or build steps are required.

### Method 1: Double-Click
Simply double-click `index.html` in your file explorer to open it in Chrome or any browser.

### Method 2: Python Local Server (Recommended)
Open a terminal in the `website` directory and run:
```bash
python -m http.server 8000
```
Then visit: `http://localhost:8000` in your browser.

---
to check my portfolio link:https://subtle-pixie-02e863.netlify.app/

## 📁 Project Structure

```text
website/
├── index.html              # Complete portfolio structure with all 10 sections
├── README.md               # Customization guide and documentation
├── css/
│   └── style.css           # Modern dark-theme stylesheet, animations, and media queries
├── js/
│   └── main.js             # Mobile hamburger drawer, smooth scroll, form validation, scroll reveal
└── assets/
    ├── Suraj_Resume.pdf    # Placeholder PDF resume file (ready to download & replace)
    ├── profile-avatar.svg  # High-resolution tech/AI-themed vector avatar
    └── favicon.svg         # Monogram browser tab icon
```

---

## 🛠️ How to Customize Your Portfolio

### 1. Updating Your Resume
A valid starter resume is placed at `assets/Suraj_Resume.pdf`.
- When your official resume is ready, export it as a PDF.
- Rename it to `Suraj_Resume.pdf`.
- Replace the file inside the `assets/` folder. All "Download Resume" buttons on the website will automatically serve your new file.

### 2. Updating Social Media & Contact Links
Search for `Placeholder` or `yourusername` in `index.html` and update:
- **Email**: Update `suraj.ushakoyala@example.com` with your real email.
- **GitHub**: Replace `https://github.com/yourusername` with your GitHub profile URL.
- **LinkedIn**: Replace `https://linkedin.com/in/yourusername` with your LinkedIn profile URL.

### 3. Adding Your Projects
In `index.html`, navigate to the `<section id="projects">` area:
- **Career Guidance System**: Update the GitHub repo link and live demo URL.
- **Python Projects**: Replace the placeholder title and description with your specific Python project.
- **Machine Learning Project**: Add details of your ML dataset, model (e.g., Random Forest, CNN, XGBoost), and accuracy metrics.

### 4. Updating Experience & Achievements
- Navigate to `<section id="experience">` and `<section id="achievements">`.
- Edit the text inside the `.placeholder-card` elements to showcase your internships, hackathons, and certifications.

### 5. Connecting the Contact Form to Receive Emails
The contact form currently features real-time client-side validation. To receive messages in your email inbox:
- **Option A (Formspree - Free & 2-minute setup)**:
  1. Register at [formspree.io](https://formspree.io).
  2. Create a form and get your endpoint ID.
  3. In `index.html`, update `<form id="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">`.
- **Option B (EmailJS)**:
  1. Register at [emailjs.com](https://www.emailjs.com).
  2. Add your service ID and template ID into `js/main.js`.

---

## 🌐 Deploying to the Web (Free)

### Deploy on GitHub Pages:
1. Initialize git in this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```
2. Create a repository on GitHub (e.g., `portfolio` or `username.github.io`).
3. Push your repository and enable **GitHub Pages** under repository **Settings > Pages > Deploy from branch (main)**.
4. Your website is instantly live with a free SSL certificate!

---

## 📄 License & Credits
© 2026 Suraj Kumar Ushakoyala. Built with HTML, CSS, and JavaScript.
