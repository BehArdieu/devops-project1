# Utiliser une image Node.js officielle comme base
FROM node:14

# Créer un répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json (si présent)
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install

# Copier tout le reste de l'application
COPY . .

# Exposer le port sur lequel l'application va tourner
EXPOSE 3000

# Définir la commande pour démarrer l'application
CMD ["npm", "start"]
