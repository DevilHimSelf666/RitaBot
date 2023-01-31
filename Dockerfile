# Dockerfile
FROM node:lts-buster-slim AS build

WORKDIR /app

COPY package*.json ./

RUN npm install -g gulp  && npm ci 
COPY . .
CMD [ "npm", "run", "build" ]

FROM node:16-alpine
ENV NODE_OPTIONS="--max-old-space-size=8192 "
ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./
RUN npm ci 
COPY --from=build /app/build/ build/
ENV DATABASE_URL="./database.db"

CMD [ "node" , "./build/bot.js" ]