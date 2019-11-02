FROM debian:buster-slim

RUN apt-get update && apt-get install -y mariadb-server

# Borramos esta configuración para sustituirla y que nos podamos conectar de manera remota
RUN rm -rf etc/mysql/mariadb.conf.d/50-server.cnf
COPY ./config/50-server.cnf /etc/mysql/mariadb.conf.d/50-server.cnf

# Copy docker-entrypoint.sh file to Docker container.
COPY docker-entrypoint.sh /docker-entrypoint.sh

EXPOSE 3306
ENTRYPOINT ["sh", "/docker-entrypoint.sh"]

