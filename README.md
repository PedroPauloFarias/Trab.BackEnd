

Este projeto consiste em uma API RESTful desenvolvida em Node.js com Express para o gerenciamento de agendamentos, clientes e serviços de uma barbearia. O sistema implementa um CRUD completo, autenticação via JWT (JSON Web Token) e documentação automática via Swagger. Este README documenta a configuração, execução, testes e correções aplicadas durante o desenvolvimento para resolver erros comuns como "next is not a function", problemas de autenticação e falhas nos testes.

## 📋 Funcionalidades

- **Autenticação:** Registro e Login de usuários (Administradores/Funcionários) com geração de Token JWT.
- **Gerenciamento de Agendamentos:** Criar, Listar, Atualizar e Remover agendamentos (Protegido por autenticação).
- **Gerenciamento de Clientes e Serviços:** Cadastrar e listar opções disponíveis.
- **Documentação:** Interface interativa Swagger para testar rotas.
- **Testes Automatizados:** Cobertura com Jest para autenticação e rotas principais.

## 🛠️ Tecnologias e Dependências

O projeto foi construído utilizando as seguintes tecnologias:

* **Node.js** & **Express** (Framework Web)
* **MongoDB** & **Mongoose** (Banco de Dados NoSQL)
* **JWT (JsonWebToken)** (Segurança e Autenticação)
* **BcryptJS** (Criptografia de senhas)
* **Swagger UI** (Documentação da API)
* **Jest** & **Supertest** (Testes Automatizados)
* **Dotenv** (Gerenciamento de variáveis de ambiente)
* **Cors** (Habilitação de acesso cruzado)

## ⚙️ Configuração e Instalação

### Pré-requisitos
* Node.js instalado (versão 14+ recomendada)
* Conta no MongoDB Atlas (ou banco local)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/SEU-USUARIO/NOME-DO-REPO.git
   cd NOME-DO-REPO
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as Variáveis de Ambiente:**
   Crie um arquivo `.env` dentro da pasta `src/config/` com o seguinte conteúdo (ajuste com suas credenciais):

   ```ini
   MONGODB_USER=seu_usuario
   MONGODB_PASSWORD=sua_senha
   MONGODB_HOST=cluster0.xxxxx.mongodb.net
   MONGODB_DATABASE=barbearia
   JWT_SECRET=sua_senha_secreta_jwt
   PORT=3000
   ```

## 🚀 Execução

Para iniciar o servidor em modo de produção/desenvolvimento:

```bash
node src/server.js
```

Se tudo estiver correto, você verá no terminal:

> ✅ MongoDB Conectado com Sucesso!
> 🚀 Servidor rodando em http://localhost:3000
> 📖 Swagger disponível em http://localhost:3000/api-docs

## 🧪 Como Rodar os Testes

O projeto possui testes automatizados cobrindo autenticação e rotas de agendamento. Para executá-los:

```bash
npm test
```

Isso executará o Jest, conectará a um banco temporário e validará as rotas. Se houver erros como "next is not a function" ou falhas de autenticação, verifique se os middlewares (ex.: `errorHandler.js`, `auth.js`) estão corretos e se o `.env` está carregado.

### Correções Aplicadas nos Testes
Durante o desenvolvimento, foram corrigidos:
- **Erro "next is not a function"**: Garantido que o `errorHandler` envie respostas HTTP (`res.status().json()`).
- **Falhas de Autenticação**: Adicionado hook de hash de senha no modelo `User.js` e carregamento do `.env` nos testes.
- **Token Inválido**: Verificado middleware `auth.js` para rejeitar tokens vazios/expirados.

## 📖 Documentação e Exemplos de Uso

A documentação completa dos endpoints, parâmetros e exemplos de Request/Response está disponível via **Swagger**.

Com o servidor rodando, acesse em seu navegador:
🔗 **http://localhost:3000/api-docs**

### Resumo das Rotas Principais:

| Método | Rota               | Descrição                              | Autenticação |
| :---   | :---               | :---                                   | :---:        |
| POST   | `/auth/register`   | Cria um novo usuário (Admin)           | ❌           |
| POST   | `/auth/login`      | Autentica e retorna o Token JWT        | ❌           |
| GET    | `/appointments`    | Lista todos os agendamentos            | ❌           |
| POST   | `/appointments`    | Cria um novo agendamento               | ✅ (JWT)     |
| PUT    | `/appointments/:id`| Atualiza um agendamento                | ✅ (JWT)     |
| DELETE | `/appointments/:id`| Remove um agendamento                  | ✅ (JWT)     |
| GET    | `/clients`         | Lista clientes                         | ❌           |
| POST   | `/clients`         | Cria cliente                           | ✅ (JWT)     |
| GET    | `/services`        | Lista serviços                         | ❌           |
| POST   | `/services`        | Cria serviço                           | ✅ (JWT)     |

### Exemplo de Request (Criar Agendamento):
```bash
POST /appointments
Authorization: Bearer <TOKEN_JWT>
Content-Type: application/json

{
  "client": "João Silva",
  "service": "Corte de Cabelo",
  "date": "2023-12-01T10:00:00.000Z"
}
```


## 📝 Notas Adicionais

- **Estrutura do Projeto:** Os arquivos estão organizados em `src/` (controllers, models, routes, middlewares), com testes em `tests/`.
- **Variáveis de Ambiente:** Certifique-se de que o `.env` está seguro e não versionado (adicione a `.gitignore`).
- **Erros Comuns Corrigidos:** Durante a implementação, foram resolvidos problemas de YAML no Swagger, hash de senhas, middlewares de erro e carregamento de `.env` nos testes.
- **Contribuição:** Para contribuir, crie uma branch e faça pull requests.

Para dúvidas, entre em contato com os integrantes do grupo. 🚀
