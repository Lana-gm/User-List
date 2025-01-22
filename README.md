# User-List

## Instalação/Installation

- nvm install
- yarn install
- yarn dev

Demo: https://user-list-topaz.vercel.app/

# Documentação do Projeto: Lista de Usuários com Integração à API JSONPlaceholder

## Objetivo do Projeto

Criar uma aplicação que consuma a API pública JSONPlaceholder para listar usuários, com funcionalidades adicionais de pesquisa, exibição detalhada de informações e gerenciamento de uma lista de favoritos.

---

## Requisitos Funcionais

1. **Listar Usuários**:

   - Exibir uma lista de usuários com informações básicas: nome, e-mail e telefone.
   - Dados consumidos da API JSONPlaceholder.

2. **Pesquisar Usuários**:

   - Implementar uma barra de pesquisa para filtrar usuários pelo nome.

3. **Detalhes do Usuário**:

   - Ao clicar em um usuário da lista, redirecionar para uma página de detalhes exibindo informações completas: endereço, empresa e outros detalhes fornecidos pela API.

4. **Gerenciar Favoritos**:

   - Adicionar ou remover usuários de uma lista de favoritos.
   - Exibir a lista de favoritos na página inicial ao clicar em um botão.

5. **Carregamento com Loader**:

   - Exibir um indicador de carregamento enquanto os dados estão sendo obtidos da API.

---

## Detalhes Técnicos

### Tecnologias Utilizadas

1. **TypeScript**:

   - Usado para garantir tipagem estática e maior segurança no código.

2. **Styled Components**:

   - Utilizado para estilizar os componentes com base em CSS-in-JS, permitindo temas dinâmicos e organização modular.

3. **Redux**:

   - Gerenciamento do estado global da aplicação.

4. **Redux Saga**:

   - Manipulação de operações assíncronas, como chamadas à API.

5. **React Router DOM**:

   - Gerenciamento de rotas para navegação entre as páginas de listagem e detalhes do usuário.

6. **React Icons**:

   - Usado para exibir ícones no projeto, como o loader.

---

## Estrutura da Aplicação

### Páginas

1. **Tela Inicial**:

   - Lista todos os usuários com informações básicas.
   - Inclui barra de pesquisa para filtrar pelo nome.
   - Botão "Favoritos" para exibir apenas os usuários adicionados à lista de favoritos.

2. **Tela de Detalhes**:

   - Exibe informações detalhadas de um usuário selecionado, como endereço, empresa, etc.

### Componentes

1. **UsersList**:

   - Componente funcional que exibe a lista de usuários e gerencia a pesquisa e favoritos.
   - Implementa botões para adicionar/remover usuários dos favoritos.

2. **UserDetails**:

   - Componente de classe que exibe os detalhes de um usuário selecionado.
   - Realiza a busca dos dados do usuário diretamente da store e implementa loaders durante a transição.

3. **SearchInput**:

   - Componente estilizado para entrada de texto, utilizado na barra de pesquisa de usuários.
   - Suporta customizações como placeholders e eventos `onChange` para capturar os filtros digitados.

---

## Fluxo do Estado (Redux)

1. **Store**:

   - Gerencia o estado global da aplicação, incluindo a lista de usuários, favoritos e status de carregamento.

2. **Actions**:

   - `fetchUsersRequest`: Inicia a requisição para buscar os usuários.
   - `fetchUsersSuccess`: Armazena os usuários retornados pela API.
   - `fetchUsersFailure`: Armazena erros ocorridos durante a requisição.
   - `addToFavorites`: Adiciona um usuário à lista de favoritos.
   - `removeFromFavorites`: Remove um usuário da lista de favoritos.

3. **Sagas**:

   - `fetchUsersSaga`: Realiza a chamada à API para buscar os usuários e despacha as ações apropriadas.

---

# User-List (ENGLISH)

# Project Documentation: User List with JSONPlaceholder API Integration

## Project Goal

Create an application that consumes the public JSONPlaceholder API to list users, with additional functionalities for search, detailed information display, and managing a favorites list.

---

## Functional Requirements

1. **List Users**:

   - Display a list of users with basic information: name, email, and phone.
   - Data is fetched from the JSONPlaceholder API.

2. **Search Users**:

   - Implement a search bar to filter users by name.

3. **User Details**:

   - Clicking on a user in the list redirects to a details page showing complete information: address, company, and other details provided by the API.

4. **Manage Favorites**:

   - Add or remove users from a favorites list.
   - Display the favorites list on the home page when clicking a button.

5. **Loading Indicator**:
   - Show a visual loader while fetching data from the API.

---

## Technical Details

### Technologies Used

1. **TypeScript**:

   - Used to ensure static typing and better code safety.

2. **Styled Components**:

   - Used to style components with CSS-in-JS, enabling dynamic themes and modular organization.

3. **Redux**:

   - Manages the global state of the application.

4. **Redux Saga**:

   - Handles asynchronous operations, such as API calls.

5. **React Router DOM**:

   - Manages routing for navigation between the user listing and detail pages.

6. **React Icons**:
   - Used to display icons in the project, such as the loader.

---

## Application Structure

### Pages

1. **Home Page**:

   - Lists all users with basic information.
   - Includes a search bar to filter users by name.
   - A "Favorites" button to display only users added to the favorites list.

2. **Details Page**:
   - Displays detailed information about a selected user, such as address, company, etc.

### Components

1. **UsersList**:

   - Functional component that displays the user list and manages search and favorites.
   - Includes buttons to add/remove users from favorites.

2. **UserDetails**:

   - Class component that displays the details of a selected user.
   - Fetches user data directly from the store and implements loaders during transitions.

3. **SearchInput**:

   - Styled input component used in the search bar.
   - Supports customizations such as placeholders and `onChange` events to capture typed filters.

4. **Loader**:
   - Visual indicator displayed while data is being fetched.

---

## State Flow (Redux)

1. **Store**:

   - Manages the global state of the application, including the user list, favorites, and loading status.

2. **Actions**:

   - `fetchUsersRequest`: Initiates the request to fetch users.
   - `fetchUsersSuccess`: Stores the users returned by the API.
   - `fetchUsersFailure`: Stores errors encountered during the request.
   - `addToFavorites`: Adds a user to the favorites list.
   - `removeFromFavorites`: Removes a user from the favorites list.

3. **Sagas**:
   - `fetchUsersSaga`: Handles the API call to fetch users and dispatches the appropriate actions.

---
