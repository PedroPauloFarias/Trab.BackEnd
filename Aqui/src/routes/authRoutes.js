// const express = require("express");
// const router = express.Router();
// const controller = require("../controllers/authController");

// router.post("/login", controller.login);
// router.post("/register", controller.register);//Teste04


// module.exports = router;


// Teste04

// const express = require("express");
// const router = express.Router();

// // IMPORTANTE: Apontar para o userController, que é quem tem o 'register' e o 'login' corrigidos
// const controller = require("../controllers/userController");

// // Rota para Registrar (Usada no 'beforeAll' do teste)
// router.post("/register", controller.register);

// // Rota para Login (Usada para pegar o Token)
// router.post("/login", controller.login);

// module.exports = router;

//Teste04.2


// const express = require("express");
// const router = express.Router();
// // Importa o controller corrigido
// const controller = require("../controllers/userController");

// // --- ESTA ROTA É OBRIGATÓRIA PARA O TESTE ---
// router.post("/register", controller.register);

// // Rota de Login
// router.post("/login", controller.login);

// module.exports = router;


// Teste04.3
const express = require("express");
const router = express.Router();
// Importa o controller corrigido
const controller = require("../controllers/userController");

// --- ESTA ROTA ERA A QUE ESTAVA FALTANDO ---
router.post("/register", controller.register);

// Rota de Login
router.post("/login", controller.login);

module.exports = router;