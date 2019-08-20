#!/usr/bin/bash
echo "==> Instalando Configuração do .bash_profile"
# link do bash_profile
BASH_PROFILE=/home/$USER/.bash_profile
if [ -f "$BASH_PROFILE" ]; then
    rm -rf BASH_PROFILE
fi
ln -v .bash_profile /home/$USER/

echo -ne "\n"
echo "==> Instalando Configuração do .bashrc"
# link do bashrc
BASHRC=/home/$USER/.bashrc
if [ -f "$BASHRC" ]; then
    rm -rf .bashrc
fi
ln -v .bashrc /home/$USER/

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
echo "==> Instalando Zsh "
# install tmux
sudo apt install zsh -y

echo -ne "\n"
echo "==> Instalando Configuração do zshrc"
# link do bash_profile
ZSHRC=/home/$USER/.zshrc
if [ -f "$ZSHRC" ]; then
    rm -rf ZSHRC
fi
ln -v .zshrc /home/$USER/

echo -ne "\n"
echo "==> Instalando oh-my-zsh"
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

echo -ne "\n"
echo "==> Instalando theme oh-my-zsh"
ln -v matherique.zsh-theme /home/$USER/.oh-my-zsh/themes/

echo -ne "\n"
echo "==> Instalando Zplugin"
# install zplugin
sh -c "$(curl -fsSL https://raw.githubusercontent.com/zdharma/zplugin/master/doc/install.sh)"

echo -ne "\n"
echo "==> Instalando Zsh Autosuggestions"
# install zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions


echo -ne "\n"
echo "==> Instalando Tmux "
# install tmux
sudo apt install tmux -y

echo -ne "\n"
echo "==> Instalando Configuração do tmux"
# link do tmux
TMUX=/home/$USER/.tmux.conf
if [ -f "$TMUX" ]; then
    rm -rf TMUX
fi
ln -v .tmux.conf /home/$USER/

echo -ne "\n"
echo "==> Instalando da cor do terminal"
chmod +x onehalfdark.sh

./onehalfdark.sh
