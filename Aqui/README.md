# Sistema de Agendamento de Cabeleireiro

Este projeto implementa um sistema backend para gerenciamento de agendamentos de um salão de cabeleireiro. Permite criar, listar, atualizar e deletar agendamentos. O backend é feito em **Node.js** com **Express**, e possui testes automatizados usando **Jest** e **Supertest**.

---

## 1. Configuração do Projeto

1. Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>


src/
├─ config
│  └─ .env
├─ controllers/
│  ├─ appointmentController.js
│  ├─authController.js
│  ├─clientController.js
│  ├─serviceController.js
│  └─userController.js
├─ middlewares/
│  ├─ auth.js
│  ├─ errorHandler.js
│  └─ logger.js
├─ models/
│   ├─ Appointment.js
│   ├─  Client.js
│   ├─ Service.js
│   └─ User.js
├─ routes/
│  ├─ appointmentsRoutes.js
│  ├─ clientsRoutes.js
│  ├─ servicesRoutes.js
│  └─ authRoutes.js
├─ app.js
├─ serve.js
├─ swagger.js
tests/
├─ appointments.test.js
package-lock.json
package.json



# 💈 Sistema de Gerenciamento de Agendamentos (Trab. BackEnd)

O **Sistema de Agendamento de Cabelo Layout** é uma API RESTful desenvolvida para gerenciar agendamentos de um salão de cabeleireiro. O objetivo é fornecer um backend robusto e testável, seguindo as boas práticas do desenvolvimento de software e as exigências do projeto.

---

## 🚀 Tecnologias Utilizadas

Este projeto utiliza um conjunto de tecnologias modernas para garantir estabilidade e facilidade de desenvolvimento:

| Categoria | Tecnologia | Uso |
| :--- | :--- | :--- |
| **Ambiente** | Node.js | Plataforma de execução JavaScript no lado do servidor. |
| **Framework** | Express | Framework web para criação das rotas e API RESTful. |
| **Banco de Dados** | MongoDB | Banco de dados NoSQL para persistência dos agendamentos. |
| **Testes** | Jest | Framework principal para testes unitários e de integração. |
| **Testes HTTP** | Supertest | Biblioteca para simular requisições HTTP e testar as rotas (CRUD). |
| **Auxiliar** | Nodemon | Monitora o código-fonte e reinicia o servidor automaticamente em desenvolvimento. |

---

## ⚙️ Configuração do Projeto

Siga estes passos para configurar e executar a aplicação em sua máquina local:

### 1. Pré-requisitos

* Ter o **Node.js** (versão LTS recomendada) e o **npm** instalados.
* Ter acesso a uma instância do **MongoDB** (local ou em nuvem, como MongoDB Atlas).

### 2. Clonagem e Instalação

```bash
# 1. Clonar o repositório
git clone [https://github.com/PedroPauloFarias/Trab.BackEnd.git](https://github.com/PedroPauloFarias/Trab.BackEnd.git)

# 2. Entrar na pasta do projeto
cd Trab.BackEnd

# 3. Instalar as dependências
npm install