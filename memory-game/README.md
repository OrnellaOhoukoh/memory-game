# 420-W12-SU - Programmation Web 2



**================================ Membres du groupe 1 ================================**

                                OHOUKOH Akom Ornella Francisca
                                RIAHI Kadhem
                                TOURE Yacine

**=====================================================================================**


## Installation

Créer le dépôt GIT vide (pas de README ou .gitignore à la racine) **programmation-web-2** sur [bitbucket](https://bitbucket.org/) en utilisant le courriel de l'école.

Ajouter les droits en lecture pour votre professeur: martin.vachon@isi-mtl.com

Cloner votre dépôt GIT dans le répertoire /vsc-workspace de façon à obtenir la structure suivante:

```
/vsc-workspace
    programmation-web/                  --> 420-D08-SU HTML / CSS
    programmation-web-1/                --> 420-W10-SU HTML5 / CSS3
    programmation-web-2/                --> 420-W11-SU JavaScript
    programmation-web-3/                --> 420-W12-SU PHP
    structure-logicielle/               --> 420-W13-SU JavaScript / NodeJs / React
```

***Ajouter la référence au cours:***

**================================ ATTENTION ================================**

    Remplacer la partie 'VOTRE NOM D'USAGER BITBUCKET' par votre nom d'usager bitbucket.

**================================ ATTENTION ================================**

`git remote add upstream https://VOTRE NOM D'USAGER BITBUCKET@bitbucket.org/isiteachers/programmation-web-2_a21.git`

- Note 1: Votre nom d'usager bitbucket est visible en consultant votre profil (icône au bas gauche de l'écran)
- Note 2: Si la commande contient des erreurs, la prochaine opération (importer le cours dans votre dépôt GIT) ne fonctionnera pas. Pour corriger la situation, utiliser la commande: `git remote rm upstream` et re-exécuter la commande précédente sans erreur.

***Importer le cours dans votre repository:***

`git pull upstream master --allow-unrelated-histories`

## Installer les dépendances

La première fois seulement vous devez installer les dépendances:

`npm install`

## Utiliser le upstream (repository du professeur)

Importer les mises à jour du cours ou les nouveaux exercices:

`git pull upstream master`

