# 1ER STAGE: BUILD
FROM node:16.13.1-alpine as BUILD

WORKDIR /build

COPY app-sample/package.json .

RUN npm install

COPY app-sample .

RUN npm run build --prod

# 2DO STAGE: RUNTIME
FROM nginx:1.21.3-alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=BUILD /build/dist/app-sample /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]