# 🏥 MediCare - Plateforme de Réservation Médicale

Une application web moderne pour la réservation de consultations médicales en ligne.

![MediCare Banner](https://via.placeholder.com/1200x400/2563eb/ffffff?text=MediCare)

## Fonctionnalités

- **Recherche avancée** - Trouvez des médecins par nom ou spécialité
- **Réservation en ligne** - Prenez rendez-vous en quelques clics
- **Profils détaillés** - Consultez les informations complètes des médecins
- **Design responsive** - Interface adaptée à tous les appareils
- **UI/UX moderne** - Design élégant avec animations fluides
- **Performance optimisée** - Chargement rapide et expérience fluide

## Technologies utilisées

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

## 🎨 Palette de couleurs

- **Primaire:** `#2563eb` (Bleu)
- **Secondaire:** `#4f46e5` (Indigo)
- **Accent:** `#7c3aed` (Violet)
- **Success:** `#10b981` (Vert)
- **Warning:** `#f59e0b` (Orange)
- **Error:** `#ef4444` (Rouge)

## API

L'application utilise MockAPI.io pour simuler les données backend:

**Endpoint:** `https://68f9820fef8b2e621e7c4a09.mockapi.io/doctors`

### Exemple de données médecin:

```json
{
  "id": "1",
  "name": "Dr. Amal Benkirane",
  "specialty": "Cardiologue",
  "photo": "https://randomuser.me/api/portraits/women/44.jpg",
  "description": "Spécialiste en cardiologie...",
  "email": "amal.benkirane@medicare.ma",
  "phone": "+212 6 12 34 56 78",
  "location": "Casablanca, Maroc",
  "experience": "10 ans",
  "education": "Doctorat en Médecine",
  "languages": ["Français", "Arabe", "Anglais"],
  "availability": "Lun - Ven: 9h - 18h"
}
```

## Configuration

### Variables d'environnement

Créez un fichier `.env` à la racine:

```env
VITE_API_URL=https://68f9820fef8b2e621e7c4a09.mockapi.io
```

## Pages de l'application

1. **Accueil** (`/`) - Page d'accueil avec hero section
2. **Réservation** (`/reservation`) - Liste des médecins avec recherche
3. **Profil Médecin** (`/doctor/:id`) - Détails du médecin
4. **Formulaire** (`/reservation-form`) - Prise de rendez-vous
5. **Services** (`/services`) - Liste des services médicaux
6. **À propos** (`/about`) - Information sur MediCare
7. **Contact** (`/contact`) - Formulaire de contact

## Fonctionnalités à venir

- [ ] Authentification utilisateur
- [ ] Gestion des rendez-vous
- [ ] Notifications par email
- [ ] Chat en direct avec les médecins
- [ ] Système de paiement en ligne
- [ ] Application mobile (React Native)
- [ ] Téléconsultation vidéo
- [ ] Historique médical

## Contribution

Les contributions sont les bienvenues! Pour contribuer:

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## Auteurs

- **Mohamed Meftouh** - *Développeur Principal* - [@votre-username](https://github.com/votre-username)

## Remerciements

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Vite](https://vitejs.dev/)
- [MockAPI](https://mockapi.io/)

## Support

Pour toute question ou support:
- Email: mohamedmaftouh@gmail.com
- Issues: [GitHub Issues](https://github.com/votre-username/medicare-reservation/issues)

---

Made with ❤️ by MediCareTeam