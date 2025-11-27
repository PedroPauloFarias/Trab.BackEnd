const express = require("express");
const cors = require("cors");
const { router: appointmentRoutes } = require("./routes/appointmentsRoutes");

const app = express(); // CRIANDO O APP PRIMEIRO

app.use(cors());
app.use(express.json());

// Logger
app.use(require("./middlewares/logger"));

// Rotas
app.use("/appointments", appointmentRoutes);

// Swagger, se tiver
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Error Handler
app.use(require("./middlewares/errorHandler"));

module.exports = app;


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