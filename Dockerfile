# Dockerfile

# Base Image for Building
FROM node:lts-buster-slim AS build

# Working Directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install Production Dependencies and Build Tools
RUN yarn global add gulp && yarn --frozen-lockfile

# Copy Source Code
COPY . .

# Build Command
CMD [ "yarn", "run", "build" ]

# Production Image
FROM node:16-alpine

# Set Node Options
ENV NODE_OPTIONS="--max-old-space-size=8192 "

# Set Environment Variable
ENV NODE_ENV=production

# Working Directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install Production Dependencies and PM2
RUN yarn --frozen-lockfile global add pm2 && yarn --frozen-lockfile --production

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
