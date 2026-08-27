/* =====================================================
   AHMED CHANNOUFI PORTFOLIO — script.js
   ===================================================== */

// ─── i18n translations ───────────────────────────────
const translations = {
  en: {
    "nav.about": "About", "nav.skills": "Skills", "nav.experience": "Experience",
    "nav.projects": "Projects", "nav.contact": "Contact", "nav.cv": "Download CV",
    "hero.badge": "Available for opportunities",
    "hero.prefix": "I build",
    "hero.desc": "Software Engineering graduate specializing in full-stack development & machine learning. Passionate about building scalable, data-driven applications that make a real impact.",
    "hero.cta1": "View My Work", "hero.cta2": "Get In Touch", "hero.scroll": "Scroll down",
    "about.tag": "Who I am",
    "about.title": 'About <span class="gradient-text">Me</span>',
    "about.intro": "I'm a <strong>Software Engineering graduate</strong> from ISLAIB (Institut Supérieur des Langues Appliquées et de l'Informatique de Béja), with honors. I'm a versatile engineer passionate about building high-quality software — from sleek web applications to intelligent ML-powered systems.",
    "about.p2": "I thrive at the intersection of software engineering and data science, turning complex problems into elegant, data-driven solutions. Trilingual in Arabic, French, and English, I bring both technical depth and cross-cultural communication to every project.",
    "about.stat1": "Projects Shipped", "about.stat2": "Languages Spoken",
    "about.education": "Bachelor's in CS — Software Engineering, With Honors (2023–2026)",
    "about.certs": "Certifications",
    "skills.tag": "What I know",
    "skills.title": 'Technical <span class="gradient-text">Skills</span>',
    "skills.languages": "Languages", "skills.frameworks": "Frameworks & APIs",
    "skills.ml": "ML & Data Science", "skills.db": "Databases", "skills.tools": "Tools & Systems",
    "skills.spoken": "Languages Spoken",
    "skills.arabic": "Arabic", "skills.native": "Native",
    "skills.french": "French", "skills.intermediate": "Intermediate",
    "skills.english": "English", "skills.good": "Good Level",
    "exp.tag": "My journey",
    "exp.title": 'Experience & <span class="gradient-text">Education</span>',
    "exp.work": "Work", "exp.edu": "Education",
    "exp.pfe.title": "Final-Year Project Intern (PFE)",
    "exp.pfe.b1": "Designed a complete decision-support system using <strong>CRISP-DM</strong> methodology for customer churn prediction.",
    "exp.pfe.b2": "Trained & compared <strong>8 ML models</strong> with <strong>SMOTE</strong> balancing — selected XGBoost with <strong>88% F1-score</strong> (83% precision, 98% recall).",
    "exp.pfe.b3": "Built a Flask web app with multi-file automated ingestion, interactive risk charts, dynamic KPIs & CSV reporting.",
    "exp.pfa.title": "Software Engineering Intern (PFA)",
    "exp.pfa.b1": "Developed an ASP.NET MVC web application for industrial quality test management in electronic manufacturing (EMS).",
    "exp.pfa.b2": "Implemented an <strong>automated 3-stage workflow</strong> (Initial ➔ QC ➔ Client) with automatic failure rejections & next-test suggestions.",
    "exp.pfa.b3": "Engineered 3 RBAC roles (Admin, User, Operator with 60s confirmation timer), Chart.js analytics & EPPlus Excel exports.",
    "exp.honors": "Graduated with Honors 🎓",
    "proj.tag": "What I've built",
    "proj.title": 'Featured <span class="gradient-text">Projects</span>',
    "proj.viewall": "View All on GitHub",
    "contact.tag": "Let's connect",
    "contact.title": 'Get In <span class="gradient-text">Touch</span>',
    "contact.sub": "Have a project in mind or want to hire me? I'd love to hear from you!",
    "contact.email": "Email", "contact.phone": "Phone", "contact.linkedin": "LinkedIn", "contact.github": "GitHub",
    "contact.name": "Full Name", "contact.emailLabel": "Email Address",
    "contact.subject": "Subject", "contact.message": "Message", "contact.send": "Send Message",
    "footer.text": 'Designed & Built by <strong>Ahmed Channoufi</strong> · 2026',
    "ph.name": "John Doe", "ph.email": "john@example.com",
    "ph.subject": "Project Collaboration", "ph.msg": "Tell me about your project...",
    "form.fillAll": "⚠️ Please fill in all required fields.",
    "form.invalidEmail": "⚠️ Please enter a valid email address.",
    "form.sending": "Sending...",
    "form.success": "✅ Message sent! I'll get back to you soon.",
  },
  fr: {
    "nav.about": "À propos", "nav.skills": "Compétences", "nav.experience": "Expérience",
    "nav.projects": "Projets", "nav.contact": "Contact", "nav.cv": "Télécharger le CV",
    "hero.badge": "Disponible pour de nouvelles opportunités",
    "hero.prefix": "Je conçois",
    "hero.desc": "Diplômé en génie logiciel spécialisé en développement full-stack et machine learning. Passionné par la création d'applications évolutives, pilotées par les données, avec un impact réel.",
    "hero.cta1": "Voir mes projets", "hero.cta2": "Me contacter", "hero.scroll": "Faites défiler",
    "about.tag": "Qui je suis",
    "about.title": 'À propos de <span class="gradient-text">moi</span>',
    "about.intro": "Je suis <strong>diplômé en génie logiciel</strong> de l'ISLAIB (Institut Supérieur des Langues Appliquées et de l'Informatique de Béja), avec mention. Je suis un ingénieur polyvalent passionné par la création de logiciels de qualité, des applications web élégantes aux systèmes intelligents basés sur le ML.",
    "about.p2": "Je m'épanouis à l'intersection du génie logiciel et de la data science, transformant des problèmes complexes en solutions élégantes basées sur les données. Trilingue en arabe, français et anglais, j'apporte à la fois profondeur technique et communication interculturelle à chaque projet.",
    "about.stat1": "Projets réalisés", "about.stat2": "Langues parlées",
    "about.education": "Licence en informatique — Génie logiciel, Mention (2023–2026)",
    "about.certs": "Certifications",
    "skills.tag": "Ce que je maîtrise",
    "skills.title": 'Compétences <span class="gradient-text">techniques</span>',
    "skills.languages": "Langages", "skills.frameworks": "Frameworks & APIs",
    "skills.ml": "ML & Data Science", "skills.db": "Bases de données", "skills.tools": "Outils & Systèmes",
    "skills.spoken": "Langues parlées",
    "skills.arabic": "Arabe", "skills.native": "Langue maternelle",
    "skills.french": "Français", "skills.intermediate": "Intermédiaire",
    "skills.english": "Anglais", "skills.good": "Bon niveau",
    "exp.tag": "Mon parcours",
    "exp.title": 'Expérience & <span class="gradient-text">Formation</span>',
    "exp.work": "Emploi", "exp.edu": "Formation",
    "exp.pfe.title": "Stagiaire Projet de Fin d'Études (PFE)",
    "exp.pfe.b1": "Conception d'un système décisionnel complet selon la méthodologie <strong>CRISP-DM</strong> pour la prédiction du churn client.",
    "exp.pfe.b2": "Entraînement et comparaison de <strong>8 modèles ML</strong> avec équilibrage <strong>SMOTE</strong> — XGBoost retenu avec un <strong>F1-score de 88%</strong> (83% précision, 98% rappel).",
    "exp.pfe.b3": "Développement d'une application Flask avec ingestion automatisée multi-fichiers, graphiques de risque interactifs, KPI dynamiques et export CSV.",
    "exp.pfa.title": "Stagiaire Génie Logiciel (PFA)",
    "exp.pfa.b1": "Développement d'une application web ASP.NET MVC pour la gestion des tests qualité industriels en fabrication électronique (EMS).",
    "exp.pfa.b2": "Mise en place d'un <strong>workflow automatisé en 3 étapes</strong> (Initial ➔ QC ➔ Client) avec rejets automatiques et suggestions de prochain test.",
    "exp.pfa.b3": "Conception de 3 rôles RBAC (Admin, Utilisateur, Opérateur avec minuteur de confirmation de 60s), analytique Chart.js et exports Excel EPPlus.",
    "exp.honors": "Diplômé avec mention 🎓",
    "proj.tag": "Ce que j'ai créé",
    "proj.title": 'Projets <span class="gradient-text">phares</span>',
    "proj.viewall": "Voir tout sur GitHub",
    "contact.tag": "Restons en contact",
    "contact.title": 'Entrer en <span class="gradient-text">contact</span>',
    "contact.sub": "Un projet en tête ou envie de me recruter ? J'aimerais beaucoup en discuter avec vous !",
    "contact.email": "Email", "contact.phone": "Téléphone", "contact.linkedin": "LinkedIn", "contact.github": "GitHub",
    "contact.name": "Nom complet", "contact.emailLabel": "Adresse email",
    "contact.subject": "Sujet", "contact.message": "Message", "contact.send": "Envoyer le message",
    "footer.text": 'Conçu et développé par <strong>Ahmed Channoufi</strong> · 2026',
    "ph.name": "Jean Dupont", "ph.email": "jean@exemple.com",
    "ph.subject": "Collaboration sur un projet", "ph.msg": "Parlez-moi de votre projet...",
    "form.fillAll": "⚠️ Merci de remplir tous les champs obligatoires.",
    "form.invalidEmail": "⚠️ Merci d'indiquer une adresse email valide.",
    "form.sending": "Envoi en cours...",
    "form.success": "✅ Message envoyé ! Je vous répondrai bientôt.",
  }
};

let currentLang = 'en';
try {
  currentLang = localStorage.getItem('lang') || 'en';
} catch (e) {}

function applyLanguage(lang) {
  currentLang = lang;
  try { localStorage.setItem('lang', lang); } catch (e) {}
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });

  // Highlight the active EN/FR option
  document.querySelectorAll('.lang-toggle').forEach(toggle => {
    toggle.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });
  });

  // Swap CV file based on language
  const cvFile = lang === 'fr' ? 'CV_Ahmed_Channoufi_FR.pdf' : 'CV_Ahmed_Channoufi_EN.pdf';
  const cvDesktop = document.getElementById('cv-download-desktop');
  const cvMobile = document.getElementById('cv-download-mobile');
  if (cvDesktop) cvDesktop.href = cvFile;
  if (cvMobile) cvMobile.href = cvFile;
}

// Attach click listeners ONCE, at the button level (delegation)
document.querySelectorAll('.lang-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    const opt = e.target.closest('.lang-option');
    if (!opt) return;
    applyLanguage(opt.getAttribute('data-lang'));
  });
});

// ─── Navbar scroll ───────────────────────────────────
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  // Scrolled class
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Active nav link
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// ─── Mobile menu ─────────────────────────────────────
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// ─── Typing effect ───────────────────────────────────
const typedEl = document.getElementById('typed-text');
const phrasesByLang = {
  en: ['full-stack apps.', 'ML pipelines.', 'REST APIs.', 'smart systems.', 'clean code.'],
  fr: ['des apps full-stack.', 'des pipelines ML.', 'des APIs REST.', 'des systèmes intelligents.', 'du code propre.']
};
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const phrases = phrasesByLang[currentLang] || phrasesByLang.en;
  const current = phrases[phraseIndex % phrases.length];
  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 60 : 110;

  if (!isDeleting && charIndex === current.length) {
    speed = 2000; // Pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}
typeEffect();

// Apply saved/default language now that DOM elements exist
applyLanguage(currentLang);

// ─── Particle canvas ─────────────────────────────────
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', () => {
  resizeCanvas();
  initParticles();
});

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5 + 0.3;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.speedY = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.5 + 0.1;
    this.color = Math.random() > 0.5 ? '0, 245, 212' : '123, 47, 247';
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
      this.reset();
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
    ctx.fill();
  }
}

function initParticles() {
  const count = Math.floor((canvas.width * canvas.height) / 12000);
  particles = [];
  for (let i = 0; i < Math.min(count, 100); i++) {
    particles.push(new Particle());
  }
}
initParticles();

function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        const alpha = (1 - dist / 120) * 0.15;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 245, 212, ${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  connectParticles();
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ─── Scroll reveal ───────────────────────────────────
const revealEls = document.querySelectorAll(
  '.about-text, .about-visual, .skill-category, .project-card, .contact-card, .contact-form, .section-header'
);

revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ─── Timeline reveal ─────────────────────────────────
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 100);
    }
  });
}, { threshold: 0.2 });

timelineItems.forEach(item => timelineObserver.observe(item));

// ─── Contact form ────────────────────────────────────
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('form-name').value.trim();
  const email = document.getElementById('form-email').value.trim();
  const message = document.getElementById('form-message').value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = translations[currentLang]['form.fillAll'];
    formStatus.className = 'form-status error';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formStatus.textContent = translations[currentLang]['form.invalidEmail'];
    formStatus.className = 'form-status error';
    return;
  }

  const submitBtn = document.getElementById('submit-btn');
  const btnText = submitBtn.querySelector('.btn-text');
  btnText.textContent = translations[currentLang]['form.sending'];
  submitBtn.disabled = true;

  // Simulate send (replace with real backend / EmailJS / Formspree)
  setTimeout(() => {
    formStatus.textContent = translations[currentLang]['form.success'];
    formStatus.className = 'form-status success';
    form.reset();
    btnText.textContent = translations[currentLang]['contact.send'];
    submitBtn.disabled = false;

    setTimeout(() => {
      formStatus.textContent = '';
      formStatus.className = 'form-status';
    }, 5000);
  }, 1500);
});

// ─── Smooth nav link clicks ──────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});