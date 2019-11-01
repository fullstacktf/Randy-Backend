FROM node:12.13.0-alpine
WORKDIR /usr/src/app
COPY . . 
RUN npm ci
EXPOSE 8080
CMD ["npm","start"]