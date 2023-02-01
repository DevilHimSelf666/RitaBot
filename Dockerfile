# Dockerfile

# Base Image for Building
FROM node:lts-buster-slim AS build

# Working Directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Production Dependencies and Build Tools
RUN npm install -g gulp  && npm ci --only=production 

# Copy Source Code
COPY . .

# Build Command
CMD [ "npm", "run", "build" ]

# Production Image
FROM node:16-alpine

# Set Node Options
ENV NODE_OPTIONS="--max-old-space-size=8192 "

# Set Environment Variable
ENV NODE_ENV=production

# Working Directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Production Dependencies and PM2
RUN npm ci --only=production  && npm install -g pm2

# Copy Build Artifacts
COPY --from=build /app/build/ build/

# Set Database URL
ENV DATABASE_URL="./database.db"

# Add Non-Root User
RUN adduser -D discord

# Switch to Non-Root User
USER discord

# Start Command
CMD [ "pm2-runtime" , "./build/bot.js" ]