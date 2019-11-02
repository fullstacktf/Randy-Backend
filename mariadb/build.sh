# build.sh

# Vars
APP=randy
NAME=mariadb
TAG=1.0

# Build docker container
sudo docker build -t $APP/$NAME:$TAG .

echo "Finalizada imagen de docker con nombre $APP/$NAME:$TAG \n"

sudo docker images
