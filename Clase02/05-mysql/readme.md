# MySQL

### Creación de un contenedor con MySQL

```
docker run -d --name mysql-server -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_DATABASE=app-db -e MYSQL_USER=Sergio -e MYSQL_PASSWORD=4321 -p 4000:3306 mysql:8
```
