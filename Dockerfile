FROM node:lts-slim AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:lts-slim AS run
WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/build ./build

RUN npm install --production

RUN chown -R nobody:nogroup /app

EXPOSE 3000

USER nobody

CMD ["npm", "run", "start"]
