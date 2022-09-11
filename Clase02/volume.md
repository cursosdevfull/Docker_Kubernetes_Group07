# Volúmenes

### Trabajando con un volumen host

```
docker run -d -p 27017:27017 --name mongo-server -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=12345 -e MONGO_INITDB_ROOT_PASSWORD=12345 -v D:\\Cursos\\Docker_Kubernetes_Group07\\Clase02\\04-mongo\\db:/data/db mongo:4.2-bionic
```

### Crear un volumen nombrado

```
docker volume create vol-html
```

### Listar volúmenes nombrados y anónimos

```
docker volume ls
```
