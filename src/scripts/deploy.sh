#! bin/bash

echo "\n ======================================== \n"

echo "\n Desplegando proyecto \n \n"

echo "\n Voy a comprobar que tengo la última imagen del backend del docker actualizada, un momento por favor... \n \n "

docker-compose pull backend

echo "\n \n OKAY, paso a levantar la API \n \n "

docker-compose up
