FROM node:12.13.0-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . . 
EXPOSE 8080
CMD [ "node", "server.js" ]