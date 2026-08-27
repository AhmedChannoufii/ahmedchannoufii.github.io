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
    "hero.desc": "Versatile profile, Software Engineering graduate from ISLAIB, with concrete experience in full-stack development and predictive modeling (Data Science/ML).",
    "hero.cta1": "View My Work", "hero.cta2": "Get In Touch", "hero.scroll": "Scroll down",
    "about.tag": "Who I am",
    "about.title": 'About <span class="gradient-text">Me</span>',
    "about.intro": "I am a graduate in <strong>Software Engineering and Information Systems</strong> from ISLAIB (Institut Supérieur des Langues Appliquées et de l'Informatique de Béja). I have a versatile profile: I cover full-stack development, Machine Learning, databases, as well as a good understanding of Linux administration and Git.",
    "about.p2": "I thrive at the intersection of software engineering and data science, turning complex problems into elegant, data-driven solutions. Trilingual in Arabic, French, and English, I bring both technical depth and cross-cultural communication to every project.",
    "about.stat1": "Projects Shipped", "about.stat2": "Languages Spoken",
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
    "exp.honors": "Graduated with Good Honors 🎓",
    "exp.bachelor.title": "Bachelor's in Computer Science",
    "exp.bachelor.org": "ISLAIB · Computer Science, Software Engineering & Information Systems",
    "exp.bac.title": "Baccalauréate in Computer Science",
    "exp.bac.org": "Lycée Omrane Supérieur · Tunis",
    "proj.tag": "What I've built",
    "proj.title": 'Featured <span class="gradient-text">Projects</span>',
    "proj.viewall": "View All on GitHub",
    "proj.pfe.desc": "End-to-end Machine Learning decision-support platform built for Tunisie Telecom following the <strong>CRISP-DM</strong> methodology. Aggregated & cleaned <strong>6 monthly transactional datasets</strong> (client profile, outgoing/incoming calls, data consumption, recharges, USSD) to construct <strong>46 behavioral features</strong> (trend deltas, active months, recency). Balanced dataset with <strong>SMOTE</strong> and deployed in a interactive <strong>Flask Web Dashboard</strong> with automated multi-file ingestion, dynamic KPI analytics, and CSV reporting.",
    "proj.pfa.desc": "Industrial Web Platform developed for Asteelflash (Electronic Manufacturing Services - EMS). Implements an end-to-end 3-level quality control workflow for electronic boards, with strict business rejection rules and real-time hardware assignment. The system actively guides each user through the workflow — auto-suggesting the correct next test step based on product history, filtering compatible machines/boards/operators, and blocking any attempt to skip a stage — plus multi-role security (RBAC), live Chart.js analytics, and automated EPPlus Excel report generation.",
    "proj.magasin.desc": "Full-featured point-of-sale web application with fast checkout, smart stock management with low-stock alerts, product categories, cashier roles (cashier/supervisor), sales reports with CSV export, printable receipts, and JWT-secured authentication.",
    "proj.biblivre.desc": "A complete library management REST API built in Java. Handles books, members, loans, and returns with full CRUD operations and clean RESTful architecture.",
    "proj.badge.pfe": "PFE · Internship @ Tunisie Telecom",
    "proj.badge.pfa": "PFA · Internship @ Asteelflash",
    "proj.badge.magasin": "Full-Stack · Personal Project",
    "proj.badge.biblivre": "Backend · Academic Project",
    "proj.magasin.title": "Magasin+ — Store Management System",
    "proj.biblivre.title": "Biblivre REST API",
    "proj.dataset.title": "📊 Dataset Class Distribution & Preprocessing",
    "proj.model.title": "🧪 Model Comparison & Overfitting Analysis (8 Algorithms Evaluated)",
    "proj.validation.title": "✅ Production Validation on Unseen Real Data (34,000 New Customers)",
    "proj.flask.title": "🌐 Flask Decision-Support Web Application Features",
    "proj.workflow.title": "⚡ 3-Stage Sequential Quality Workflow & Business Rules",
    "proj.rbac.title": "👥 Multi-Role Authorization & Key Capabilities",
    "proj.metrics.title": "🏭 Operational Performance & Output Metrics",
    "proj.nonchurn": "🟢 Non-Churn (Class 0)",
    "proj.churn": "🔴 Churn (Class 1)",
    "proj.table.model": "Model",
    "proj.table.accuracy": "Accuracy",
    "proj.table.precision": "Precision",
    "proj.table.recall": "Recall",
    "proj.table.f1": "F1-Score",
    "proj.table.overfitting": "Overfitting Risk (Train/Test Gap)",
    "proj.metric.accuracy": "Accuracy",
    "proj.metric.precision": "Precision",
    "proj.metric.recall": "Recall (4,906/5,021 Caught)",
    "proj.metric.f1": "F1-Score",
    "proj.validation.note": "🔒 Model trained in 0.93s with 1.46% generalization gap, catching 4,906 true churners out of 5,021 in new validation dataset.",
    "proj.wf.step1.title": "Test Initial",
    "proj.wf.step1.desc": "First functional validation after manufacturing — system auto-suggests it for any new, untested serial number",
    "proj.wf.step2.title": "Contrôle Qualité",
    "proj.wf.step2.desc": "Random quality audit, auto-suggested only once the Test Initial has passed",
    "proj.wf.step3.title": "Test Client (Level 3)",
    "proj.wf.step3.desc": "Final validation against client-specific requirements — auto-suggested after QC passes, marks product as \"Terminé\"",
    "proj.wf.rule": "⛔ <strong>Rejection Rule</strong>: Automatic product rejection upon 2 consecutive failures at any level. Full audit trail recorded.",
    "proj.rbac.role": "Role",
    "proj.rbac.responsibilities": "Key Responsibilities",
    "proj.rbac.features": "Special Features",
    "proj.rbac.admin": "Administrateur",
    "proj.rbac.admin.resp": "User management, global test history, system-wide KPIs",
    "proj.rbac.admin.feat": "Chart.js category analytics & Excel export",
    "proj.rbac.user": "Utilisateur",
    "proj.rbac.user.resp": "Test registration, product history inspection, advanced search",
    "proj.rbac.user.feat": "Multi-criteria filtering (Dates, Boards, Machines)",
    "proj.rbac.operator": "Opérateur / Technicien",
    "proj.rbac.operator.resp": "Test execution on assigned machines (e.g. MACH001, BRD-A)",
    "proj.rbac.operator.feat": "⏱️ 60-second countdown double confirmation",
    "proj.rbac.roles": "RBAC Roles",
    "proj.metric.validation": "Validation Stages",
    "proj.metric.avgcycle": "Avg Test Cycle",
    "proj.metric.traceability": "Traceability",
    "proj.pfa.note": "🔒 Integrated with BCrypt security, EF ORM, SQL Server, and EPPlus for instant production Excel exports.",
    "contact.tag": "Let's connect",
    "contact.title": 'Get In <span class="gradient-text">Touch</span>',
    "contact.sub": "Have a project in mind or want to hire me? I'd love to hear from you!",
    "contact.email": "Email", "contact.phone": "Phone", "contact.linkedin": "LinkedIn", "contact.github": "GitHub",
    "footer.text": 'Designed & Built by <strong>Ahmed Channoufi</strong> · 2026',
  },
  fr: {
    "nav.about": "À propos", "nav.skills": "Compétences", "nav.experience": "Expérience",
    "nav.projects": "Projets", "nav.contact": "Contact", "nav.cv": "Télécharger le CV",
    "hero.badge": "Disponible pour de nouvelles opportunités",
    "hero.prefix": "Je conçois",
    "hero.desc": "Profil polyvalent, diplômé en Génie Logiciel de l'ISLAIB, avec une expérience concrète en développement full-stack et en modélisation prédictive (Data Science/ML).",
    "hero.cta1": "Voir mes projets", "hero.cta2": "Me contacter", "hero.scroll": "Faites défiler",
    "about.tag": "Qui je suis",
    "about.title": 'À propos de <span class="gradient-text">moi</span>',
    "about.intro": "Je suis diplômé en <strong>Génie Logiciel et Systèmes d'Information</strong> de l'ISLAIB (Institut Supérieur des Langues Appliquées et de l'Informatique de Béja). J'ai un profil polyvalent : je couvre le développement full-stack, le Machine Learning, les bases de données, ainsi qu'une bonne compréhension de l'administration Linux et de Git.",
    "about.p2": "Je m'épanouis à l'intersection du génie logiciel et de la data science, transformant des problèmes complexes en solutions élégantes basées sur les données. Trilingue en arabe, français et anglais, j'apporte à la fois profondeur technique et communication interculturelle à chaque projet.",
    "about.stat1": "Projets réalisés", "about.stat2": "Langues parlées",
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
    "exp.honors": "Diplômé avec Mention Bien 🎓",
    "exp.bachelor.title": "Licence Nationale en Sciences de l'Informatique",
    "exp.bachelor.org": "ISLAIB · Sciences de l'Informatique, Génie Logiciel et Systèmes d'Information",
    "exp.bac.title": "Baccalauréat en Informatique",
    "exp.bac.org": "Lycée Omrane Supérieur · Tunis",
    "proj.tag": "Ce que j'ai créé",
    "proj.title": 'Projets <span class="gradient-text">phares</span>',
    "proj.viewall": "Voir tout sur GitHub",
    "proj.pfe.desc": "Plateforme décisionnelle de Machine Learning de bout en bout développée pour Tunisie Telecom suivant la méthodologie <strong>CRISP-DM</strong>. Agrégation et nettoyage de <strong>6 jeux de données transactionnels mensuels</strong> (profil client, appels sortants/entrants, consommation de données, recharges, USSD) pour construire <strong>46 caractéristiques comportementales</strong> (tendances, mois actifs, récence). Dataset équilibré avec <strong>SMOTE</strong> et déployé dans un <strong>Tableau de Bord Flask interactif</strong> avec ingestion automatisée multi-fichiers, analytique KPI dynamique et export CSV.",
    "proj.pfa.desc": "Plateforme Web industrielle développée pour Asteelflash (Electronic Manufacturing Services - EMS). Implémente un workflow de contrôle qualité à 3 niveaux de bout en bout pour cartes électroniques, avec règles de rejet strictes et assignment matériel en temps réel. Le système guide activement chaque utilisateur à travers le workflow — suggérant automatiquement la prochaine étape de test appropriée basée sur l'historique du produit, filtrant les machines/cartes/opérateurs compatibles, et bloquant toute tentative de sauter une étape — plus sécurité multi-rôles (RBAC), analytique Chart.js en direct et génération de rapports Excel EPPlus automatisée.",
    "proj.magasin.desc": "Application web de point de vente complète avec caisse rapide, gestion intelligente des stocks avec alertes de stock faible, catégories de produits, rôles de caissier (caissier/superviseur), rapports de ventes avec export CSV, reçus imprimables et authentification JWT sécurisée.",
    "proj.biblivre.desc": "API REST complète de gestion de bibliothèque en Java. Gère les livres, membres, prêts et retours avec opérations CRUD complètes et architecture RESTful propre.",
    "proj.badge.pfe": "PFE · Stage @ Tunisie Telecom",
    "proj.badge.pfa": "PFA · Stage @ Asteelflash",
    "proj.badge.magasin": "Full-Stack · Projet Personnel",
    "proj.badge.biblivre": "Backend · Projet Académique",
    "proj.magasin.title": "Magasin+ — Système de Gestion de Magasin",
    "proj.biblivre.title": "API REST Biblivre",
    "proj.dataset.title": "📊 Distribution des Classes de Dataset & Prétraitement",
    "proj.model.title": "🧪 Comparaison de Modèles & Analyse du Surapprentissage (8 Algorithmes Évalués)",
    "proj.validation.title": "✅ Validation de Production sur Données Réelles Non Vues (34 000 Nouveaux Clients)",
    "proj.flask.title": "🌐 Fonctionnalités de l'Application Web de Décision Flask",
    "proj.workflow.title": "⚡ Workflow Séquentiel de Qualité à 3 Étapes & Règles Métier",
    "proj.rbac.title": "👥 Autorisation Multi-Rôles & Capacités Clés",
    "proj.metrics.title": "🏭 Performance Opérationnelle & Métriques de Sortie",
    "proj.nonchurn": "🟢 Non-Churn (Classe 0)",
    "proj.churn": "🔴 Churn (Classe 1)",
    "proj.table.model": "Modèle",
    "proj.table.accuracy": "Exactitude",
    "proj.table.precision": "Précision",
    "proj.table.recall": "Rappel",
    "proj.table.f1": "F1-Score",
    "proj.table.overfitting": "Risque de Surapprentissage (Écart Train/Test)",
    "proj.metric.accuracy": "Exactitude",
    "proj.metric.precision": "Précision",
    "proj.metric.recall": "Rappel (4 906/5 021 Détectés)",
    "proj.metric.f1": "F1-Score",
    "proj.validation.note": "🔒 Modèle entraîné en 0.93s avec écart de généralisation de 1.46%, détectant 4 906 churners réels sur 5 021 dans le nouveau dataset de validation.",
    "proj.wf.step1.title": "Test Initial",
    "proj.wf.step1.desc": "Première validation fonctionnelle après fabrication — le système la suggère automatiquement pour tout nouveau numéro de série non testé",
    "proj.wf.step2.title": "Contrôle Qualité",
    "proj.wf.step2.desc": "Audit qualité aléatoire, suggéré automatiquement seulement une fois le Test Initial réussi",
    "proj.wf.step3.title": "Test Client (Niveau 3)",
    "proj.wf.step3.desc": "Validation finale selon les exigences spécifiques du client — suggéré automatiquement après réussite du QC, marque le produit comme \"Terminé\"",
    "proj.wf.rule": "⛔ <strong>Règle de Rejet</strong> : Rejet automatique du produit après 2 échecs consécutifs à n'importe quel niveau. Traçabilité complète enregistrée.",
    "proj.rbac.role": "Rôle",
    "proj.rbac.responsibilities": "Responsabilités Clés",
    "proj.rbac.features": "Fonctionnalités Spéciales",
    "proj.rbac.admin": "Administrateur",
    "proj.rbac.admin.resp": "Gestion des utilisateurs, historique global des tests, KPI système",
    "proj.rbac.admin.feat": "Analytique Chart.js par catégorie & export Excel",
    "proj.rbac.user": "Utilisateur",
    "proj.rbac.user.resp": "Enregistrement de tests, inspection d'historique produit, recherche avancée",
    "proj.rbac.user.feat": "Filtrage multi-critères (Dates, Cartes, Machines)",
    "proj.rbac.operator": "Opérateur / Technicien",
    "proj.rbac.operator.resp": "Exécution de tests sur machines assignées (ex: MACH001, BRD-A)",
    "proj.rbac.operator.feat": "⏱️ Compte à rebours 60s confirmation double",
    "proj.rbac.roles": "Rôles RBAC",
    "proj.metric.validation": "Étapes de Validation",
    "proj.metric.avgcycle": "Cycle de Test Moyen",
    "proj.metric.traceability": "Traçabilité",
    "proj.pfa.note": "🔒 Intégré avec sécurité BCrypt, EF ORM, SQL Server et EPPlus pour exports Excel production instantanés.",
    "contact.tag": "Restons en contact",
    "contact.title": 'Entrer en <span class="gradient-text">contact</span>',
    "contact.sub": "Un projet en tête ou envie de me recruter ? J'aimerais beaucoup en discuter avec vous !",
    "contact.email": "Email", "contact.phone": "Téléphone", "contact.linkedin": "LinkedIn", "contact.github": "GitHub",
    "footer.text": 'Conçu et développé par <strong>Ahmed Channoufi</strong> · 2026',
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

// ─── Initialize everything when DOM is ready ─────────
document.addEventListener('DOMContentLoaded', () => {
  
  // Apply language
  applyLanguage(currentLang);

  // Attach language toggle click listeners
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
    en: ['full-stack applications.', 'intelligent systems.', 'REST APIs.', 'data processing & visualization.'],
    fr: ['des applications full-stack.', 'des systèmes intelligents.', 'des APIs REST.', 'du traitement et de la visualisation de données.']
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

  // ─── Particle canvas ─────────────────────────────────
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

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

  resizeCanvas();
  initParticles();
  animateParticles();

  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });

  // ─── Scroll reveal ───────────────────────────────────
  const revealEls = document.querySelectorAll(
    '.about-text, .about-visual, .skill-category, .project-card, .contact-card, .section-header'
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
});