# Docker Compose

### Para ejecutar todos los servicios

```
docker compose up
```

### Para detener todos los servicios

```
docker compose down
```

### Para ejecutar todos los servicios sin vincularse

```
docker compose up -d
```

### Para revisar el estado de los contenedores

```
docker compose ps
```

### Para ejecutar un archivo de Docker Compose en una ubicación distinta y con un nombre distinto

```
docker compose -f config/docker-wordpress.yaml up -d
```

### Para ejecutar un único servicio

```
docker compose run --rm composer-service create-project --prefer-dist laravel/laravel .
composer --ignore-platform-reqs create-project --prefer-dist laravel/laravel .
composer create-project laravel/laravel example-app
```

### Para ejecutar el artisan

```
docker compose run --rm artisan-service migrate
php /var/www/html/artisan migrate
```

### Para instalar una librería para el frontend

```
docker compose run --rm nodejs-service install bootstrap
npm install bootstrap
```

### Para reconstruir las imágenes personalizadas

```
docker compose up -d --build
```
