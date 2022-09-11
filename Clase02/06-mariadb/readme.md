# MariaDB

### Creación de un contenedor con MariaDB

```
docker run -d --name mariadb-server -e MARIADB_ROOT_PASSWORD=12345 -e MARIADB_DATABASE=app-db -e MARIADB_USER=Sergio -e MARIADB_PASSWORD=4321 -p 5000:3306 mariadb:10.8.4
```
