const express = require("express");
const router = express.Router();

/**
 * @openapi
 * /services:
 *   get:
 *     summary: Lista todos os serviços do salão
 *     tags:
 *       - Services
 *     responses:
 *       200:
 *         description: Lista de serviços retornada com sucesso
 */
router.get("/services", (req, res) => {
  res.json([
    { id: 1, nome: "Corte de Cabelo", preco: 40 },
    { id: 2, nome: "Sobrancelha", preco: 20 },
    { id: 3, nome: "Corte + Sobrancelha", preco: 55 },
    { id: 4, nome: "Platinar o Cabelo", preco: 180 },
    { id: 5, nome: "Tintura", preco: 90 },
    { id: 6, nome: "Progressiva", preco: 150 },
    { id: 7, nome: "Hidratação", preco: 45 },
    { id: 8, nome: "Luzes", preco: 170 },
    { id: 9, nome: "Barba", preco: 25 }
  ]);
});

/**
 * @openapi
 * /services:
 *   post:
 *     summary: Adiciona um novo serviço ao salão
 *     tags:
 *       - Services
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               preco:
 *                 type: number
 *     responses:
 *       201:
 *         description: Serviço cadastrado com sucesso
 */
router.post("/services", (req, res) => {
  res.status(201).json({ message: "Serviço cadastrado!" });
});

module.exports = router;

