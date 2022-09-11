# Postgres

### Creación de un contenedor con Postgres

```
docker run -d --name postgres-server -p 5432:5432 -e POSTGRES_PASSWORD=12345 -e POSTGRES_USER=super -e POSTGRES_DB=test postgres:alpine3.16
```
