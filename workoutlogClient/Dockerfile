#Using the latest version of node 8 as my base image
FROM node:8

#Updating all the packages in the image...This isn't really necessary but its a best practice I generally follow
RUN apt-get update && apt-get upgrade -y

#Setting our working directory so we dont have specify the full filepath everytime
#If we didnt set this, the 1st copy for example command would need to be "COPY bower_components /usr/src/app/bower_components"
WORKDIR /usr/src/app

#Copying all of your application files into the docker container. Directories need to be speified individually
COPY bower_components ./bower_components
COPY user ./user
COPY workouts ./workouts
COPY index.html bower.json app.js package.json package-lock.json ./

#Install necessary packages, and bower since its not in the package.json
RUN npm install && npm install --global bower

#Install bower packages
RUN bower install --allow-root

#Expose this over port 300
EXPOSE 3000

CMD ["node", "app.js"]