# Instalación y configuración de Git.

1. Vamos al website de Git: https://git-scm.com/ y lo descargamos:
   
   ![git-website](.imagenes/git-website.png)

<br>

2. Lo instalamos dejando todo por default:
   
   ![git-exe](.imagenes/git-exe.png)

<br>

3. Abrimos una terminal para la configuración:

   La configuración consta de 3 niveles:
   
   - Sistema: todos los usuarios van autilizar el nombre, correo y editor de texto configurado. **TODOS LOS USUARIOS Y REPOSITORIOS DEL EQUIPO**
   - Global: todos los repositorios de un usuario especifico va a utilizar el nombre, correo y editor que indiquemos. **PARA TODOS LOS REPOSITORIOS DEL EQUIPO** 
   - Local: todos los datos que configuremos (usuario, correo y editor) sera para ese repositorio en especifico. **SOLO EL REPOSITORIO Y USUARIO ESPECIFICO**

<br>

![git-bash](.imagenes/git-bash.png)

4. Ingresamos los siguientes comandos para agregar Nombre de usuario, correo y editor de texto.
   
```console
User:~ $ git config --global user.name "Silverio Durango"

User:~ $ git config --global user.email artmx@proton.me

User:~ $ git config --global core.editor "code --wait"
```

   - tambien podemos ejecutar este comando para poder editar el fichero que git edita con los comandos anteriores para poder editarlo directamente:

```console
User:~ $ git config --global -e
```
```conf
[filter "lfs"]
	smudge = git-lfs smudge -- %f
	process = git-lfs filter-process
	required = true
	clean = git-lfs clean -- %f
[user]
	name = 
	email = 
[core]
	editor = 
```

