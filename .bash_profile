export PATH=/usr/local/cuda-10.0/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda/lib64:${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}

alias vi='nvim'
alias vim='nvim'
alias dc='docker-compose'
alias db='mysql -uroot'
alias pbcopy='xclip -selection clipboard'

#if [ -e /usr/share/terminfo/x/xterm-256color ]; then
				#export TERM='xterm-256color'
#else
				#export TERM='xterm-color'
#fi

#cargo rust configuration
export PATH="$HOME/.cargo/bin:$PATH"
#gopath configuration
export GOPATH=$HOME/dev/go


export HISTSIZE=100000

