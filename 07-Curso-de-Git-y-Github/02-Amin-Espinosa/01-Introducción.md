# Fundamentos de Git y Control de versiones

## Configuración inicial de Git: init y config

Revisar la versión de git
```shell
git --version
```

Iniciar un repositorio
```sh
git init
```

Cambiar el nombre de la rama por defecto
```sh
git config --global init.defaultBranch main
```

Configurar la rama principal
```sh
git branch -m main
```

Recibir un referente de los comandos en git
```sh
git --help
```

Configurar usuario
```sh
git config --global user.name "Armando Ruiz"
```

Configurar email
```sh
git config --global user.email "artmx@proton.me"
```

Ver configuración
```sh
git config --list
```

## Comandos básicos de Git: add, commit y log

Revisar el trabajo en progreso, la rama actual en la que se esta trabajando, los ficheros trackeados y no trackeados
```sh
git status 
```

Pasar ficheros a la etapa de stage en donde se trackean los cambios
```sh
git add file.txt
# Todos los ficheros
git add .
```

Regresar fichero a no trackeados
```sh
git rm --cached
```

Enviar fichero a repositorio
```sh
git commit -m "mensaje"
```

Mostrar bitacora de los commits
```sh
git log
```

![staging](./assets/Screenshot%202025-02-10%20102802.png)

![staging](./assets/Screenshot%202025-02-10%20102920.png)

## Ramas y fusión de cambios: branch, merge, switch y checkout

Ver ramas
```sh
git branch
```

Crear una nueva rama
```sh
git checkout -b nuevaRama
```

Cambiar de rama
```sh
git checkout main
```

Nuevo comando para cambiar de rama
```sh
git switch main
```

Unir ramas
```sh
git merge nuevaRama
```

Eliminar rama
```sh
git branch -D nuevaRama
```

## Volviendo el tiempo con Git: reset y revert

El comando _**reset**_ te devuelve a un commit anterior, eliminando los cambios en el historial como si nunca huberan ocurrido.

Por otro lado _**revert**_ crea un nuevo commit que revierte los cambios realizados por un commit específico.

```sh
git reset
```