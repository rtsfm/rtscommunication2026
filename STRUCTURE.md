# Structure du Projet RTS Communication

Ce document décrit l'organisation des dossiers et fichiers du site web RTS Communication.

## 📁 Structure des Dossiers

```
rtscommunication2026/
├── index.html              # Page d'accueil principale
├── css/                    # Tous les fichiers CSS
│   ├── base/              # Styles de base et fondations
│   │   ├── reset.css      # Reset/normalisation CSS
│   │   ├── variables.css  # Variables CSS (couleurs, espacements, etc.)
│   │   └── typography.css # Styles typographiques
│   ├── components/        # Styles des composants réutilisables
│   │                      # (boutons, cartes, formulaires, etc.)
│   ├── layouts/           # Styles de mise en page
│   │   ├── header.css     # En-tête et navigation
│   │   └── footer.css     # Pied de page
│   └── pages/             # Styles spécifiques aux pages
│       └── home.css       # Styles de la page d'accueil
├── js/                    # Fichiers JavaScript
│   └── main.js           # Script JavaScript principal
├── assets/                # Ressources statiques
│   ├── images/           # Images (photos, illustrations)
│   ├── fonts/            # Polices personnalisées
│   └── icons/            # Icônes et SVG
└── pages/                # Pages HTML additionnelles
```

## 🎨 Organisation du CSS

### Base (`css/base/`)
Contient les styles fondamentaux qui s'appliquent à tout le site :
- **reset.css** : Normalise les styles par défaut des navigateurs
- **variables.css** : Définit les variables CSS réutilisables (couleurs, tailles, espacements)
- **typography.css** : Styles de base pour la typographie (polices, titres, paragraphes)

### Components (`css/components/`)
Pour les composants réutilisables comme :
- Boutons
- Cartes (cards)
- Formulaires
- Modales
- Alertes
- Etc.

### Layouts (`css/layouts/`)
Pour la structure générale des pages :
- **header.css** : En-tête et navigation
- **footer.css** : Pied de page
- Autres layouts (sidebar, grid, etc.)

### Pages (`css/pages/`)
Styles spécifiques à chaque page :
- **home.css** : Page d'accueil
- À venir : about.css, services.css, contact.css, etc.

## 🚀 Comment Utiliser

### Ajouter un nouveau composant
1. Créer un fichier dans `css/components/` (ex: `button.css`)
2. L'inclure dans `index.html` : `<link rel="stylesheet" href="css/components/button.css">`

### Ajouter une nouvelle page
1. Créer le fichier HTML dans `pages/` (ex: `services.html`)
2. Créer le CSS associé dans `css/pages/` (ex: `services.css`)
3. Lier les fichiers CSS de base + le CSS spécifique de la page

### Ajouter des images
1. Placer les images dans `assets/images/`
2. Référencer dans HTML : `<img src="assets/images/mon-image.jpg" alt="Description">`

## 📝 Bonnes Pratiques

1. **Nommage des fichiers** : Utiliser des noms descriptifs en minuscules avec tirets (ex: `contact-form.css`)
2. **Organisation CSS** : Suivre l'ordre : base → layout → components → pages
3. **Commentaires** : Commenter les sections importantes du code
4. **Responsive** : Penser mobile-first et utiliser les media queries
5. **Variables CSS** : Utiliser les variables définies dans `variables.css` pour la cohérence

## 🔧 Ordre de Chargement des CSS

Respecter cet ordre dans les fichiers HTML :
1. reset.css
2. variables.css
3. typography.css
4. layouts (header, footer)
5. components
6. pages

## 📦 Assets

- **images/** : Tous les fichiers image (.jpg, .png, .svg, .gif)
- **fonts/** : Polices personnalisées (.woff, .woff2, .ttf)
- **icons/** : Icônes et fichiers SVG réutilisables

## 🌐 Navigation

Le fichier `js/main.js` gère :
- Navigation fluide (smooth scroll)
- Interactions utilisateur de base
- À compléter selon les besoins

## ✅ Prochaines Étapes

- [ ] Ajouter des composants dans `css/components/`
- [ ] Créer des pages supplémentaires dans `pages/`
- [ ] Ajouter des images dans `assets/images/`
- [ ] Développer les fonctionnalités JavaScript
- [ ] Optimiser pour les performances
