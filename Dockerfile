FROM node:18-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

ENTRYPOINT ["node", "dist/index.js"]