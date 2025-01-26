# Frontend React para CRUD com Spring Boot

Este é o frontend desenvolvido em **React.js** para interagir com o backend de um sistema CRUD criado com **Spring Boot**. O sistema inclui funcionalidades de **login**, **cadastro** e gerenciamento de dados.

## 📋 Funcionalidades

- Login de usuários.
- Cadastro de novos usuários.
- Interface para consumir endpoints do CRUD (Read, Update, Delete).
- Conexão com backend utilizando **REST APIs**.
- Validação de formulários.

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React.js** (com Hooks)
- **Axios** (para requisições HTTP)
- **React Router** (para navegação entre páginas)
- **CSS puro** (para estilização)

### Backend
- API desenvolvida com **Spring Boot**  
  > Backend disponível em [https://github.com/newtsarthur/CRUD-Java](#).

## 🚀 Como Rodar o Projeto

### Pré-requisitos
1. **Node.js** instalado. Você pode baixar em [nodejs.org](https://nodejs.org/).
2. Ter o backend configurado e rodando.

### Passo a Passo

1. Clone o repositório do frontend:
   ```bash
   git clone https://github.com/newtsarthur/frontend-REACT.git
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd nome-do-repositorio
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure o arquivo `.env`:
   Crie um arquivo `.env` na raiz do projeto e insira a URL da API do backend:
   ```
   REACT_APP_API_URL=http://localhost:8080/api
   ```
5. Inicie o projeto:
   ```bash
   npm start
   ```
6. Acesse no navegador:
   ```
   http://localhost:3000
   ```