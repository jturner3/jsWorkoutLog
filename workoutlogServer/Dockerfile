#Using the latest version of node 8 as my base image
FROM node:8

RUN apt-get update -y && apt-get upgrade -y

WORKDIR /usr/src/app
COPY config ./config
COPY middleware ./middleware
COPY routes ./routes
COPY models ./models
COPY app.js db.js package.json ./

RUN npm install

EXPOSE 8080

CMD ["node", "app.js"]