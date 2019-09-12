export PATH=/usr/local/cuda-10.0/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda/lib64:${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}

alias vi='nvim'
alias vim='nvim'
alias dc='docker-compose'
alias db='mysql -uroot'
alias pbcopy='xclip -selection clipboard'
alias git='hub'

export ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE="fg=240"

#export TERM='xterm-256color'

#cargo rust configuration
export PATH="$HOME/.cargo/bin:$PATH"
#gopath configuration
export GOPATH=$HOME/dev/go
export GOROOT=/usr/local/go

export HISTSIZE=100000

export ANDROID_HOME=~/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$GOPATH/bin:$GOROOT/bin:$PATH
export PATH=$PATH:$ANDROID_HOME/platform-tools
