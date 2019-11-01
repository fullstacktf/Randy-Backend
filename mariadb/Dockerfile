FROM debian:buster-slim

RUN apt-get update && apt-get install -y mariadb-server
RUN service mysql start

#VOLUME /var/lib/mysql

# Copy docker-entrypoint.sh file to Docker container.
COPY docker-entrypoint.sh /docker-entrypoint.sh

EXPOSE 3306
ENTRYPOINT ["sh", "/docker-entrypoint.sh"]

