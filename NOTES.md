# Notes du Projet - Gestion & CI/CD

## 🛠️ Résolution de Conflit (Partie 6)
- **Cause** : Modification simultanée de la ligne 24 (`<div class="logo">`) sur les branches `main` et `develop`.
- **Action** : 
    1. Tentative de merge de `main` vers `develop`.
    2. Identification des balises de conflit `<<<<<<<`, `=======`, `>>>>>>>`.
    3. Choix manuel de la version finale : `FutureCore PRO`.
    4. Validation du merge avec `git commit`.

## 📦 Livrables du TP
1. **CONTRIBUTING.md** : Créé avec les règles de branches et de commits.
2. **Issues** : Créées sur GitHub (Section contact, Logs, Responsive).
3. **Board Project** : Kanban mis en place sur GitHub.
4. **CI/CD** : Workflow GitHub Actions configuré dans `.github/workflows/node-ci.yml`.
5. **Branches** : Structure `main`, `develop` et `feat/contact-section` respectée.

## 🚀 Prochaines étapes suggérées
- Ajouter un vrai système de base de données.
- Déployer sur une plateforme supportant Node.js (ex: Render, Fly.io).
