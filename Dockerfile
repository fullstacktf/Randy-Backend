FROM node:12.13.0-alpine
WORKDIR /usr/src/app
COPY . . 
RUN ls
RUN npm install
RUN ls
EXPOSE 8080
CMD ["ls"]
