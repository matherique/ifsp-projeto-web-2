call plug#begin("~/.config/nvim/plugged")
Plug 'gruvbox-community/gruvbox'
" statusline
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
" syntax de javascript
Plug 'pangloss/vim-javascript'                          " syntax highlight de js
" files tree view
Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' } " sistema de arquivos
" commentador
Plug 'scrooloose/nerdcommenter'                         " comentarios
" syntax more languages
Plug 'sheerun/vim-polyglot'                             " varias syntex de varias linguagens  
" fuzzy finder
Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }
Plug 'junegunn/fzf.vim'
" typescript syntax
Plug 'leafgarland/typescript-vim'
" prettier
Plug 'prettier/vim-prettier', { 'do': 'yarn install','for': ['javascript', 'typescript', 'json', 'html'] }
" autocompleter + lsp
Plug 'neoclide/coc.nvim', {'branch': 'release'} 
call plug#end()

let g:gruvbox_contrast_dark = 'hard'
let g:gruvbox_invert_selection= '0'

if exists('+termguicolors')
  let &t_8f = "\<Esc>[38;2;%lu;%lu;%lum"
  let &t_8b = "\<Esc>[48;2;%lu;%lu;%lum"
endif
 
syntax on
set background=dark
colorscheme gruvbox
set t_Co=256
set tabstop=2 softtabstop=2
set shiftwidth=2
set expandtab
set smartindent
set nowrap
set rnu
set number
set smartcase
set ruler
set nobackup 
set noswapfile
set undodir=~/.config/nvim/undodir
set undofile
set incsearch
set colorcolumn=80
set nohlsearch
set termguicolors 
let g:go_fmt_command = "goimports"


highlight CursorLine term=bold cterm=bold guibg=Grey40


let mapleader = " "

"nnoremap <silent> <Leader>gt :YcmCompleter GetDoc<CR>
"nnoremap <silent> <Leader>gd :YcmCompleter GoTo<CR>
"nnoremap <silent> <Leader>gf :YcmCompleter FixIt<CR>

nnoremap <silent> <Leader>r :so ~/.config/nvim/init.vim<CR>
nnoremap <silent> <Leader>ev :vs ~/.config/nvim/init.vim<CR>

" GoTo code navigation.
nmap <silent> gd <Plug>(coc-definition)
nmap <silent> gy <Plug>(coc-type-definition)
nmap <silent> gi <Plug>(coc-implementation)
nmap <silent> gr <Plug>(coc-references)
" Symbol renaming.
nmap <silent>rn <Plug>(coc-rename)

" use <tab> for trigger completion and navigate to the next complete item
" use <tab> for trigger completion and navigate to the next complete item
" use <tab> for trigger completion and navigate to the next complete item
function! s:check_back_space() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~ '\s'
endfunction

inoremap <silent><expr> <Tab>
      \ pumvisible() ? "\<C-n>" :
      \ <SID>check_back_space() ? "\<Tab>" :
      \ coc#refresh()
command! -nargs=0 Prettier :CocCommand prettier.formatFile

filetype on
filetype plugin on
filetype indent on

" Use K to show documentation in preview window
nnoremap <silent> K :call <SID>show_documentation()<CR>

function! s:show_documentation()
  if (index(['vim','help'], &filetype) >= 0)
    execute 'h '.expand('<cword>')
  else
    call CocAction('doHover')
  endif
endfunction

let g:coc_global_extensions = ["coc-eslint", "coc-marketplace", "coc-prettier", "coc-tsserver", "coc-clangd", "coc-css", "coc-go", "coc-json"]

" use <c-space>for trigger completion
inoremap <silent><expr> <c-space> coc#refresh()

"plugins
set completeopt=noinsert,menuone,noselect
set rtp+=~/.fzf
" comentar
nnoremap <C-Left>/ :call NERDComment(0,"toggle")<CR>
vnoremap <C-Left>/ :call NERDComment(0,"toggle")<CR>

" search by files arquivos
nnoremap <c-p> :Files<CR> 

" abre e fecha nerdtree
"map <silent><F5> :NERDTreeToggle<CR>

command! -nargs=0 Format :call CocAction('format')
command! -nargs=0 Comment :call NERDComment(0,"toggle")
 
"Prettier 
"let g:prettier#autoformat = 0
"autocmd BufWritePre *.js,*.jsx,*.mjs,*.ts,*.tsx,*.css,*.less,*.scss,*.json,*.graphql,*.md,*.vue,*.yaml,*.html PrettierAsync

autocmd BufEnter *.tsx set filetype=typescriptreact
autocmd BufEnter *.jsx set filetype=javascriptreact
autocmd BufEnter .*rc set filetype=json

