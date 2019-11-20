#!/usr/bin/bash
echo "==> Instalando Configuração do .bash_profile"
# link do bash_profile

BASH_PROFILE=/home/$USER/.bash_profile
if [ -f "$BASH_PROFILE" ]; then
    rm -rf BASH_PROFILE
fi
ln -v .bash_profile /home/$USER/


echo -ne "\n"
echo "==> Instalando Neovim"
sudo apt install neovim -y

echo -ne "\n"
echo "==> Instalando Configuração do Neovim"
# link do nvim
NVIM_DIR=/home/$USER/.config/nvim
if [ -d "$NVIM_DIR" ]; then
    mkdir $NVIM_DIR
fi

ln -v init.vim $NVIM_DIR

echo -ne "\n"
echo "==> Instalando gerenciador de plugin no neovim"
curl -fLo $NVIM_DIR/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim

echo -ne "\n"
echo "==> Instalando plugins no neovim"
nvim +PlugInstall +qall

echo -ne "\n"
echo "==> Instalando fzf "
# install fuzzy finder
sudo apt-get install fzf -y

echo -ne "\n"
echo "==> Instalando hub"
# install fuzzy finder
sudo apt-get install hub -y

