# Sonarqube

### Red

```
docker network create net-sonarqube -d bridge
```

### Server

```
docker run -d -p 9000:9000 -p 9092:9092 --name sonarqube-server sonarqube:8.9-community
```

### Sonar Scanner (Local)

```
sonar-scanner -D"sonar.projectKey=example" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9000" -D"sonar.login=3957069e9e9a6413804159817d9d8b2d01073ec4"
```

### Sonar Scanner (Contenedor)

```
docker run --rm -e SONAR_HOST_URL="http://sonarqube-server:9000" -e SONAR_LOGIN="3957069e9e9a6413804159817d9d8b2d01073ec4" -v "${PWD}:/usr/src" --network net-sonarqube sonarsource/sonar-scanner-cli -D"sonar.projectKey=example"
```

### Agregar a red existente

```
docker network connect net-sonarqube sonarqube-server
```
