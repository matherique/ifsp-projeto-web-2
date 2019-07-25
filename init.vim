filetype plugin on
filetype indent on
"plugins
call plug#begin("~/.config/nvim/plugged")
Plug 'vim-airline/vim-airline'
Plug 'mustache/vim-mustache-handlebars'                 " highlight os pares de {([
Plug 'sonph/onehalf',  {'rtp': 'vim/'}                  " tema
Plug 'morhetz/gruvbox'                                  " tema 
Plug 'itchyny/lightline.vim'                            " tema da statusline
Plug 'dikiaap/minimalist'                               " outro tema
Plug 'pangloss/vim-javascript'                          " syntax highlight de js
Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' } " sistema de arquivos
Plug 'scrooloose/nerdcommenter'                         " comentarios
Plug 'sheerun/vim-polyglot'                             " varias syntex de varias linguagens  
Plug 'tomasr/molokai'                                   " outro tema 
Plug 'machakann/vim-highlightedyank'                    " highlight de texto copiado
call plug#end()
" leader key
let mapleader="\<space>"
" abrir config e atualizar
nnoremap <leader>r :so ~/.config/nvim/init.vim<cr>
nnoremap <leader>vc :vsp ~/.config/nvim/init.vim<cr>

" duplicar linha para baixo
nmap <C-d> mzyyp`z

" comentar
nnoremap ; :call NERDComment(0,"toggle")<CR>
vnoremap ; :call NERDComment(0,"toggle")<CR>

" abre e fecha nerdtree
map <silent><F5> :NERDTreeToggle<CR>

" atalho para executar codigo no terminal 
" golang
if &filetype ==# 'go'
  nnoremap <silent> <F4> :!go run %<CR>
  noremap <silent> <F9> :!go run main.go<CR>
endif
" python
if &filetype ==# 'python'
  nnoremap <silent> <F4> :!python3 %<CR>
endif

" atalho para fold
nnoremap <silent><C-f> zf
vnorema <silent><C-f> zf
nnoremap <silent><C-a> za
vnorema <silent><C-a> za

" atalho para remover coisas dentro de ({["'<
nnorema <silent>d( di(
nnorema <silent>d{ di{
nnorema <silent>d" di"
nnorema <silent>d' di'
nnorema <silent>d[ di[
nnorema <silent>d< di<

nnorema <silent>yw yiw


syntax on
colorscheme onehalfdark
let g:airline_theme='onehalfdark'
"colorscheme gruvbox 
"colorscheme molokai 
"colorscheme minimalist 
"colorscheme monokai
set background=dark 
set t_Co=256
set t_AB=^[[48;5;%dm
set t_AF=^[[38;5;%dm
set encoding=utf8
set tabstop=2 
set shiftwidth=2
set autoindent                  " identar igual a linha anterior
set cursorline                  " highlight a linha atual
set relativenumber              " numeros relativos a posicao atual
set ignorecase                  " ignorar camel case
set expandtab 
set number                      " ativar numeros 
set nohlsearch                  " sem highlight a palavra pesquisada 
set incsearch
set showcmd
set nowrap                      " sem quebrar a linha 
set laststatus=2                " se as outras janelas vao ter statusline
set noshowmode
set noswapfile                  " sem arquivo de swap
set splitbelow splitright       " abrir vsplit na direita 
set inccommand=split            " mostra o resultado da substituicao
set clipboard+=unnamedplus      " compartilhar o clipboard do linux com o vim
set termguicolors               " ativar true colors
" linha dos numeros em darkgray
highlight LineNr term=bold cterm=NONE ctermfg=DarkGrey ctermbg=NONE gui=NONE guifg=DarkGrey guibg=NONE

let g:NERDTreeChDirMode=2
let g:NERDTreeIgnore=['\.rbc$', '\~$', '\.pyc$', '\.db$', '\.sqlite$', '__pycache__', 'node_modules']
let g:NERDTreeSortOrder=['^__\.py$', '\/$', '*', '\.swp$', '\.bak$', '\~$']
let g:NERDTreeShowBookmarks=1
let g:nerdtree_tabs_focus_on_files=1
let g:NERDTreeMapOpenInTabSilent = '<RightMouse>'

" tema do status line
let g:lightline = { 'colorscheme': 'powerline', }
" ativar italico 
let g:gruvbox_italic=1

