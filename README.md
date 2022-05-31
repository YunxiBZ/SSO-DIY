# SSO _Do It Yourself_

Objectif technique : implémenter un système d'[authentification fédérée](https://en.wikipedia.org/wiki/Federated_identity) entre plusieurs services (sites web), chacun sur son nom de domaine.

Objectif pédagogique : clarifier/réviser les technologies & bonnes pratiques (code, sécurité) _fondamentales_ du développement web.

## Déroulé

Révision sur les premières [notions](./NOTIONS.md) :

- client/serveur
  - HTTP
- identité & persistence d'un état entre requêtes/services
  - cookie

---

Création d'un docker-compose.yml pour se doter d'un réseau internet « local » (utilisation d'un reverse-proxy et de noms de domaine *.test).

---

Créer un service pour le serveur central d'authentification (sso-server) => http://sso-server.test

Implémentation rudimentaire avec Express.js