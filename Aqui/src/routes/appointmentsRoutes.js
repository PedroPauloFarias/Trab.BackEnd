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



// Logo abaixo teste2

const express = require("express");
const router = express.Router();

let appointments = [];
let nextId = 1;

// GET /appointments
router.get("/", (req, res) => {
  return res.status(200).json(appointments);
});

// POST /appointments
router.post("/", (req, res) => {
  const { client, service, date } = req.body;

  if (!client || !service || !date) {
    return res.status(400).json({ error: "Campos obrigatórios faltando" });
  }

  const appointment = {
    id: nextId++,
    client,
    service,
    date,
  };

  appointments.push(appointment);

  return res.status(201).json(appointment);
});

// PUT /appointments/:id
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = appointments.findIndex((a) => a.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Agendamento não encontrado" });
  }

  const { client, service, date } = req.body;

  appointments[index] = {
    ...appointments[index],
    client,
    service,
    date,
  };

  return res.status(200).json(appointments[index]);
});

// DELETE /appointments/:id
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = appointments.findIndex((a) => a.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Agendamento não encontrado" });
  }

  appointments.splice(index, 1);

  return res.status(204).send();
});

// FUNÇÃO PARA RESETAR (JEST)
function resetAppointments() {
  appointments = [];
  nextId = 1;
}

module.exports = {
  router,
  resetAppointments
};
