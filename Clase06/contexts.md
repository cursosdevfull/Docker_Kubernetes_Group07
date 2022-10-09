# Contextos

### Contexto actual

```
kubectl config current-context
```

### Listar contextos

```
kubectl config view
```

### Crear un contexto

```
kubectl config set-context ctx-my-app --cluster=docker-desktop --user=docker-desktop
```

### Cambiar de contexto

```
kubectl config use-context docker-desktop
```
