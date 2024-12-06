# configurar terminal para que se mire bien perrona.

Yo uso ubuntu :love_you_gesture:

### Instalamos zsh

La shell zsh.

```console
sudo apt install zsh -y
zsh --version
chsh -s $(which zsh)
```

### Instalamos Tilix

Tilix es una terminal bastante flexible

```console
sudo apt install tilix -y
```

Abrimos tilix y le damos 0 para crear un archivo `.zshrc` vacío.

### Instalación de Oh my zsh

### Oh my zsh es un mejorador de zsh que nos ayuda a personalizar la terminal. La podemos descargar desde [aquí](https://ohmyz.sh/)

```console
sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```

### Instalamos el tema Powerlevel10k

Lo descargamos desde [aquí](https://github.com/romkatv/powerlevel10k?tab=readme-ov-file#manual)

```console
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k
echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc
```

Descargamos las fuentes necesarias [MesloGS NF](https://github.com/romkatv/powerlevel10k?tab=readme-ov-file#manual-font-installation)  
Las instalamos y las configuramos en tilix
Recargamos la zsh
```console
zsh
```
y comenzamos a personalizar la terminal.

