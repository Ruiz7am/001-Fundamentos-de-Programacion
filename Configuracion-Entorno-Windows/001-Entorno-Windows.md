# Configuración de entorno de desarrollo en Windows

**1. Navegador web**, de preferencia **Google Chrome** (chrome first) y más aún la versión para desarrolladores **dev**
- Devtools: Ayudan a inspeccionar el sitio
- Lighthouse: Revisa automáticamente la calidad de la pagina web

**2. Editor de código**, de preferencia Visual Studio Code, el mejor editor de texto hasta ahora.  
- Instalar extensiones de VSCode que nos ayudaran a ser más eficientes a la hora de escribir código:  
  1. **Live Server**: servidor local que nos ayuda a tener una vista previa de lo que vamos desarrollando.  
  2. **Highlight Matching Tag**: resalta los pares de tags en html  
  3. **CSS Peek**: nos ayuda a tener una vista previa de los estilos  
  4. **Code Spell Checker**: revisa ortografía  
  5. **WSL**: integra el Windows Subsystem for Linux a VSCode.  
  6. **Node Require**: Integración con Node.js  
  7. **Material Icon Theme**: iconos para visualizar mejor tipos de archivos.  
  8. **Color Highlight**: resalta el color seleccionado en CSS.  
  9. **Auto Rename Tag**: renombra tags de apertura y cierre editando solo uno de estos.  

**3. Windows Subsystem for Linux.**  
- Integración la del kernel de linux en windows, última versión 2.
  1. Instalación: `wsl --install`
  2. Activar Virtualización si da error: `dism.exe /online /enabel-feature /featurename:VirtualMachinePlatform /all /norestart`
  3. Solucionar error "The operation could not be started because a required feature is not installed": 
     + `Turn windows features on or off > Activar Windows Subsystem for Linux`
     + `Settings > Privacy and Security > Windows Security > App and Browser Control > Exploit Protection Setting > Program Settings agregar vmcompute.exe`

**4. Instalar VirtualBox**
- vamos a la pagina, descargamos, instalamos.
 
**5. Instalar Ubuntu en VirtualBox**
- Descargamos iso image, ejecutamos vBox, instalamos y listo. (ajustar red modo puente si es necesario, ajustar guest additions)
  
**6. Node.js**
- Es un entorno de ejecución par JS construido con V8, el motor de JS de Chrome.
```console
sudo apt update
sudo apt install nodejs
node -v
Instalar NPM (Node Package Manager)
sudo apt install npm
sudo npm install -g n (para actualizar node.js)
sudo n latest
node -v
```

**7. Python**
```console
sudo apt update
sudo apt install software-properties-common
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update
sudo apt install python3.x (instala la versión más reciente)
python3 --version
python3
```

**8. Git y Github**
- Sistema de control de versiones  
```console
sudo apt update
sudo apt-get install git-all
```

**9. Vincular la llave SSH con Github**
```console
ssh-keygen -t ed25519 -C "correo de github"
eval "$(ssh-agent -s)"
ssh-add ~/ruta/de/la/llave/id_xxxxx
cat llave
vamos a github > settings > access > ssh and gpg keys > agregamos llave y la guardamos.  
```

**10. Subir Repositorios a Github**
```console
git status
git add repo o git add . # (para agregar todo ) se agregan repos locales existentes 
git status
git config --global user.name "nombre"
git config --global user.correo "correo-github"
git commit -m "primer commit" 
```

