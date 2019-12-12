#! bin/bash

echo "Desplegando proyecto"

echo "Voy a comprobar que tengo la última imagen del backend del docker actualizada, un momento por favor..."

docker-compose pull backend

echo "OKAY, paso a levantar la API"

docker-compose up
