# Pods

### Ejecutar un manifiesto

```
kubectl apply -f 01-pod.yaml
```

### Listar pods

```
kubectl get pods
kubectl get po
```

### Información del pod

```
kubectl get po <nombre del pod> -o yaml
kubectl get po <nombre del pod> -o json
```

### Descripción del pod

```
kubectl describe po <nombre del pod>
```

### Obtener el log de un pod

```
kubectl logs <nombre del pod>
```

### Para eliminar un pod

```
kubectl delete po <nombre del pod>
```

### Para eliminar un manifiesto

```
kubectl delete -f <ruta y nombre del manifiesto>
```

### Para listar pods con sus etiquetas

```
kubectl get pod --show-labels
kubectl get pod --show-labels -l env=dev
```
