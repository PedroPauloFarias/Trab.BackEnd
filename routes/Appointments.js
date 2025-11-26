const express = require("express");
const router = express.Router();

/**
 * @openapi
 * /appointments:
 *   get:
 *     summary: Lista todos os agendamentos
 *     tags:
 *       - Appointments
 *     responses:
 *       200:
 *         description: Lista de agendamentos
 */
router.get("/appointments", (req, res) => {
  res.json([
    {
      id: 1,
      cliente: "Lucas",
      servico: "Corte Masculino",
      data: "2025-11-30 17:00"
    },
    {
      id: 2,
      cliente: "Maria",
      servico: "Sobrancelha",
      data: "2025-11-30 15:30"
    },
    {
      id: 3,
      cliente: "João",
      servico: "Corte + Sobrancelha",
      data: "2025-12-01 10:00"
    },
    {
      id: 4,
      cliente: "Carla",
      servico: "Progressiva",
      data: "2025-12-01 14:00"
    },
    {
      id: 5,
      cliente: "Fernanda",
      servico: "Hidratação",
      data: "2025-12-02 09:30"
    },
    {
      id: 6,
      cliente: "Eduardo",
      servico: "Barba",
      data: "2025-12-02 16:00"
    },
    {
      id: 7,
      cliente: "Patrícia",
      servico: "Platinar o Cabelo",
      data: "2025-12-03 13:00"
    },
    {
      id: 8,
      cliente: "Ricardo",
      servico: "Luzes",
      data: "2025-12-03 18:00"
    }
  ]);
});

/**
 * @openapi
 * /appointments:
 *   post:
 *     summary: Cria um novo agendamento
 *     tags:
 *       - Appointments
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clientId:
 *                 type: number
 *               serviceId:
 *                 type: number
 *               horario:
 *                 type: string
 *     responses:
 *       201:
 *         description: Agendamento criado
 */
router.post("/appointments", (req, res) => {
  res.status(201).json({ message: "Agendamento criado!" });
});

module.exports = router;

