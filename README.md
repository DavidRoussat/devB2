# Guide d'installation

Assurez vous de posséder les librairies et application suivantes :

- NodeJS => v16 (idéalement v16.14.2)
- python3 (idéalement v3.9)
- flask => v2 (2.0.2 ou 2.0.3)
- Faker => v9 (idéalement v9.8.3)
- random2 => v1.0.1
- pandas => v1.3.5 ou supérieur
- MongoDB => v5.0.7

### 1. Clonez ce projet

Lancez `npm install`

Puis `npm start`

### 2. Clonez le projet [IAServer](https://github.com/Arnaudboy/IAserver)

Pour lancer le projet : `cd IAserver && python3 refacto_de_randomstory.py`

### 3. Clonez le [Backend](https://github.com/DavidRoussat/Projet-Dev)

Lancez `cd jwt-project` puis `npm install`

Créer un fichier .env dans le dossier jwt-project

Collez le contenu envoyé à Clavin le 15 mai ou vous adressez à Arnaud

À la racine du dépôt lancez `node jwt-project`


<p style="color: orange">Assurez vous que le service MongoDB est bien lancé et qu'il tourne bien sur le port 27017 (si le service tourne sur un autre port modifiez le fichier .env du backend en conséquence)</p>
<p style="color: orange">Assurez vous d'utiliser les bonnes version de MongoDB, python et NodeJS. Il est possible que la version par défaut de votre OS ne soit pas la celle dont vous aurez besoin.</p>

<p style="color: forestgreen"> Le backend fonctionne sur localhost:4001</p>
<p style="color: forestgreen">Le frontend fontionne sur localhost:3000</p>
<p style="color: forestgreen">Le server d'IA fonctionne sur localhost:5000</p>
