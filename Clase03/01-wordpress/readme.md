# WordPress

### Volúmenes y red

```
docker volume create vol-mysql
docker volume create vol-wp
docker network create net-wp -d bridge
```

### Contenedor con MySQL

```
docker run -d --name mysql-server -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_DATABASE=app-db -e MYSQL_USER=Sergio -e MYSQL_PASSWORD=4321 -v vol-mysql:/var/lib/mysql --network net-wp mysql:8
```

### Contenedor con WordPress

```
docker run -d --name wordpress-ws -p 8080:80 --network net-wp -e WORDPRESS_DB_HOST=mysql-server -e WORDPRESS_DB_USER=Sergio -e WORDPRESS_DB_PASSWORD=4321 -e WORDPRESS_DB_NAME=app-db -v vol-wp:/var/www/html wordpress:6
```

### Contenedor de PhpMyAdmin

```
docker run -d --name phpmyadmin -p 8090:80 -e PMA_HOST=mysql-server --network net-wp phpmyadmin:5.2
```
