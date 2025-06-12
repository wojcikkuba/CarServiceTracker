# Użyj oficjalnego obrazu Node.js
FROM node:18

# Ustaw katalog roboczy
WORKDIR /app

# Skopiuj package.json i package-lock.json (jeśli masz)
COPY package*.json ./

# Zainstaluj zależności
RUN npm install

# Skopiuj resztę plików źródłowych
COPY . .

# Wystaw port
EXPOSE 3000

# Uruchom aplikację
CMD ["node", "server.js"]
