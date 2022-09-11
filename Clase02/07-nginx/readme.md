# NGINX

### Creación de un contenedor con NGINX

```
docker run -d --name nginx2-server -p 8080:80 -v D:\\Cursos\\Docker_Kubernetes_Group07\\Clase02\\07-nginx\\html:/usr/share/nginx/html nginx:alpine
```

### Otro ejemplo

```
docker run -d --name nginx2-server -p 8080:80 -v D:\\Cursos\\Docker_Kubernetes_Group07\\Clase02\\07-nginx\\html:/usr/share/nginx/html -v  D:\\Cursos\\Docker_Kubernetes_Group07\\Clase02\\07-nginx\\conf\\nginx.conf:/etc/nginx/conf.d/default.conf nginx:alpine
```

### Usando rutas relativas con terminales de tipo Linux

```
docker run -d --name nginx2-server -p 8080:80 -v $(pwd)\\html:/usr/share/nginx/html -v  $(pwd)\\conf\\nginx.conf:/etc/nginx/conf.d/default.conf nginx:alpine
```

### Usando rutas relativas con PowerShell

```
docker run -d --name nginx2-server -p 8080:80 -v ${PWD}\html:/usr/share/nginx/html -v  ${PWD}\conf\nginx.conf:/etc/nginx/conf.d/default.conf nginx:alpine
```
