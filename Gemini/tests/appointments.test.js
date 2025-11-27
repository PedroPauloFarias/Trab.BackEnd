const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, '../src/config/.env') });

const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../src/app");
const User = require("../src/models/User");
const Appointment = require("../src/models/Appointment");

// Timeout maior para conexão com o banco
jest.setTimeout(30000);

let token;
const TEST_EMAIL = "teste_final@teste.com";
const TEST_PASS = "senha123";

beforeAll(async () => {
  const mongoUri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
  
  await mongoose.connect(mongoUri);

  // Limpa o banco antes de começar
  await User.deleteMany({ email: TEST_EMAIL });
  await Appointment.deleteMany({ client: "Cliente Teste" });

  // 1. Cria Usuário
  await request(app).post("/auth/register").send({
    email: TEST_EMAIL,
    password: TEST_PASS
  });

  // 2. Faz Login
  const resLogin = await request(app).post("/auth/login").send({
    email: TEST_EMAIL,
    password: TEST_PASS
  });

  // Pega o token
  token = resLogin.body.token;
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Testes de Agendamento", () => {
  
  test("GET /appointments - Deve listar agendamentos", async () => {
    const res = await request(app).get("/appointments");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("POST /appointments - Deve criar agendamento (Com Token)", async () => {
    const res = await request(app)
      .post("/appointments")
      .set("Authorization", `Bearer ${token}`)
      .send({
        client: "Cliente Teste",
        service: "Corte Completo",
        date: new Date().toISOString()
      });
    
    expect(res.statusCode).toBe(201);
    expect(res.body.client).toBe("Cliente Teste");
  });

  test("POST /appointments - Deve bloquear sem token", async () => {
    const res = await request(app)
      .post("/appointments")
      .send({
        client: "Cliente Invasor",
        service: "Gratis",
        date: new Date().toISOString()
      });
    
    expect(res.statusCode).toBe(401);
  });
});