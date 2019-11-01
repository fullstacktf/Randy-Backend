# Vars
APP=randy                     
NAME=mariadb                          
TAG=1.0                                       
PORT=5000
PWD_PATH=$(pwd)
READ_LINK=$(readlink -f $0)
DIR_NAME=$(dirname ${READ_LINK})
ROOT_PATH=${DIR_NAME}
DATA_PATH=${ROOT_PATH}/data
CONFIG_PATH=${ROOT_PATH}/config

# Run container
sudo docker run --name ${APP}_${NAME} --rm -it \
	-p $PORT:3306 \
	-v ${CONFIG_PATH}/my.cnf:/etc/mysql/conf.d/my.cnf \
	-v ${CONFIG_PATH}/script.sql:/script.sql \
	-v ${CONFIG_PATH}/crearBaseDatos.sh:/crearBaseDatos.sh \
	$APP/$NAME:$TAG
