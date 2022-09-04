# Images

### Listar imágenes

```
docker images
```

### Filtrar un listado

```
docker images | grep redis
```

### Inspeccionar una imagen

```
docker image inspect hello-world
docker image inspect redis:7.0.0-alpine
```

### Eliminar una imagen

```
docker rmi busybox:latest
```
