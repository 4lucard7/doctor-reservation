# 🏥 MediCare - Plateforme de Réservation Médicale

Une application web moderne pour la réservation de consultations médicales en ligne.

![React](https://img.shields.io/badge/React-18.2-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![Vite](https://img.shields.io/badge/Vite-5.0-646cff)
![License](https://img.shields.io/badge/License-MIT-green)

##  Fonctionnalités

-  **Recherche avancée** - Trouvez des médecins par nom ou spécialité
-  **Réservation en ligne** - Prenez rendez-vous en quelques clics
-  **Profils détaillés** - Consultez les informations complètes des médecins
-  **Design responsive** - Interface adaptée à tous les appareils
-  **UI/UX moderne** - Design élégant avec animations fluides
-  **Performance optimisée** - Chargement rapide et expérience fluide

##  Technologies utilisées

- **Frontend Framework:** React 18.2
- **Routing:** React Router v6
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React
- **HTTP Client:** Axios
- **Build Tool:** Vite 5
- **API Mock:** MockAPI.io

## Installation

### Prérequis

- Node.js >= 18.0.0
- npm >= 9.0.0

### Étapes d'installation

1. **Cloner le repository**
```bash
git clone https://github.com/votre-username/medicare-reservation.git
cd medicare-reservation
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## Structure du projet

```
medicare-reservation/
├── public/              # Fichiers statiques
├── src/
│   ├── components/      # Composants réutilisables
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── DoctorsList.jsx
│   │   ├── DoctorProfile.jsx
│   │   └── ReservationForm.jsx
│   ├── pages/          # Pages de l'application
│   │   ├── Home.jsx
│   │   ├── Reservation.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Composant principal
│   ├── main.jsx        # Point d'entrée
│   ├── App.css         # Styles globaux
│   └── index.css       # Configuration Tailwind
├── index.html          # Template HTML
├── package.json        # Dépendances
├── vite.config.js      # Configuration Vite
├── tailwind.config.js  # Configuration Tailwind
└── README.md          # Documentation
```

## Scripts disponibles

```bash
# Développement
npm run dev

# Build production
npm run build

# Preview du build
npm run preview

# Linting
npm run lint
```

## Palette de couleurs

- **Primaire:** `#2563eb` (Bleu)
- **Secondaire:** `#4f46e5` (Indigo)
- **Accent:** `#7c3aed` (Violet)
- **Success:** `#10b981` (Vert)
- **Warning:** `#f59e0b` (Orange)
- **Error:** `#ef4444` (Rouge)

## API

L'application utilise MockAPI.io pour simuler les données backend:

**Endpoint:** `https://68f9820fef8b2e621e7c4a09.mockapi.io/doctors`

## Pages de l'application

1. **Accueil** (`/`) - Page d'accueil avec hero section
2. **Réservation** (`/reservation`) - Liste des médecins avec recherche
3. **Profil Médecin** (`/doctor/:id`) - Détails du médecin
4. **Formulaire** (`/reservation-form`) - Prise de rendez-vous
5. **Services** (`/services`) - Liste des services médicaux
6. **À propos** (`/about`) - Information sur MediCare
7. **Contact** (`/contact`) - Formulaire de contact

## Fonctionnalités clés

✅ **Recherche dynamique** avec filtres
✅ **Animations fluides** et transitions
✅ **Design responsive** mobile-first
✅ **États de chargement** avec spinners
✅ **Validation de formulaires**
✅ **Navigation intuitive** avec React Router
✅ **API intégration** avec Axios
✅ **Sans localStorage** (données en mémoire)

## Contribution

Les contributions sont les bienvenues! Pour contribuer:

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence

Ce projet est sous licence MIT.

## Auteurs

- **Mohamed Meftouh** - *Développeur Principal*

## Remerciements

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Vite](https://vitejs.dev/)
- [MockAPI](https://mockapi.io/)

## Support

Pour toute question ou support:
- 📧 Email: mohamedmaftouh0@medicare.ma
- 🐛 Issues: GitHub Issues

---

Made with ❤️ by MediCareTeam