const request = require("supertest");
const app = require("../app");

describe("Rotas de Appointments", () => {
  it("Deve criar um agendamento", async () => {
    const res = await request(app)
      .post("/appointments")
      .send({ client: "João", service: "Corte", date: "2025-01-01" });

    expect(res.status).toBe(201);
    expect(res.body.client).toBe("João");
  });

  it("Deve retornar todos os agendamentos", async () => {
    const res = await request(app).get("/appointments");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("Deve atualizar um agendamento", async () => {
    const res = await request(app)
      .put("/appointments/1")
      .send({ service: "Barba" });

    expect(res.status).toBe(200);
    expect(res.body.service).toBe("Barba");
  });

  it("Deve apagar um agendamento", async () => {
    const res = await request(app).delete("/appointments/1");
    expect(res.status).toBe(204);
  });
});