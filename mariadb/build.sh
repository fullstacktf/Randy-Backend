# build.sh

# Vars
APP=randy
NAME=mariadb
TAG=1.0
PORT=5000

# Build docker container
sudo docker build -t $APP/$NAME:$TAG .

# Run container
sudo docker run --rm -it \
	-p $PORT:3306 \
	$APP/$NAME:$TAG
