wcs-chat
========

### Description
Projet WCS Création d'un Chat

### Pré-requis
Avoir "composer" d'installé ==> https://getcomposer.org/doc/00-intro.md

### Initialisation du Projet
1. **SSH** git clone git@github.com:AppleTim/WCS_Chat.git
2. **HTTPS** git clone https://github.com/AppleTim/WCS_Chat.git
3. cd WCS_Chat
4. composer install
5. php app/console doctrine:database:create
6. php app/console doctrine:schema:update --force
7. php app/console asset:install

A Symfony project created on July 28, 2016, 3:07 pm.
