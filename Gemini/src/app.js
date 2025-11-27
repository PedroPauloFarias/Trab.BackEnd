const express = require("express");
const cors = require("cors");

// Imports das Rotas
const { router: appointmentRoutes } = require("./routes/appointmentsRoutes");
const authRoutes = require("./routes/authRoutes");
const clientsRoutes = require("./routes/clientsRoutes");
const servicesRoutes = require("./routes/servicesRoutes");

// Swagger
const { swaggerUi, swaggerSpec } = require("./swagger");

const app = express(); 
app.use(cors());
app.use(express.json());

// Logger Personalizado
app.use(require("./middlewares/logger"));

// Rotas da API
app.use("/auth", authRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/services", servicesRoutes);
app.use("/clients", clientsRoutes);

// Documentação
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Tratamento de Erros
app.use(require("./middlewares/errorHandler"));

module.exports = app; 