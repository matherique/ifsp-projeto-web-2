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
set nobackup 
set noswapfile
set cursorline

highlight CursorLine term=bold cterm=bold guibg=Grey40
highlight Comment ctermfg=green

let g:solarized_termcolors=256

filetype on
filetype plugin on
filetype indent on
"plugins
call plug#begin("~/.config/nvim/plugged")
Plug 'mustache/vim-mustache-handlebars'                 " highlight os pares de {([
"Plug 'itchyny/lightline.vim'                            " tema da statusline
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'pangloss/vim-javascript'                          " syntax highlight de js
Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' } " sistema de arquivos
Plug 'scrooloose/nerdcommenter'                         " comentarios
Plug 'sheerun/vim-polyglot'                             " varias syntex de varias linguagens  
Plug 'machakann/vim-highlightedyank'                    " highlight de texto copiado
Plug 'altercation/vim-colors-solarized'                 " Theme solarized
Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }
Plug 'junegunn/fzf.vim'
Plug 'prettier/vim-prettier', {
  \ 'do': 'yarn install',
  \ 'for': ['javascript', 'typescript', 'json', 'html'] }
Plug 'ncm2/ncm2'
Plug 'roxma/nvim-yarp'

autocmd BufEnter * call ncm2#enable_for_buffer()
set completeopt=noinsert,menuone,noselect

Plug 'ncm2/ncm2-bufword'
Plug 'ncm2/ncm2-path'

Plug 'fatih/vim-go', { 'do': ':GoUpdateBinaries' }

call plug#end()


set rtp+=~/.fzf

" tema do status line
let g:airline_theme='light'
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif

" comentar
nnoremap ; :call NERDComment(0,"toggle")<CR>
vnoremap ; :call NERDComment(0,"toggle")<CR>

" search by files arquivos
nnoremap <c-p> :Files<CR> 
" new file 
nnoremap <c-n> :e 
" replace all 
nnoremap <c-f> :%s/

" abre e fecha nerdtree
map <silent><F5> :NERDTreeToggle<CR>

inoremap jj <ESC>

let g:prettier#autoformat = 0
autocmd BufWritePre *.js,*.jsx,*.mjs,*.ts,*.tsx,*.css,*.less,*.scss,*.json,*.graphql,*.md,*.vue,*.yaml,*.html PrettierAsync


