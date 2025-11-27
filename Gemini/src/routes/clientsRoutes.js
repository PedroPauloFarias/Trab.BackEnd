const express = require("express");
const router = express.Router();
const controller = require("../controllers/clientController");
const auth = require("../middlewares/auth");

/**
 * @openapi
 * /clients:
 *   get:
 *     summary: Lista clientes
 *     tags: [Clients]
 *     responses:
 *       200:
 *         description: Sucesso
 *   post:
 *     summary: Cria cliente (Requer Login)
 *     tags: [Clients]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Criado
 */
router.get("/", controller.getAll);
router.post("/", auth, controller.create);

module.exports = router;