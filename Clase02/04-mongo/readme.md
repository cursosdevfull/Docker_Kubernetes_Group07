# MongoDB

### Creación de un contenedor con MongoDB

```
docker run -d -p 27017:27017 --name mongo-server -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=12345 -e MONGO_INITDB_ROOT_PASSWORD=12345 mongo:4.2-bionic
```
