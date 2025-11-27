// const request = require('supertest');
// // const app = require('..Aqui/src/app'); // Esse tem que deixar comentado
// const app = require('../src/app');

// const { resetAppointments } = require("../src/routes/appointmentsRoutes"); // Aqui Pedro Teste2

// describe('Sistema de Agendamento de Cabeleireiro - Rotas de Agendamentos', () => {
//   let createdId;

//   beforeEach(async () => {
//      resetAppointments();//  Aqui Pedro Teste2
//   });

//   describe('GET /appointments', () => {
//     it('deve retornar lista vazia de agendamentos com status 200 (inicialmente)', async () => {
//       const response = await request(app).get('/appointments');
//       expect(response.status).toBe(200);
//       expect(Array.isArray(response.body)).toBe(true);
//       expect(response.body).toEqual([]);
//     });

//     it('deve retornar os agendamentos após criar um via POST', async () => {
//       await request(app)
//         .post('/appointments')
//         .send({
//           client: 'João Silva',
//           service: 'Corte de cabelo masculino',
//           date: '2023-10-15T10:00:00Z'
//         })
//         .expect(201);

//       const response = await request(app).get('/appointments');
//       expect(response.status).toBe(200);
//       expect(response.body.length).toBe(1);
//       expect(response.body[0]).toHaveProperty('id');
//       expect(response.body[0].client).toBe('João Silva');
//       expect(response.body[0].service).toBe('Corte de cabelo masculino');
//     });
//   });

//   describe('POST /appointments', () => {
//     it('deve criar um novo agendamento com status 201 e retornar os dados', async () => {
//       const newAppointment = {
//         client: 'Eduardo Costa',
//         service: 'Corte social',
//         date: '2023-10-16T14:00:00Z'
//       };

//       const response = await request(app)
//         .post('/appointments')
//         .send(newAppointment)
//         .set('Accept', 'application/json');

//       expect(response.status).toBe(201);
//       expect(response.body).toHaveProperty('id');
//       expect(response.body.id).toBeGreaterThan(0);
//       expect(response.body.client).toBe(newAppointment.client);
//       expect(response.body.service).toBe(newAppointment.service);
//       expect(response.body.date).toBe(newAppointment.date);

//       createdId = response.body.id;
//     });

//     it('deve retornar erro 400 se campos obrigatórios estiverem faltando', async () => {
//       const incompleteData = {
//         client: 'Pedro'
//       };

//       const response = await request(app)
//         .post('/appointments')
//         .send(incompleteData)
//         .set('Accept', 'application/json');
//       expect(response.status).toBe(400);
//       expect(response.body).toHaveProperty('error');
//       expect(response.body.error).toContain('obrigatórios');
//     });
//   });

//   describe('PUT /appointments/:id', () => {
//     beforeEach(async () => {
//       //testar a atualização
//       const createResponse = await request(app)
//         .post('/appointments')
//         .send({
//           client: 'Ana Costa',
//           service: 'Manicure e pedicure',
//           date: '2023-10-17T09:00:00Z'
//         });
//       createdId = createResponse.body.id;
//     });

//     it('deve atualizar um agendamento existente com status 200', async () => {
//       const updatedData = {
//         client: 'Jonh Kleber',
//         service: 'Corte Militar',
//         date: '2023-10-17T11:00:00Z'
//       };

//       const response = await request(app)
//         .put(`/appointments/${createdId}`)
//         .send(updatedData)
//         .set('Accept', 'application/json');

//       expect(response.status).toBe(200);
//       expect(response.body.id).toBe(createdId);
//       expect(response.body.client).toBe(updatedData.client);
//       expect(response.body.service).toBe(updatedData.service);
//       expect(response.body.date).toBe(updatedData.date);
//     });

//     it('deve retornar erro 404 se o ID não existir', async () => {
//       const response = await request(app)
//         .put('/appointments/999') //id invalido
//         .send({ client: 'Teste' })
//         .set('Accept', 'application/json');
//       expect(response.status).toBe(404);
//       expect(response.body).toHaveProperty('error');
//       expect(response.body.error).toContain('não encontrado');
//     });
//   });

//   describe('DELETE /appointments/:id', () => {
//     beforeEach(async () => {
//       //criação de agendamento teste
//       const createResponse = await request(app)
//         .post('/appointments')
//         .send({
//           client: 'Lucas Mendes',
//           service: 'Barba e corte social',
//           date: '2023-10-18T15:00:00Z'
//         });
//       createdId = createResponse.body.id;
//     });

//     it('deve deletar um agendamento existente com status 204', async () => {
//       const deleteResponse = await request(app).delete(`/appointments/${createdId}`);
//       expect(deleteResponse.status).toBe(204); //sem conteudo
//       const getResponse = await request(app).get('/appointments');
//       const appointmentExists = getResponse.body.some(appointment => appointment.id === createdId);
//       expect(appointmentExists).toBe(false);
//     });

//     it('deve retornar erro 404 se o ID não existir', async () => {
//       const response = await request(app).delete('/appointments/999'); //id invalido
//       expect(response.status).toBe(404);
//       expect(response.body).toHaveProperty('error');
//       expect(response.body.error).toContain('não encontrado');
//     });
//   });
// });

// Teste03 - Com o professsor

// const request = require('supertest');
// const app = require('../src/app');
// const mongoose = require('mongoose');
// const User = require('../src/models/User');
// const Appointment = require('../src/models/Appointment');

// describe('Integração: Agendamentos (com MongoDB e Auth)', () => {
//   let token;
//   let createdId;

//   // Antes de todos os testes: Conecta e cria Usuário para pegar Token
//   beforeAll(async () => {
//     // Usa o MONGO_URI do .env ou um banco de memória se preferir
//     await mongoose.connect(process.env.MONGO_URI);

//     // Limpa o banco para começar zerado
//     await User.deleteMany({});
//     await Appointment.deleteMany({});

//     // Cria usuário de teste
//     await request(app).post('/auth/register').send({
//       email: "teste@teste.com",
//       password: "123" // O model User.js já faz o hash
//     });

//     // Faz login para pegar o token
//     const res = await request(app).post('/auth/login').send({
//       email: "teste@teste.com",
//       password: "123"
//     });

//     token = res.body.token;
//   });

//   // Fecha conexão ao final
//   afterAll(async () => {
//     await mongoose.connection.close();
//   });

//   describe('POST /appointments', () => {
//     it('Deve falhar sem token (401)', async () => {
//       await request(app).post('/appointments').send({
//         client: 'Sem Auth', service: 'Corte', date: 'Hoje'
//       }).expect(401);
//     });

//     it('Deve criar agendamento com sucesso (201)', async () => {
//       const res = await request(app)
//         .post('/appointments')
//         .set('Authorization', `Bearer ${token}`) // Envia o Token
//         .send({
//           client: 'João Silva',
//           service: 'Corte Masculino',
//           date: '2023-12-25'
//         });

//       expect(res.status).toBe(201);
//       expect(res.body).toHaveProperty('_id'); // Mongo usa _id
//       createdId = res.body._id; // Salva ID para os próximos testes
//     });
//   });

//   describe('GET /appointments', () => {
//     it('Deve listar os agendamentos', async () => {
//       const res = await request(app).get('/appointments');
//       expect(res.status).toBe(200);
//       expect(res.body.length).toBeGreaterThan(0);
//       expect(res.body[0].client).toBe('João Silva');
//     });
//   });

//   describe('PUT /appointments/:id', () => {
//     it('Deve atualizar o agendamento', async () => {
//       const res = await request(app)
//         .put(`/appointments/${createdId}`)
//         .set('Authorization', `Bearer ${token}`)
//         .send({
//           client: 'João Silva Editado',
//           service: 'Barba',
//           date: '2023-12-26'
//         });

//       expect(res.status).toBe(200); // Controller retorna o objeto atualizado ou status 200
//       expect(res.body.client).toBe('João Silva Editado');
//     });
//   });

//   describe('DELETE /appointments/:id', () => {
//     it('Deve remover o agendamento', async () => {
//       await request(app)
//         .delete(`/appointments/${createdId}`)
//         .set('Authorization', `Bearer ${token}`)
//         .expect(204);

//       // Confirma que sumiu
//       const check = await Appointment.findById(createdId);
//       expect(check).toBeNull();
//     });
//   });
// });

//  "test": "jest",
//     "start": "node index.js"

// Teste 04

// const request = require('supertest');
// const app = require('../src/app');
// const mongoose = require('mongoose');
// const User = require('../src/models/User'); // Ajuste o caminho se necessário
// const Appointment = require('../src/models/Appointment'); // Ajuste o caminho se necessário

// describe('Sistema de Agendamento - Testes com MongoDB', () => {
//   let token;
//   let createdId;

//   // Antes de todos os testes: Conecta, limpa e cria usuário para pegar Token
//   beforeAll(async () => {
//     // Conecta ao banco definido no .env
//     await mongoose.connect(process.env.MONGO_URI);

//     // Limpa o banco para começar zerado
//     await User.deleteMany({});
//     await Appointment.deleteMany({});

//     // 1. Cria usuário de teste
//     await request(app).post('/auth/register').send({
//       email: "teste@teste.com",
//       password: "123"
//     });

//     // 2. Faz login para pegar o token
//     const res = await request(app).post('/auth/login').send({
//       email: "teste@teste.com",
//       password: "123"
//     });

//     token = res.body.token;
//   });

//   // Fecha conexão ao final para o Jest não travar
//   afterAll(async () => {
//     await mongoose.connection.close();
//   });

//   describe('POST /appointments', () => {
//     it('Deve falhar se tentar criar sem Token (401)', async () => {
//       await request(app).post('/appointments').send({
//         client: 'Sem Auth', service: 'Corte', date: 'Hoje'
//       }).expect(401);
//     });

//     it('Deve criar agendamento com sucesso usando Token (201)', async () => {
//       const res = await request(app)
//         .post('/appointments')
//         .set('Authorization', `Bearer ${token}`) // Envia o Token
//         .send({
//           client: 'João Silva',
//           service: 'Corte Masculino',
//           date: '2023-12-25'
//         });

//       expect(res.status).toBe(201);
//       expect(res.body).toHaveProperty('_id');
//       createdId = res.body._id; // Salva ID para os próximos testes
//     });
//   });

//   describe('GET /appointments', () => {
//     it('Deve listar os agendamentos', async () => {
//       const res = await request(app).get('/appointments');
//       expect(res.status).toBe(200);
//       expect(Array.isArray(res.body)).toBe(true);
//       expect(res.body.length).toBeGreaterThan(0);
//     });
//   });

//   describe('PUT /appointments/:id', () => {
//     it('Deve atualizar o agendamento', async () => {
//       const res = await request(app)
//         .put(`/appointments/${createdId}`)
//         .set('Authorization', `Bearer ${token}`)
//         .send({
//           client: 'João Silva Editado',
//           service: 'Barba',
//           date: '2023-12-26'
//         });

//       expect(res.status).toBe(200);
//       // Verifica se o retorno contém o dado atualizado
//       // Dependendo da sua implementação do controller, pode retornar o antigo ou o novo.
//       // O ideal é conferir se não deu erro.
//     });
//   });

//   describe('DELETE /appointments/:id', () => {
//     it('Deve remover o agendamento', async () => {
//       await request(app)
//         .delete(`/appointments/${createdId}`)
//         .set('Authorization', `Bearer ${token}`)
//         .expect(204);

//       // Confirma que sumiu do banco
//       const check = await Appointment.findById(createdId);
//       expect(check).toBeNull();
//     });
//   });
// });

//Novamente outro Teste04

// const request = require('supertest');
// const app = require('../src/app');
// const mongoose = require('mongoose');
// const User = require('../src/models/User');
// const Appointment = require('../src/models/Appointment');

// // 1. CORREÇÃO: Carregar as variáveis do arquivo .env
// require("dotenv").config();

// // 2. CORREÇÃO: Montar o link igual fizemos no server.js
// // Se uma das variáveis estiver faltando, vai dar erro, então garante que o .env está certo
// const mongoUri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`;

// describe('Sistema de Agendamento - Testes com MongoDB', () => {
//   let token;
//   let createdId;

//   // Antes de todos os testes
//   beforeAll(async () => {
//     // Usa o link montado acima
//     await mongoose.connect(mongoUri);

//     // Limpa o banco para começar zerado
//     await User.deleteMany({});
//     await Appointment.deleteMany({});

//     // Cria usuário de teste
//     await request(app).post('/auth/register').send({
//       email: "teste@teste.com",
//       password: "123"
//     });

//     // Faz login para pegar o token
//     const res = await request(app).post('/auth/login').send({
//       email: "teste@teste.com",
//       password: "123"
//     });

//     token = res.body.token;
//   });

//   // Fecha conexão ao final
//   afterAll(async () => {
//     await mongoose.connection.close();
//   });

//   describe('POST /appointments', () => {
//     it('Deve falhar se tentar criar sem Token (401)', async () => {
//       await request(app).post('/appointments').send({
//         client: 'Sem Auth', service: 'Corte', date: 'Hoje'
//       }).expect(401);
//     });

//     it('Deve criar agendamento com sucesso usando Token (201)', async () => {
//       const res = await request(app)
//         .post('/appointments')
//         .set('Authorization', `Bearer ${token}`) // Envia o Token
//         .send({
//           client: 'João Silva',
//           service: 'Corte Masculino',
//           date: '2023-12-25'
//         });

//       expect(res.status).toBe(201);
//       expect(res.body).toHaveProperty('_id');
//       createdId = res.body._id; // Salva ID para os próximos testes
//     });
//   });

//   describe('GET /appointments', () => {
//     it('Deve listar os agendamentos', async () => {
//       const res = await request(app).get('/appointments');
//       expect(res.status).toBe(200);
//       expect(Array.isArray(res.body)).toBe(true);
//       expect(res.body.length).toBeGreaterThan(0);
//     });
//   });

//   describe('PUT /appointments/:id', () => {
//     it('Deve atualizar o agendamento', async () => {
//       const res = await request(app)
//         .put(`/appointments/${createdId}`)
//         .set('Authorization', `Bearer ${token}`)
//         .send({
//           client: 'João Silva Editado',
//           service: 'Barba',
//           date: '2023-12-26'
//         });

//       expect(res.status).toBe(200);
//     });
//   });

//   describe('DELETE /appointments/:id', () => {
//     it('Deve remover o agendamento', async () => {
//       await request(app)
//         .delete(`/appointments/${createdId}`)
//         .set('Authorization', `Bearer ${token}`)
//         .expect(204);

//       // Confirma que sumiu do banco
//       const check = await Appointment.findById(createdId);
//       expect(check).toBeNull();
//     });
//   });
// });

// Novamente2 teste04

// const request = require('supertest');
// const app = require('../src/app');
// const mongoose = require('mongoose');
// const User = require('../src/models/User');
// const Appointment = require('../src/models/Appointment');
// const path = require('path');

// // --- CORREÇÃO AQUI ---
// // __dirname = pasta tests
// // ..        = sobe para raiz
// // src/config/.env = desce até o arquivo
// require("dotenv").config({ path: path.resolve(__dirname, '../src/config/.env') });

// // Verifica se carregou. Se imprimir 'undefined' no console, o arquivo .env está vazio ou com nome errado.
// if (!process.env.MONGODB_HOST) {
//   console.error("❌ O arquivo .env não foi encontrado em src/config/.env");
//   console.error("❌ Verifique se o arquivo .env existe na raiz do projeto e tem conteúdo.");
// }

// // Monta o link
// const mongoUri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`;

// describe('Sistema de Agendamento - Testes com MongoDB', () => {
//   let token;
//   let createdId;

//   beforeAll(async () => {
//     // Conecta usando a URI montada
//     await mongoose.connect(mongoUri);

//     // Limpa o banco
//     await User.deleteMany({});
//     await Appointment.deleteMany({});

//     // Cria usuário de teste
//     await request(app).post('/auth/register').send({
//       email: "teste@teste.com",
//       password: "123"
//     });

//     // Login
//     const res = await request(app).post('/auth/login').send({
//       email: "teste@teste.com",
//       password: "123"
//     });

//     token = res.body.token;
//   });

//   afterAll(async () => {
//     await mongoose.connection.close();
//   });

//   describe('POST /appointments', () => {
//     it('Deve falhar se tentar criar sem Token (401)', async () => {
//       await request(app).post('/appointments').send({
//         client: 'Sem Auth', service: 'Corte', date: 'Hoje'
//       }).expect(401);
//     });

//     it('Deve criar agendamento com sucesso usando Token (201)', async () => {
//       const res = await request(app)
//         .post('/appointments')
//         .set('Authorization', `Bearer ${token}`)
//         .send({
//           client: 'João Silva',
//           service: 'Corte Masculino',
//           date: '2023-12-25'
//         });

//       expect(res.status).toBe(201);
//       createdId = res.body._id;
//     });
//   });

//   describe('GET /appointments', () => {
//     it('Deve listar os agendamentos', async () => {
//       const res = await request(app).get('/appointments');
//       expect(res.status).toBe(200);
//       expect(res.body.length).toBeGreaterThan(0);
//     });
//   });

//   describe('PUT /appointments/:id', () => {
//     it('Deve atualizar o agendamento', async () => {
//       const res = await request(app)
//         .put(`/appointments/${createdId}`)
//         .set('Authorization', `Bearer ${token}`)
//         .send({
//           client: 'João Silva Editado',
//           service: 'Barba',
//           date: '2023-12-26'
//         });

//       expect(res.status).toBe(200);
//     });
//   });

//   describe('DELETE /appointments/:id', () => {
//     it('Deve remover o agendamento', async () => {
//       await request(app)
//         .delete(`/appointments/${createdId}`)
//         .set('Authorization', `Bearer ${token}`)
//         .expect(204);

//       const check = await Appointment.findById(createdId);
//       expect(check).toBeNull();
//     });
//   });
// });

// Teste04.2

const request = require("supertest");
const app = require("../src/app");
const mongoose = require("mongoose");
const User = require("../src/models/User");
const Appointment = require("../src/models/Appointment");
const path = require("path");

// --- Configuração do .env ---
// Aponta para src/config/.env
require("dotenv").config({
  path: path.resolve(__dirname, "../src/config/.env"),
});

// Verifica se carregou. Se imprimir erro no console, o arquivo .env está no lugar errado.
if (!process.env.MONGODB_HOST) {
  console.error("❌ O arquivo .env não foi encontrado em src/config/.env");
  console.error("❌ Verifique se o arquivo .env existe e tem conteúdo.");
}

// Monta o link do Banco de Dados
const mongoUri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`;

describe("Sistema de Agendamento - Testes com MongoDB", () => {
  let token;
  let createdId;

  // --- AQUI ESTÁ O BLOCO QUE VOCÊ PEDIU ---
  beforeAll(async () => {
    // Conecta usando a URI montada
    await mongoose.connect(mongoUri);

    // Limpa o banco para começar zerado
    await User.deleteMany({});
    await Appointment.deleteMany({});

    // 1. TENTA CRIAR O USUÁRIO E VERIFICA SE DEU CERTO
    const regRes = await request(app).post("/auth/register").send({
      email: "teste@teste.com",
      password: "123",
    });

    // Se não retornar 201 (Criado), mostra o erro no terminal
    if (regRes.status !== 201) {
      console.error("\n❌ ERRO CRÍTICO NO TESTE - CRIAÇÃO DE USUÁRIO:");
      console.error("Status Recebido:", regRes.status); // Se for 404, a rota não existe no arquivo de rotas
      console.error("Mensagem de Erro:", regRes.body);
    }

    // 2. TENTA FAZER LOGIN
    const loginRes = await request(app).post("/auth/login").send({
      email: "teste@teste.com",
      password: "123",
    });

    token = loginRes.body.token;

    // Se não gerou token, avisa
    if (!token) {
      console.error("\n❌ ERRO CRÍTICO NO TESTE - LOGIN:");
      console.error("Status Login:", loginRes.status);
      console.error("Erro Login:", loginRes.body);
    }
  });
  // ----------------------------------------

  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe("POST /appointments", () => {
    it("Deve falhar se tentar criar sem Token (401)", async () => {
      await request(app)
        .post("/appointments")
        .send({
          client: "Sem Auth",
          service: "Corte",
          date: "Hoje",
        })
        .expect(401);
    });

    it("Deve criar agendamento com sucesso usando Token (201)", async () => {
      const res = await request(app)
        .post("/appointments")
        .set("Authorization", `Bearer ${token}`)
        .send({
          client: "João Silva",
          service: "Corte Masculino",
          date: "2023-12-25",
        });

      expect(res.status).toBe(201);
      createdId = res.body._id;
    });
  });

  describe("GET /appointments", () => {
    it("Deve listar os agendamentos", async () => {
      const res = await request(app).get("/appointments");
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  describe("PUT /appointments/:id", () => {
    it("Deve atualizar o agendamento", async () => {
      const res = await request(app)
        .put(`/appointments/${createdId}`)
        .set("Authorization", `Bearer ${token}`)
        .send({
          client: "João Silva Editado",
          service: "Barba",
          date: "2023-12-26",
        });

      expect(res.status).toBe(200);
    });
  });

  describe("DELETE /appointments/:id", () => {
    it("Deve remover o agendamento", async () => {
      await request(app)
        .delete(`/appointments/${createdId}`)
        .set("Authorization", `Bearer ${token}`)
        .expect(204);

      const check = await Appointment.findById(createdId);
      expect(check).toBeNull();
    });
  });
});
