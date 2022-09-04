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
