# Use Node LTS slim version as builder
FROM node:lts-slim as build
WORKDIR /app
COPY package*.json ./
RUN rm -rf node_modules
RUN rm -rf build
COPY . .
RUN npm install
RUN npm run build

# Setup runner and NGINX
FROM node:lts-slim as run
WORKDIR /app

# Install NGINX
RUN apt-get update && apt-get install -y nginx

# Copy built application and configuration
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/build ./build
COPY /conf/nginx.conf /etc/nginx/sites-available/default

# Install dependencies
RUN npm install --production

# Expose port
EXPOSE 3000

CMD service nginx start && npm run start
