# APACHE

### Creación de un contenedor con APACHE con volumen nombrado

```
docker run -d --name apache-server -p 8090:80 -v vol-html:/usr/local/apache2/htdocs/ httpd:alpine3.16
```

_\\wsl$\docker-desktop-data\data\docker\volumes\vol-html_data_

### Creación de un contenedor con APACHE con volumen anónimo

```
docker run -d --name apache-server -p 8090:80 -v /usr/local/apache2/htdocs/ httpd:alpine3.16
```
