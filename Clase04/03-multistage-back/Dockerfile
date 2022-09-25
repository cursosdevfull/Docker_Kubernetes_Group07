FROM node:16.13.1-alpine as BUILD

WORKDIR /build

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:16.13.1-alpine

WORKDIR /app

COPY --from=BUILD /build/package.json .
COPY --from=BUILD /build/node_modules ./node_modules
COPY --from=BUILD /build/cache ./cache

CMD ["npm", "run", "start"]