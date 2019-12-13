USER=rubenzagon
NAMEIMAGE=randybackend

NAMEDOCKER=rbackend

echo "Verificando si hay actualización de la imagen de docker"

docker pull -a $USER/$NAMEIMAGE

echo "Levantando docker, un momento por favor ..."

docker run --rm -d --name $NAMEDOCKER $USER/$NAMEIMAGE

echo "IP del docker..."

docker inspect --format '{{ .NetworkSettings.IPAddress }}' $NAMEDOCKER

