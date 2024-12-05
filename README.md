# PizzaShop Web 🍕

Este repositório contém o front-end do **PizzaShop**, um aplicativo web criado com **React**, **TypeScript**, e **TailwindCSS**, utilizando ferramentas modernas como **Vite** e **Vitest** para um desenvolvimento ágil e eficiente.

---

## 📋 Índice

1. [Sobre o Projeto](#sobre-o-projeto)
2. [Funcionalidades](#funcionalidades)
3. [Tecnologias Utilizadas](#tecnologias-utilizadas)
4. [Configuração do Ambiente](#configuração-do-ambiente)
5. [Scripts Disponíveis](#scripts-disponíveis)
6. [Testes](#testes)
7. [Contribuindo](#contribuindo)
8. [Licença](#licença)

---

## 📖 Sobre o Projeto

O **PizzaShop** é uma plataforma criada durante a trilha de React da Rocketseat para gerenciar pedidos de pizza de forma simples e intuitiva. Este projeto front-end foi desenvolvido para oferecer uma interface moderna e responsiva, permitindo que os usuários acompanhem o status de seus pedidos em tempo real.

---

## 🚀 Funcionalidades

- 🛒 **Gerenciamento de Pedidos**: Adicionar, editar e remover pedidos.
- 📊 **Visualização de Status**: Monitoramento do status do pedido (pendente, em preparo, concluído, etc.).
- 🕵️ **Busca e Filtro**: Filtrar pedidos por cliente, status ou data.
- 📅 **Integração com Datas**: Escolher e visualizar pedidos usando **react-day-picker**.
- 🔗 **Navegação Simples**: Implementação de rotas usando o **React Router**.

---

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- [React](https://reactjs.org/) com [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/) para estilos
- [React Query](https://tanstack.com/query/latest) para gerenciamento de estado assíncrono

### **Ferramentas**
- [Vite](https://vitejs.dev/) para construção e desenvolvimento
- [Vitest](https://vitest.dev/) para testes unitários
- [Testing Library](https://testing-library.com/) para testes de interface

---

## ⚙️ Configuração do Ambiente

Siga os passos abaixo para configurar o ambiente local de desenvolvimento:

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/pizzashop-web.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd pizzashop-web
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente. Renomeie o arquivo `.env.local.example` para `.env.local` e ajuste os valores conforme necessário.

---

## 📜 Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes comandos:

### `npm run dev`

Inicia o servidor de desenvolvimento com **Vite**. Acesse [http://localhost:5173](http://localhost:5173) para visualizar no navegador.

### `npm run build`

Compila o projeto para produção na pasta `dist`.

### `npm run preview`

Pré-visualiza a aplicação compilada localmente.

### `npm run lint`

Executa o **ESLint** para verificar problemas de lint no código.

### `npm run test`

Executa os testes unitários utilizando **Vitest**.

---

## 🧪 Testes

Os testes são implementados com **Vitest** e **Testing Library**. Para rodar os testes:

1. Execute o comando:

   ```bash
   npm run test
   ```

2. Para ver o relatório detalhado com cobertura de código:

   ```bash
   npm run test -- --coverage
   ```

### Configuração de Testes

O projeto utiliza um arquivo de configuração de testes localizado em `src/setupTests.ts`, onde são importados utilitários como **jest-dom**.

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto.
2. Crie uma nova branch: `git checkout -b minha-feature`.
3. Faça suas alterações e commite: `git commit -m 'Minha nova feature'`.
4. Envie para o repositório remoto: `git push origin minha-feature`.
5. Abra um pull request.

---

## 📝 Licença

Este projeto está licenciado sob a licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.

---

## 📞 Contato

Para dúvidas ou sugestões, entre em contato:

- Email: adriano25klein@gmail.com
- LinkedIn: https://www.linkedin.com/in/adriano-klein/
