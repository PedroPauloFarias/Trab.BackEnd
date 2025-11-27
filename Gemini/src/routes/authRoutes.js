const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

/**
 * @openapi
 * /auth/register:
 *   post:
 *     summary: Registra um novo usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado
 *       400:
 *         description: Erro na requisição
 */
router.post("/register", controller.register);

/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: Realiza login e retorna Token JWT
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       401:
 *         description: Credenciais inválidas
 */
router.post("/login", controller.login);

module.exports = router;