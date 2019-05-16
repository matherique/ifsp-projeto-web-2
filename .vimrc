syntax on
colorscheme gruvbox
set background=dark
set t_Co=256
set encoding=utf8
set tabstop=2
set shiftwidth=2
set ai 
set expandtab
set number
set hlsearch
set incsearch
set ruler
set showcmd
set showmatch
set paste
set nowrap
highlight Comment ctermfg=green
set laststatus=2
set noshowmode
set noswapfile

filetype off

" thema configuration
let g:gruvbox_bold = 2
let g:gruvbox_termcolors = 256
let g:gruvbox_contrast_light = 'hard'

" NERDSTREE configuration
let g:NERDTreeChDirMode=2
let g:NERDTreeIgnore=['\.rbc$', '\~$', '\.pyc$', '\.db$', '\.sqlite$', '__pycache__', 'node_modules']
let g:NERDTreeSortOrder=['^__\.py$', '\/$', '*', '\.swp$', '\.bak$', '\~$']
let g:NERDTreeShowBookmarks=1
let g:nerdtree_tabs_focus_on_files=1
let g:NERDTreeMapOpenInTabSilent = '<RightMouse>'
set wildignore+=*/tmp/*,*.so,*.swp,*.zip,*.pyc,*.db,*.sqlite

" tema
let g:lightline = { 'colorscheme': 'wombat', }

" Javascript configuration
let g:jsx_ext_required = 0


" only if u had plugged install
call plug#begin('~/.vim/plugged')
Plug 'morhetz/gruvbox'
Plug 'itchyny/lightline.vim'
Plug 'dikiaap/minimalist'
Plug 'pangloss/vim-javascript'
Plug 'SirVer/ultisnips' | Plug 'honza/vim-snippets'
Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' }
Plug 'tpope/vim-fireplace', { 'for': 'clojure' }
Plug 'fatih/vim-go', { 'tag': '*' }
Plug 'nsf/gocode', { 'tag': 'v.20150303', 'rtp': 'vim' }
Plug 'mxw/vim-jsx'
call plug#end()

