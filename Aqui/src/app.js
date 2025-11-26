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
