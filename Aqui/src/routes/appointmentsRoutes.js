const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");
const auth = require("../middlewares/auth");

// Rotas protegidas por JWT
router.post("/", auth, appointmentController.create);
router.put("/:id", auth, appointmentController.update);
router.delete("/:id", auth, appointmentController.remove);

// Rotas livres
router.get("/", appointmentController.getAll);
router.get("/:id", appointmentController.getOne);

module.exports = router;
