const express = require("express");
const app = express();

app.use(express.json());

// Swagger configs
const { swaggerUi, swaggerSpec } = require("./swagger");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rotas
const clientsRoutes = require("./routes/clients");
const servicesRoutes = require("./routes/services");
const appointmentsRoutes = require("./routes/appointments");

app.use(clientsRoutes);
app.use(servicesRoutes);
app.use(appointmentsRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000/api-docs");
});

