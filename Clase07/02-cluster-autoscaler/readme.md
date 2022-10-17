# Cluster Autoscaler

### Descargar el manifiesto del cluster autoscaler

```
curl -o cluster-autoscaler-autodiscovery.yaml https://raw.githubusercontent.com/kubernetes/autoscaler/master/cluster-autoscaler/cloudprovider/aws/examples/cluster-autoscaler-autodiscover.yaml
```

### Aplicar el manifiesto

```
kubectl apply -f cluster-autoscaler-autodiscovery.yaml
```

### Editar el manifiesto del deployment del cluster autoscaler

```
kubectl edit deployment.apps/cluster-autoscaler -n kube-system
```

Modificar y/o agregar

- Indicar el nombre del cluster <YOUR CLUSTER NAME>
- Agregar los siguientes comandos:
  - \- --balance-similar-node-groups
  - \- --skip-nodes-with-system-pods=false
  - \- --scale-down-unneeded-time=5m
    _No usar tabs cuando editen el archivo. Usen spaces._
