const projectDetails = [
    {   
        "image": "../assets/images/vitamouv.png",
        "title":"Vita'Mouv - Site professionnel pour une éducatrice sportive",
        "description": "Site web complet incluant la conception UX, le développement front/back et le déploiement",
        "stack": ["HTML5", "CSS3", "JavaScript", "AJAX", "Brevo", "ASP.NET Core", "Render"],
        "technologies": [
            "Analyse des besoins du client (contenu, structure, identité visuelle)",
            "Conception responsive",
            "Intégration cohérente de la charte graphique (couleurs, visuels)",
            "Intégration d’un formulaire de contact dynamique (AJAX)",
            "Envoi d’emails via Brevo",
            "Optimisation SEO",
            "Déploiement et mise en production"
        ],
        "objective": "Créer une présence en ligne professionnelle pour un coach sportif, avec un site web attrayant et fonctionnel.",
        "info": "Projet réalisé avec Asp.NET Core pour permettre une future évolutivité(avis clients, interface administrateur, galerie photos)."
    },
    {   
        "image": "../assets/images/billetterie.png",
        "title": "Billetterie en ligne – Jeux Olympiques Paris 2024 ",
        "description": "Application web complète développée en ASP.NET Core dans le cadre d’un examen",
        "stack": ["C#", ".NET", "ASP.NET Core MVC", "EF Core", "Identity", "SQL Server", "PostgreSQL", "Bootstrap"],
        "technologies": [
            "Architecture MVC avec vues Razor",
            "Gestion de la base de données avec Entity Framework Core",
            "Authentification et autorisation avec Identity (Admin / Utilisateur)",
            "CRUD complet pour la gestion des offres",
            "Sauvegarde du panier et simulation de paiement réussi",
            "Création de billets avec QR Code",
            "Interface utilisateur dynamique et formulaires sécurisés",
            "Interface utilisateur responsive avec Bootstrap",
            "Organisation du code selon les bonnes pratiques .NET",
            "Séparation claire des responsabilités entre les couches"
        ],
        "objective": "Simuler une plateforme officielle de billetterie pour les JO 2024.",
        "info": "Initialement déployé sur Azure avec SQL Server, puis migré vers Render (PostgreSQL) pour réduire les coûts. Le plan gratuit implique un temps de réveil pouvant atteindre 50 secondes."
    },
    {   
        "image": "../assets/images/portfolio.png",
        "title": "Portfolio professionnel",
        "description": "Projet front-end personnel",
        "stack": ["HTML5", "CSS3", "JavaScript", "JSON", "i18n", "Netlify"],
        "technologies": [
            "Conception responsive et design entièrement personnalisés en CSS pur", 
            "Grille de projets avec vignettes, tags techniques et boutons d’accès",
            "Affichage dynamique des fiches projets (Javascript Vanilla)",
            "Animations légères et maîtrisées",
            "Système d’internationalisation (FR/EN) basé sur JSON et i18n",
            "Formulaire de contact géré via Netlify Forms",
            "Déploiement continu sur Netlify",
        ],
        "objective": "Présenter mes projets de manière visuelle et impactante, tout en mettant en avant mes compétences techniques et mon identité professionnelle.",
        "info": "Amélioration prévue : ajout d’un back-end léger et d’une base de données pour gérer et ajouter facilement de nouveaux projets."
    },
     {   
        "image": "../assets/images/calendrier.png",
        "title": "Calendrier de l'Avent interactif",
        "description": "Projet front-end personnel",
        "stack": ["HTML", "CSS", "SASS", "JavaScript", "localStorage", "Netlify"],
        "technologies": [
            "Conception complète de l’interface (structure, design, responsive)", 
            "Verrouillage des cases du calendrier jusqu’à la date correspondante",
            "Ouverture dynamique des cases avec animations CSS",
            "Utilisation de localStorage pour mémoriser les cases ouvertes",
            "Utilisation de SASS pour la gestion des styles et des animations",
            "Fonctionnalité de réinitialisation du calendrier",
            "Personnalisation avec le prénom de l’utilisateur",
            "Déploiement sur Netlify",
        ],
        "objective": "L’objectif était de créer une expérience ludique et fluide, tout en renforçant mes compétences front-end.",
        "info": "Amélioration prévue : ajout d'un mode démo permettant d'ouvrir toutes les cases."
    }
]

export default projectDetails