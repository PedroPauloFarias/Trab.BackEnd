// Esse é o anterior

// const express = require("express");
// const cors = require("cors");
// const { router: appointmentRoutes } = require("./routes/appointmentsRoutes");

// const app = express(); // CRIANDO O APP PRIMEIRO

// app.use(cors());
// app.use(express.json());

// // Logger
// app.use(require("./middlewares/logger"));

// // Rotas
// app.use("/appointments", appointmentRoutes);

// // Swagger, se tiver
// // app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// // Error Handler
// app.use(require("./middlewares/errorHandler"));

// module.exports = app;


// Teste03 Com o professor

// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// // Imports das Rotas
// const { router: appointmentsRoutes } = require("./routes/appointmentsRoutes"); // Note a desestruturação se mantiver o export { router }
// const authRoutes = require("./routes/authRoutes");
// const servicesRoutes = require("./routes/servicesRoutes");
// const clientsRoutes = require("./routes/clientsRoutes");

// // Swagger
// const { swaggerUi, swaggerSpec } = require("./swagger");

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Logger
// app.use(require("./middlewares/logger"));

// // Documentação
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// // Rotas
// app.use("/auth", authRoutes);
// app.use("/appointments", appointmentsRoutes); // Agora usa a rota correta
// app.use("/services", servicesRoutes);
// app.use("/clients", clientsRoutes);

// // Error Handler
// app.use(require("./middlewares/errorHandler"));

// module.exports = app;


// Teste04

// const express = require("express");
// const cors = require("cors");
// // Imports das Rotas
// const { router: appointmentRoutes } = require("./routes/appointmentsRoutes");
// const authRoutes = require("./routes/authRoutes");
// const clientsRoutes = require("./routes/clientsRoutes");
// const servicesRoutes = require("./routes/servicesRoutes");

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Logger (Opcional)
// // app.use(require("./middlewares/logger"));

// // Rotas
// app.use("/auth", authRoutes);            // Importante para o teste de Login
// app.use("/appointments", appointmentRoutes);
// app.use("/clients", clientsRoutes);
// app.use("/services", servicesRoutes);

// // Swagger (se tiver configurado)
// // const { swaggerUi, swaggerSpec } = require("./swagger");
// // app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// module.exports = app;


// Teste04.2

const express = require("express");
const cors = require("cors");
// Imports das Rotas
const { router: appointmentRoutes } = require("./routes/appointmentsRoutes");
const authRoutes = require("./routes/authRoutes"); // <--- TEM QUE TER ISSO
const clientsRoutes = require("./routes/clientsRoutes");
const servicesRoutes = require("./routes/servicesRoutes");

// Swagger
const { swaggerUi, swaggerSpec } = require("./swagger");

const app = express();


const authRoutes = require("./routes/authRoutes");// Teste04.2.3

app.use("/auth", authRoutes);// Teste04.2.3

app.use(cors());
app.use(express.json());

// Logger
app.use(require("./middlewares/logger"));

// Documentação
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// --- AS ROTAS PRECISAM ESTAR AQUI ---
app.use("/auth", authRoutes); // <--- TEM QUE TER ISSO
app.use("/appointments", appointmentRoutes);
app.use("/services", servicesRoutes);
app.use("/clients", clientsRoutes);

// Error Handler
app.use(require("./middlewares/errorHandler"));

module.exports = app;