const express = require("express");
const router = express.Router();

/**
 * @openapi
 * /clients:
 *   get:
 *     summary: Lista todos os clientes
 *     tags:
 *       - Clients
 *     responses:
 *       200:
 *         description: Lista de clientes retornada
 */
router.get("/clients", (req, res) => {
  res.json([{ id: 1, nome: "Lucas" }]);
});

/**
 * @openapi
 * /clients:
 *   post:
 *     summary: Cadastra um novo cliente
 *     tags:
 *       - Clients
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cliente cadastrado
 */
router.post("/clients", (req, res) => {
  res.status(201).json({ message: "Cliente cadastrado!" });
});

module.exports = router;
