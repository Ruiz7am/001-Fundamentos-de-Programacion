## Final de linea en Git

Para poder pasar a una linea siguiente, el OS utiliza caracteres especiales para poder guardarlo en el disco duro.

<br>

- **Windows.**  
  **\r** : Carriage return  
  **\n** : Line feed

- **GNU/Linux y MacOS.** 
  **\n** : Line feed

<br>

En git es posible configurar el comportamiento dependiendo nuestro sistema operativo; esto lo podemos hacer configurando la propiedad:

```console
user:~ $ git config --global core.autocrlf
```

Se debe configurar esta propiedad para que los diferentes sistemas operativos puedan reconocer los saltos de línea.  

<br>

Windows al trabajar con r\ (carriage return) con los saltos de linea cuando pide el codigo guardado por un desarrollador que trabaja en linux (y que este OS trabaja con \n (line feed)) windows no podra detectar los saltos de linea, por lo que git debe de agregar el carriage return para que lo pueda hacer, lo mismo pasa al lado contrario, cuando un desarrollador que trabaja con linux hace la petición del codigo que fue guardado por el desarrollador de windows, tiene que quitar el carriage return.

<br>

![line-feed-git](.imagenes/git-line-feed.png)

<br>

Entonces la configuración se haria de la siguiente manera:

<br>

- **Para windows:**

```console
user:~ $ git config --global core.autocrlf true
```

<br>

- **Para GNU/Linux y MacOS:**

```console
user:~ $ git config --global autocrlf input
```

## Ayuda en Git

Para poder obtener ayuda en git, se hace de la misma manera que con los comandos en bash, tenemos que pasar el comando `git config` con el parametro `--help` de la siguiente forma:

<br>

```console
user:~ $ git config --help
```

<br>

- En **linux y mac** obtendremos la ayuda como las paginas de manual del **comando man** de linux:

<br>

![git-help-linux-mac](.imagenes/git-help-linux-mac.png)

<br>
<br>

- En **windows** obtendremos una **pagina html** en el navegador:

<br>

![git-help-windows](.imagenes/git-help-windows.png)

<br>
<br>

- Para una ayuda mas breve, podemos escribir:
  
<br>

```console
user:~ $ git config -h

```
<br>

Que, tanto en windows como en linux, mostrará la ayuda de manera mas resumida.

<br>

```console
user:~ $ git config -h
usage: git config list [<file-option>] [<display-option>] [--includes]
   or: git config get [<file-option>] [<display-option>] [--includes] [--all] [--regexp] [--value=<value>] [--fixed-value] [--default=<default>] <name>
   or: git config set [<file-option>] [--type=<type>] [--all] [--value=<value>] [--fixed-value] <name> <value>
   or: git config unset [<file-option>] [--all] [--value=<value>] [--fixed-value] <name> <value>
   or: git config rename-section [<file-option>] <old-name> <new-name>
   or: git config remove-section [<file-option>] <name>
   or: git config edit [<file-option>]
   or: git config [<file-option>] --get-colorbool <name> [<stdout-is-tty>]
```