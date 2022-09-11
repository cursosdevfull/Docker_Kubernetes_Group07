# Redes

### Listar redes

```
docker network ls
```

### Crear una red de tipo bridge

```
docker network create <nombre red> -d bridge
```

### Para conectar un contenedor a una red

```
docker network connect red-curso nginx-server
```

### Para crear un contenedor asociado a una red

```
docker run -d --name apache-server -p 8100:80 --network red-curso httpd:alpine3.16
```

### Para listar los contenedores de una misma red

```
docker network inspect red-curso
```
