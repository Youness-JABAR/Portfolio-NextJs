const fr = {
  nav: {
    about: "À propos",
    experience: "Expérience",
    skills: "Compétences",
    projects: "Projets",
    contact: "Me contacter",
  },
  hero: {
    greeting: "Je suis",
    subtitle: "Développeur Full-Stack | TypeScript · Java/Spring Boot · DevOps/Cloud",
    tagline: "Étudiant M2 Génie Informatique · Université Grenoble Alpes",
    availability: "Recherche de stage à partir de février 2027",
    contact: "Me contacter",
  },
  about: {
    title: "À propos de moi",
    profile:
      "Développeur Full-Stack avec 4 ans d'expérience professionnelle dans le développement d'applications web. Actuellement en Master 2 Génie Informatique à l'Université Grenoble Alpes, je recherche un stage de fin d'études à partir de février 2027, avec un intérêt particulier pour le développement Full-Stack TypeScript/Java et les environnements DevOps/Cloud.",
    educationTitle: "Formation",
    education: [
      {
        school: "Université Grenoble Alpes",
        degree: "Master 2 Informatique, Génie Informatique",
        period: "2026 – 2027",
        location: "Grenoble, France",
      },
      {
        school: "Université de Cordoue",
        degree: "Erasmus+",
        period: "2021 – 2022",
        location: "Cordoue, Espagne",
      },
      {
        school: "École Nationale des Sciences Appliquées de Kénitra",
        degree: "Génie Logiciel et Développement Mobile",
        period: "2017 – 2022",
        location: "Kénitra, Maroc",
      },
    ],
    certificationsTitle: "Certifications",
    certifications: [
      "Spring Boot: Mastering the Fundamentals – Code with Mosh (Mai 2026)",
      "Essential Google Cloud Infrastructure: Core Services – Google Cloud (Février 2025)",
      "Google Cloud Fundamentals: Core Infrastructure – Google Cloud (Janvier 2025)",
      "Essential Google Cloud Infrastructure: Foundation – Google Cloud (Janvier 2025)",
      "Jira Fundamentals – ATLASSIAN University (Octobre 2022)",
      "TensorFlow for AI & Machine Learning – DeepLearning.AI (Août 2021)",
      "Introduction to Machine Learning – Duke University (Mai 2021)",
    ],
    languagesTitle: "Langues",
    languages: [
      "Français : Bilingue (C1 - TCF)",
      "Anglais : Courant (C1 - IELTS)",
      "Espagnol : Intermédiaire",
      "Arabe : Langue maternelle",
    ],
    cta: "Contactez-moi",
    ctaSuffix: "pour discuter d'un ",
    ctaHighlight: "stage",
    ctaSuffixEnd: " ou d'une opportunité professionnelle.",
  },
  experience: {
    title: "Expérience",
    items: [
      {
        company: "BEWIZYU",
        location: "Maroc",
        role: "Développeur Full-Stack",
        period: "Septembre 2022 – Août 2026",
        bullets: [
          "Développement d'applications web pour des clients français : MAPA Assurance, Métropole de Lyon, Poujoulat et Atlantic Group.",
          "Conception d'interfaces avec React, Next.js, Angular et TypeScript.",
          "Développement d'API REST et backends avec Node.js, Laravel et Strapi.",
          "Intégration de CMS headless Strapi et gestion de données MySQL.",
          "Tests automatisés avec Jest et déploiements CI/CD via GitLab et Azure DevOps.",
          "Travail en Agile/Scrum avec Git, Jira et Confluence.",
        ],
      },
      {
        company: "BEWIZYU",
        location: "Maroc",
        role: "Stage PFE – Développeur Full-Stack",
        period: "Mars 2022 – Août 2022",
        bullets: [
          "Développement de nouvelles fonctionnalités et amélioration de la qualité du code.",
          "Technologies : Angular, NgRx Store, RxJS, Swagger et Laravel.",
        ],
      },
      {
        company: "Enssup",
        location: "Maroc",
        role: "Stage de développement Web",
        period: "Juin 2020 – Septembre 2020",
        bullets: [
          "Refonte complète et implémentation de la seconde version du site MABOURSE.",
          "Technologies : HTML, CSS, Bootstrap, JavaScript, Django.",
        ],
      },
    ],
  },
  skills: {
    title: "Compétences",
    frontend: "Frontend",
    backend: "Backend",
    database: "Bases de données",
    devops: "DevOps / Cloud",
    testing: "Tests & outils",
  },
  projects: {
    title: "Projets",
    subtitle:
      "Projets personnels et innovations mettant en avant le Full-Stack, l'IA et le DevOps.",
    portfolio: {
      title: "Portfolio",
      description:
        "Portfolio personnel développé avec React / Next.js et déployé sur Vercel.",
    },
    aiGermanTutor: {
      title: "AIGermanTutor",
      description:
        "Plateforme d'apprentissage linguistique basée sur l'intelligence artificielle.",
    },
    checkpoint: {
      title: "Checkpoint Extension",
      description:
        "Extension Chrome de vérification d'informations en temps réel via l'API OpenAI et Make.com.",
    },
    fitness: {
      title: "FitnessCalcAdvisor",
      description:
        "Site SEO optimisé pour calculs fitness et conseils en nutrition et entraînement.",
    },
    mabourse: {
      title: "MABOURSE",
      description:
        "Refonte complète de la seconde version du site MABOURSE (stage Enssup).",
    },
  },
  aiProjects: {
    title: "Projets IA",
    subtitle:
      "Projets MediaPipe Python pour le traitement média et la vision par ordinateur.",
    mediaTitle: "Projets de traitement média",
    items: [
      "Contrôle du volume avec les doigts",
      "Peintre virtuel",
      "Souris virtuelle",
      "Test d'une bague virtuelle (Ring Tester)",
      "Coach personnel (Personal Trainer)",
      "Compteur de doigts",
      "Détection de visage",
      "Facemesh",
    ],
    technologies: "Technologies :",
    videoTitle: "Projets de traitement média",
    techStack: "Framework MediaPipe Python, OpenCV",
  },
  contact: {
    title: "Me contacter",
    subtitle:
      "Vous recrutez un stagiaire pour 2027 ou souhaitez échanger sur une opportunité ? Écrivez-moi !",
    location: "Grenoble, France",
    phone: "+33 7 54 85 15 78",
    form: {
      name: "Votre nom",
      namePlaceholder: "Comment dois-je vous appeler ?",
      email: "Votre email",
      emailPlaceholder: "Où puis-je vous joindre ?",
      subject: "Sujet",
      subjectPlaceholder: "Quel est le sujet de votre message ?",
      message: "Message",
      messagePlaceholder: "Quel est votre message ?",
      submit: "Envoyer le message",
      success: "Votre message a été envoyé avec succès.",
      error: "Échec de l'envoi de votre message. Veuillez réessayer plus tard.",
      validation: {
        nameRequired: "Le nom est requis",
        emailInvalid: "Format d'email invalide",
        subjectRequired: "Le sujet est requis",
        messageMin: "Le message doit contenir au moins 10 caractères",
        captchaRequired: "Veuillez valider le captcha.",
      },
      captchaFailed: "La vérification captcha a échoué. Veuillez réessayer.",
    },
  },
  footer: {
    connect: "Envie de rester connecté ? Suivez-moi sur les réseaux ci-dessous.",
    madeWith: "Fait avec",
    by: "par",
  },
  metadata: {
    title: "Youness JABAR - Développeur Full-Stack | M2 Grenoble Alpes",
    description:
      "Développeur Full-Stack avec 4 ans d'expérience. Étudiant M2 Génie Informatique à l'Université Grenoble Alpes. Recherche de stage à partir de février 2027.",
  },
};

export default fr;
