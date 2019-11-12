syntax on
filetype plugin indent on
colorscheme solarized
set t_Co=256
set background=dark
set tabstop=2
set shiftwidth=2
set expandtab
set ai
set number
set hlsearch
set ruler
set relativenumber

highlight Comment ctermfg=green
let g:solarized_termcolors=256

filetype plugin on
filetype indent on
"plugins
call plug#begin("~/.config/nvim/plugged")
Plug 'mustache/vim-mustache-handlebars'                 " highlight os pares de {([
Plug 'itchyny/lightline.vim'                            " tema da statusline
Plug 'pangloss/vim-javascript'                          " syntax highlight de js
Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' } " sistema de arquivos
Plug 'scrooloose/nerdcommenter'                         " comentarios
Plug 'sheerun/vim-polyglot'                             " varias syntex de varias linguagens  
Plug 'machakann/vim-highlightedyank'                    " highlight de texto copiado
Plug 'altercation/vim-colors-solarized'                 " Theme solarized
Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }
Plug 'junegunn/fzf.vim'
" assuming you're using vim-plug: https://github.com/junegunn/vim-plug
Plug 'ncm2/ncm2'
Plug 'roxma/nvim-yarp'

" enable ncm2 for all buffers
autocmd BufEnter * call ncm2#enable_for_buffer()

" IMPORTANT: :help Ncm2PopupOpen for more information
set completeopt=noinsert,menuone,noselect

" NOTE: you need to install completion sources to get completions. Check
" our wiki page for a list of sources: https://github.com/ncm2/ncm2/wiki
Plug 'ncm2/ncm2-bufword'
Plug 'ncm2/ncm2-path'

Plug 'fatih/vim-go', { 'do': ':GoUpdateBinaries' }

call plug#end()


set rtp+=~/.fzf
" tema do status line
let g:lightline = { 'colorscheme': 'solarized', }

autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif

" comentar
nnoremap ; :call NERDComment(0,"toggle")<CR>
vnoremap ; :call NERDComment(0,"toggle")<CR>

" arquivos
nnoremap <c-p> :Files<CR>
nnoremap <c-n> :e 

" abre e fecha nerdtree
map <silent><F5> :NERDTreeToggle<CR>


