const express = require("express");
const router = express.Router();
const controller = require("../controllers/appointmentController");
const auth = require("../middlewares/auth");

/**
 * @openapi
 * /appointments:
 *   get:
 *     summary: Lista todos os agendamentos
 *     tags: [Appointments]
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get("/", controller.getAll);

/**
 * @openapi
 * /appointments/{id}:
 *   get:
 *     summary: Obtém um agendamento por ID
 *     tags: [Appointments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucesso
 *       404:
 *         description: Não encontrado
 */
router.get("/:id", controller.getOne);

/**
 * @openapi
 * /appointments:
 *   post:
 *     summary: Cria um novo agendamento (Requer Login)
 *     tags: [Appointments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               client:
 *                 type: string
 *               service:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Criado com sucesso
 *       401:
 *         description: Não autorizado
 */
router.post("/", auth, controller.create);

/**
 * @openapi
 * /appointments/{id}:
 *   put:
 *     summary: Atualiza um agendamento (Requer Login)
 *     tags: [Appointments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               client:
 *                 type: string
 *               service:
 *                 type: string
 *               date:
 *                 type: string
 *     responses:
 *       200:
 *         description: Atualizado com sucesso
 */
router.put("/:id", auth, controller.update);

/**
 * @openapi
 * /appointments/{id}:
 *   delete:
 *     summary: Remove um agendamento (Requer Login)
 *     tags: [Appointments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Removido com sucesso
 */
router.delete("/:id", auth, controller.remove);

module.exports = { router };