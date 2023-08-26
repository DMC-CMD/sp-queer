FROM node:18-alpine AS builder
ENV NODE_ENV=production
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install
COPY . .

USER root
RUN npm install react-scripts@3.0.1 -g --silent
RUN npm install -g serve --save

CMD [ "yarn", "prod" ]