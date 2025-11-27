const express = require("express");
const router = express.Router();
const controller = require("../controllers/serviceController");
const auth = require("../middlewares/auth");

/**
 * @openapi
 * /services:
 *   get:
 *     summary: Lista serviços
 *     tags: [Services]
 *     responses:
 *       200:
 *         description: Sucesso
 *   post:
 *     summary: Cria serviço (Requer Login)
 *     tags: [Services]
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
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Criado
 */
router.get("/", controller.getAll);
router.post("/", auth, controller.create);

module.exports = router;