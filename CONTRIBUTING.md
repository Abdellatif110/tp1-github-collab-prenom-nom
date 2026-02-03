# Guide de Contribution

Merci de contribuer à **FutureCore** ! Pour maintenir la qualité du projet, merci de respecter les règles suivantes.

## 🌿 Conventions de Branches

Nous utilisons une structure basée sur les types de modifications :
- `feat/description` : Nouvelles fonctionnalités (ex: `feat/contact-form`)
- `fix/description` : Corrections de bugs (ex: `fix/responsive-header`)
- `docs/description` : Documentation (ex: `docs/readme-update`)
- `chore/description` : Tâches de maintenance (ex: `chore/npm-install`)

## 💬 Conventions de Commits

Nous suivons le format **Conventional Commits** :
- `feat:` : Une nouvelle fonctionnalité
- `fix:` : Une correction de bug
- `docs:` : Modifications de la documentation
- `style:` : Changements CSS/UI qui n'affectent pas la logique
- `refactor:` : Modification du code qui ne corrige ni ne rajoute de fonction

Exemple : `feat: ajout de la validation du formulaire de contact`

## 🚀 Processus de travail

1. **Fork & Clone** : Forkez le projet sur GitHub et clonez-le localement.
2. **Branche** : Créez une branche à partir de `develop` en suivant les conventions.
3. **Développement** : Implémentez vos changements.
4. **Vérification** : Assurez-vous que le serveur démarre avec `npm start`.
5. **Pull Request** :
   - Ouvrez une PR vers la branche `develop`.
   - Décrivez clairement vos modifications.
   - Liez l'issue correspondante (ex: `Closes #1`).
   - La PR doit être validée par au moins **1 reviewer** (collaborateur).
   - Les tests CI (GitHub Actions) doivent passer (être au vert).

## 🛠️ Validation du code
- Respectez l'indentation de 4 espaces.
- Commentez les fonctions complexes dans le backend.
