# Contenedores

### Crear un contenedor sin ejecutarlo

```
docker create --name <nombre contenedor> <nombre de la imagen>:<tag o version>
```

### Ejecutar un contenedor

```
docker start <nombre del contenedor | identificador del contenedor>
```

### Listar contenedores ejecutándose

```
docker ps
docker ps | grep sonar
```

### Listar contenedores ejecutándose o detenidos

```
docker ps -a
```

### Detener un contenedor

```
docker stop <nombre contenedor>
```

### Crear y ejecutar un contenedor

```
docker run <nombre imagen>:<tag>
```

### Crear y ejecutar un contenedor con nombre

```
docker run --name <nombre contenedor> <nombre imagen>:<tag>
```

### Eliminar un contenedor detenido

```
docker rm <nombre contenedor | identificador>
```

### Eliminar un contenedor ejecutándose

```
docker stop <nombre contenedor | identificador>
docker rm <nombre contenedor | identificador>

docker rm -f <nombre contenedor | identificador>
```
