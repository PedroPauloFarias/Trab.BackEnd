const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Rotas
const appointmentRoutes = require("./routes/appointmentsRoutes");
app.use("/api/v1/appointments", appointmentRoutes);

module.exports = app;
