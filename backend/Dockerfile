# Multi-stage builds (permets de garder des images petites)
# Container basé sous NodeJS v18-alpine :lock:
FROM node:lts-alpine3.15 AS builder

# Place le container dans le répertoire de travail :man_mechanic:
WORKDIR /app

# Copie les fichiers .json et Prisma :wrench:
COPY *.json ./
COPY prisma ./prisma/

# Install les deps spécifiés les .json :package:
RUN npm install -g npm@8.18.0
RUN npm install

# Copie les fichiers du projets :twisted_rightwards_arrows:
COPY . .


# Build le projet dans le container :construction_site:
RUN npm run build

# Production step builds :factory:
FROM node:lts-alpine3.15

# Copy les fichiers de l'étape builder dans un nouveau container :tools:
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# Expose le port du container :electric_plug:
EXPOSE 3000

# Pour migrer les tables Prisma :point_down_tone3:
# Ne pas oublier de changer postgres par localhost dans ${DATABASE_URL}
# CMD [ "npm", "run", "start:prod" ]

# Deploie la migration et lance le service en dev :point_down_tone3:
# RUN npx prisma migrate dev --schema=./prisma/schema.prisma init
CMD [ "npm", "run", "start:migrate:dev" ]

# Deploie la migration et lance le service en prod :point_down_tone3: 
# CMD [ "npm", "run", "start:migrate:prod" ]