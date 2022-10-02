# Kubectl

### Para crear un pod

```
kubectl run server --image=nginx:alpine
```

### Para conectar a un pod desde fuera del contexto

```
kubectl port-forward server 7000:80
```

### Comandos básicos

```
kubectl version
kubectl api-resources
kubectl api-versions
```
