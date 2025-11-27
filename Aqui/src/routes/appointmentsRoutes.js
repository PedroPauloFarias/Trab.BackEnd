// const express = require("express");
// const router = express.Router();
// const controller = require("../controllers/appointmentController");
// const auth = require("../middlewares/auth");

// /**
//  * @openapi
//  * /api/v1/appointments:
//  *   get:
//  *     summary: Lista todos os agendamentos
//  */
// router.get("/", controller.getAll);

// /**
//  * @openapi
//  * /api/v1/appointments/{id}:
//  *   get:
//  *     summary: Obtém 1 agendamento
//  */
// router.get("/:id", controller.getOne);

// /**
//  * @openapi
//  * /api/v1/appointments:
//  *   post:
//  *     summary: Cria um agendamento
//  */
// router.post("/", auth, controller.create);

// /**
//  * @openapi
//  * /api/v1/appointments/{id}:
//  *   put:
//  *     summary: Atualiza um agendamento
//  */
// router.put("/:id", auth, controller.update);

// /**
//  * @openapi
//  * /api/v1/appointments/{id}:
//  *   delete:
//  *     summary: Remove um agendamento
//  */
// router.delete("/:id", auth, controller.remove);

// module.exports = router;

// Aqui 

// const express = require("express");
// const router = express.Router();


// let appointments = [];
// let nextId = 1;

// // GET /appointments → lista todos
// router.get("/", (req, res) => {
//   return res.status(200).json(appointments);
// });

// // POST /appointments → cria
// router.post("/", (req, res) => {
//   const { client, service, date } = req.body;

//   if (!client || !service || !date) {
//     return res.status(400).json({ error: "Campos obrigatórios faltando" });
//   }

//   const appointment = {
//     id: nextId++,
//     client,
//     service,
//     date,
//   };

//   appointments.push(appointment);

//   return res.status(201).json(appointment);
// });

// // PUT /appointments/:id → atualiza
// router.put("/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const index = appointments.findIndex((a) => a.id === id);

//   if (index === -1) {
//     return res.status(404).json({ error: "Agendamento não encontrado" });
//   }

//   const { client, service, date } = req.body;

//   appointments[index] = {
//     ...appointments[index],
//     client,
//     service,
//     date,
//   };

//   return res.status(200).json(appointments[index]);
// });

// // DELETE /appointments/:id → remove
// router.delete("/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const index = appointments.findIndex((a) => a.id === id);

//   if (index === -1) {
//     return res.status(404).json({ error: "Agendamento não encontrado" });
//   }

//   appointments.splice(index, 1);

//   return res.status(204).send(); // sem conteúdo
// });

// // Eu adicione esse logo abaixo, Pedro Paulo
// function resetAppointments() {
//   appointments = [];
//   nextId = 1;
// }

// module.exports = {
//   router,
//   resetAppointments
// };

// //module.exports = router;



// Logo abaixo teste2 Esse que roda

// const express = require("express");
// const router = express.Router();

// let appointments = [];
// let nextId = 1;

// // GET /appointments
// router.get("/", (req, res) => {
//   return res.status(200).json(appointments);
// });

// // POST /appointments
// router.post("/", (req, res) => {
//   const { client, service, date } = req.body;

//   if (!client || !service || !date) {
//     return res.status(400).json({ error: "Campos obrigatórios faltando" });
//   }

//   const appointment = {
//     id: nextId++,
//     client,
//     service,
//     date,
//   };

//   appointments.push(appointment);

//   return res.status(201).json(appointment);
// });

// // PUT /appointments/:id
// router.put("/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const index = appointments.findIndex((a) => a.id === id);

//   if (index === -1) {
//     return res.status(404).json({ error: "Agendamento não encontrado" });
//   }

//   const { client, service, date } = req.body;

//   appointments[index] = {
//     ...appointments[index],
//     client,
//     service,
//     date,
//   };

//   return res.status(200).json(appointments[index]);
// });

// // DELETE /appointments/:id
// router.delete("/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const index = appointments.findIndex((a) => a.id === id);

//   if (index === -1) {
//     return res.status(404).json({ error: "Agendamento não encontrado" });
//   }

//   appointments.splice(index, 1);

//   return res.status(204).send();
// });

// // FUNÇÃO PARA RESETAR (JEST)
// function resetAppointments() {
//   appointments = [];
//   nextId = 1;
// }

// module.exports = {
//   router,
//   resetAppointments
// };


// Teste03- Com o professor



// const express = require("express");
// const router = express.Router();
// const controller = require("../controllers/appointmentController");
// const auth = require("../middlewares/auth");

// /**
//  * @openapi
//  * /appointments:
//  * get:
//  * summary: Lista todos os agendamentos
//  */
// router.get("/", controller.getAll);

// /**
//  * @openapi
//  * /appointments/{id}:
//  * get:
//  * summary: Obtém 1 agendamento pelo ID do Mongo
//  */
// router.get("/:id", controller.getOne);

// /**
//  * @openapi
//  * /appointments:
//  * post:
//  * summary: Cria um agendamento (Requer Token)
//  * security:
//  * - bearerAuth: []
//  */
// router.post("/", auth, controller.create);

// /**
//  * @openapi
//  * /appointments/{id}:
//  * put:
//  * summary: Atualiza um agendamento (Requer Token)
//  * security:
//  * - bearerAuth: []
//  */
// router.put("/:id", auth, controller.update);

// /**
//  * @openapi
//  * /appointments/{id}:
//  * delete:
//  * summary: Remove um agendamento (Requer Token)
//  * security:
//  * - bearerAuth: []
//  */
// router.delete("/:id", auth, controller.remove);

// module.exports = { router };


// Teste 04



// const express = require("express");
// const router = express.Router();

// // 1. Importa o Controller (que contém a lógica do MongoDB)
// const controller = require("../controllers/appointmentController");

// // 2. Importa o Middleware de Autenticação (Segurança JWT)
// const auth = require("../middlewares/auth");

// /**
//  * @openapi
//  * /appointments:
//  * get:
//  * summary: Lista todos os agendamentos salvos no banco
//  * tags: [Appointments]
//  * responses:
//  * 200:
//  * description: Lista retornada com sucesso
//  */
// router.get("/", controller.getAll);

// /**
//  * @openapi
//  * /appointments/{id}:
//  * get:
//  * summary: Busca um agendamento específico pelo ID
//  * tags: [Appointments]
//  * parameters:
//  * - in: path
//  * name: id
//  * required: true
//  * schema:
//  * type: string
//  * description: O ID do agendamento (MongoDB ID)
//  * responses:
//  * 200:
//  * description: Agendamento encontrado
//  * 404:
//  * description: Não encontrado
//  */
// router.get("/:id", controller.getOne);

// /**
//  * @openapi
//  * /appointments:
//  * post:
//  * summary: Cria um novo agendamento (Requer Login)
//  * tags: [Appointments]
//  * security:
//  * - bearerAuth: []
//  * requestBody:
//  * required: true
//  * content:
//  * application/json:
//  * schema:
//  * type: object
//  * required:
//  * - client
//  * - service
//  * - date
//  * properties:
//  * client:
//  * type: string
//  * service:
//  * type: string
//  * date:
//  * type: string
//  * format: date-time
//  * responses:
//  * 201:
//  * description: Criado com sucesso
//  */
// router.post("/", auth, controller.create);

// /**
//  * @openapi
//  * /appointments/{id}:
//  * put:
//  * summary: Atualiza um agendamento existente (Requer Login)
//  * tags: [Appointments]
//  * security:
//  * - bearerAuth: []
//  * parameters:
//  * - in: path
//  * name: id
//  * required: true
//  * responses:
//  * 200:
//  * description: Atualizado com sucesso
//  */
// router.put("/:id", auth, controller.update);

// /**
//  * @openapi
//  * /appointments/{id}:
//  * delete:
//  * summary: Remove um agendamento (Requer Login)
//  * tags: [Appointments]
//  * security:
//  * - bearerAuth: []
//  * parameters:
//  * - in: path
//  * name: id
//  * required: true
//  * responses:
//  * 204:
//  * description: Removido com sucesso (Sem conteúdo)
//  */
// router.delete("/:id", auth, controller.remove);

// module.exports = { router };



//  Teste04.2


// const express = require("express");
// const router = express.Router();
// const controller = require("../controllers/appointmentController");
// const auth = require("../middlewares/auth");

// /**
//  * @openapi
//  * /appointments:
//  * get:
//  * summary: Lista todos os agendamentos
//  * tags: [Appointments]
//  * responses:
//  * 200:
//  * description: Lista retornada com sucesso
//  */
// router.get("/", controller.getAll);

// /**
//  * @openapi
//  * /appointments/{id}:
//  * get:
//  * summary: Busca um agendamento específico
//  * tags: [Appointments]
//  * parameters:
//  * - in: path
//  * name: id
//  * required: true
//  * schema:
//  * type: string
//  * description: ID do agendamento
//  * responses:
//  * 200:
//  * description: Agendamento encontrado
//  * 404:
//  * description: Não encontrado
//  */
// router.get("/:id", controller.getOne);

// /**
//  * @openapi
//  * /appointments:
//  * post:
//  * summary: Cria um novo agendamento
//  * tags: [Appointments]
//  * security:
//  * - bearerAuth: []
//  * requestBody:
//  * required: true
//  * content:
//  * application/json:
//  * schema:
//  * type: object
//  * required:
//  * - client
//  * - service
//  * - date
//  * properties:
//  * client:
//  * type: string
//  * service:
//  * type: string
//  * date:
//  * type: string
//  * responses:
//  * 201:
//  * description: Criado com sucesso
//  */
// router.post("/", auth, controller.create);

// /**
//  * @openapi
//  * /appointments/{id}:
//  * put:
//  * summary: Atualiza um agendamento
//  * tags: [Appointments]
//  * security:
//  * - bearerAuth: []
//  * parameters:
//  * - in: path
//  * name: id
//  * required: true
//  * schema:
//  * type: string
//  * description: ID do agendamento
//  * requestBody:
//  * content:
//  * application/json:
//  * schema:
//  * type: object
//  * properties:
//  * client:
//  * type: string
//  * service:
//  * type: string
//  * date:
//  * type: string
//  * responses:
//  * 200:
//  * description: Atualizado com sucesso
//  */
// router.put("/:id", auth, controller.update);

// /**
//  * @openapi
//  * /appointments/{id}:
//  * delete:
//  * summary: Remove um agendamento
//  * tags: [Appointments]
//  * security:
//  * - bearerAuth: []
//  * parameters:
//  * - in: path
//  * name: id
//  * required: true
//  * schema:
//  * type: string
//  * description: ID do agendamento
//  * responses:
//  * 204:
//  * description: Removido com sucesso
//  */
// router.delete("/:id", auth, controller.remove);

// module.exports = { router };


// Teste04.3


// const express = require("express");
// const router = express.Router();
// const controller = require("../controllers/appointmentController");
// const auth = require("../middlewares/auth");

// /**
//  * @openapi
//  * /appointments:
//  * get:
//  * summary: Lista todos os agendamentos
//  * responses:
//  * 200:
//  * description: Sucesso
//  */
// router.get("/", controller.getAll);

// /**
//  * @openapi
//  * /appointments/{id}:
//  * get:
//  * summary: Obtém um agendamento
//  * parameters:
//  * - in: path
//  * name: id
//  * required: true
//  * schema:
//  * type: string
//  * responses:
//  * 200:
//  * description: Sucesso
//  * 404:
//  * description: Não encontrado
//  */
// router.get("/:id", controller.getOne);

// /**
//  * @openapi
//  * /appointments:
//  * post:
//  * summary: Cria um novo agendamento
//  * security:
//  * - bearerAuth: []
//  * requestBody:
//  * required: true
//  * content:
//  * application/json:
//  * schema:
//  * type: object
//  * properties:
//  * client:
//  * type: string
//  * service:
//  * type: string
//  * date:
//  * type: string
//  * responses:
//  * 201:
//  * description: Criado com sucesso
//  */
// router.post("/", auth, controller.create);

// /**
//  * @openapi
//  * /appointments/{id}:
//  * put:
//  * summary: Atualiza um agendamento
//  * security:
//  * - bearerAuth: []
//  * parameters:
//  * - in: path
//  * name: id
//  * required: true
//  * schema:
//  * type: string
//  * requestBody:
//  * content:
//  * application/json:
//  * schema:
//  * type: object
//  * properties:
//  * client:
//  * type: string
//  * service:
//  * type: string
//  * date:
//  * type: string
//  * responses:
//  * 200:
//  * description: Atualizado com sucesso
//  */
// router.put("/:id", auth, controller.update);

// /**
//  * @openapi
//  * /appointments/{id}:
//  * delete:
//  * summary: Remove um agendamento
//  * security:
//  * - bearerAuth: []
//  * parameters:
//  * - in: path
//  * name: id
//  * required: true
//  * schema:
//  * type: string
//  * responses:
//  * 204:
//  * description: Removido com sucesso
//  */
// router.delete("/:id", auth, controller.remove);

// module.exports = { router };


// Teste04.4


const express = require("express");
const router = express.Router();
const controller = require("../controllers/appointmentController");
const auth = require("../middlewares/auth");

/**
 * @openapi
 * /appointments:
 *   get:
 *     summary: Lista todos os agendamentos
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get("/", controller.getAll);

/**
 * @openapi
 * /appointments/{id}:
 *   get:
 *     summary: Obtém um agendamento
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
 *     summary: Cria um novo agendamento
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
 *     responses:
 *       201:
 *         description: Criado com sucesso
 */
router.post("/", auth, controller.create);

/**
 * @openapi
 * /appointments/{id}:
 *   put:
 *     summary: Atualiza um agendamento
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
 *     summary: Remove um agendamento
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
