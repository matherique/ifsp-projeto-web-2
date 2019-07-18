call plug#begin('~/.config/nvim/plugged')
Plug 'itchyny/lightline.vim'
Plug 'dikiaap/minimalist'
Plug 'pangloss/vim-javascript'
Plug 'SirVer/ultisnips' | Plug 'honza/vim-snippets'
Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' }
Plug 'scrooloose/nerdcommenter'
Plug 'sheerun/vim-polyglot'
Plug 'tomasr/molokai'
Plug 'machakann/vim-highlightedyank'
Plug 'jiangmiao/auto-pairs'
call plug#end()

let mapleader="\<space>"
nnoremap <leader>r :so ~/.config/nvim/init.vim<cr>
nnoremap <leader>vc :vsp ~/.config/nvim/init.vim<cr>
nnoremap ; :call NERDComment(0,"toggle")<CR>
vnoremap ; :call NERDComment(0,"toggle")<CR>

syntax on
colorscheme molokai "minimalist monokai  gruvbox
set background=dark 
set t_Co=256
set encoding=utf8
set tabstop=2
set shiftwidth=2
set ai
set cursorline
set relativenumber
set ignorecase
set expandtab
set number
set hlsearch
set incsearch
set showcmd
set showmatch
set paste
set nowrap
highlight LineNr term=bold cterm=NONE ctermfg=DarkGrey ctermbg=NONE gui=NONE guifg=DarkGrey guibg=NONE
set laststatus=2
set noshowmode
set noswapfile
set splitbelow splitright
set inccommand=split
set clipboard+=unnamedplus
" open and close Tree
map <silent> <F5> :NERDTreeToggle<CR>
" golang
nnoremap <silent> <F4> :!go run %<CR>


" NERDSTREE configuration
let g:NERDTreeChDirMode=2
let g:NERDTreeIgnore=['\.rbc$', '\~$', '\.pyc$', '\.db$', '\.sqlite$', '__pycache__', 'node_modules']
let g:NERDTreeSortOrder=['^__\.py$', '\/$', '*', '\.swp$', '\.bak$', '\~$']
let g:NERDTreeShowBookmarks=1
let g:nerdtree_tabs_focus_on_files=1
let g:NERDTreeMapOpenInTabSilent = '<RightMouse>'

" tema do status line
let g:lightline = { 'colorscheme': 'powerline', }


