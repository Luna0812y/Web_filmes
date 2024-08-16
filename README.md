# Busca de Filmes

Este projeto é uma aplicação web para busca de filmes utilizando a API OMDB, desenvolvido com NestJS no backend e que fornece uma interface simples para buscar e exibir informações sobre filmes.

## Estrutura do Projeto

- **Backend (NestJS)**
  - **`app.service.ts`**: Serviço para interagir com a API OMDB.
  - **`app.controller.ts`**: Controlador principal do NestJS.
  - **`app.module.ts`**: Módulo principal do NestJS.
  - **`movies.controller.ts`**: Controlador para as rotas relacionadas a filmes.
  - **`movies.interface.ts`**: Interfaces TypeScript.

- **Frontend**
  - **`index.html`**: Página principal da aplicação.
  - **`script.js`**: Script para interação com a API.
  - **`styles.css`**: Estilos para a página.

## Instalação

1. **Instale as dependências do backend:**

    ```bash
    npm install
    ```

1. **Instale o nestjs:**

    ```bash
    npm i -g @nestjs/cli
    nest new nome-do-projeto
    ```

3. **Configure as variáveis de ambiente:**

    Crie um arquivo `.env` na raiz do projeto com a seguinte variável:

    ```env
    OMDB_API_KEY=<SUA_CHAVE_API_OMDB>
    ```

4. **Inicie o servidor:**

    ```bash
    npm run start
    ```

    O backend estará disponível em `http://localhost:3000`.

## Como Usar

1. **Acesse a página principal** através do navegador em `http://localhost:3000`.

2. **Digite o título do filme** que você deseja buscar no campo de pesquisa.

3. **Clique no botão "Buscar"** para iniciar a pesquisa.

4. **Os resultados serão exibidos** abaixo do campo de pesquisa. Se não houver filmes encontrados, será exibida uma mensagem de erro.


## Contato

Para qualquer dúvida ou sugestão, entre em contato pelo e-mail: [layspessoal338@gmail.com].