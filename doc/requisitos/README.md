# Analise de requisitos

## Requisitos funcionais
Lista de todos os requisitos funcionais do sistema

- RF01 O usuário deve se cadastrar no sistema para poder realizar o login 
- RF02 O usuário precisa estar logado para comparar os indicativos 
- RF03 O sistema deve permitir a exibição dos seguintes tipos de grafico: X, Y, Z (colocar tipos de graficos)
- RF04 O sistema deve possuir uma rotina que le uma pasta faz o parse dos dados para cadastrar no banco de dados
- RF05 O sistema deve permitir comparação entre vários indicativos 
- RF06 O usuário pode escolher até X indicadores
- RF07 O usuário pode pode comparar até 3 tipos de series de dados
- RF08 O sistema deve normalizar os dados antes de cadastrar no banco de dados 
- RF09 O sistema deve retornar um token de acesso ao usuário realizar o login
- RF10 O sistema deve validar o token de todas as rotas do sistema, exceto a rota de login e cadastro de usuário 
- RF11 O sistema deve permitir escolher um intervalo de anos para filtrar o grafico
- RF12 O sistema deve permitir o usuário visualizar os indicativos por meio de um mapa mundi

## Requisitos não funcionais
Lista de todos os requisitos não funcionais do sistema

- RNF01 O banco de dados utilizado utilizado será o PostgreSQL
- RNF02 A linguagem utilizada para criação da backend será Golang
- RNF03 A linguagem utilizada para criação do frontend será Javascript 
- RNF04 O biblioteca utilizada para criação do frontend será ReactJs
- RNF05 O frontend deve comunicar com o backend via REST API
