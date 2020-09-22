FROM node:lts-alpine as develop-stage

LABEL maintainer="Guilherme Mascarenhas Barbosa <gmascb@gmail.com>"

RUN npm install -g http-server

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install vue && npm install vuetify
RUN npm install sass sass-loader fibers deepmerge -D

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "http-server", "dist" ]