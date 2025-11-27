const app = require("./app");
const mongoose = require("mongoose");
const path = require("path");

// Aponta corretamente para a pasta config onde está o .env
require("dotenv").config({ path: path.resolve(__dirname, 'config/.env') });

const mongoUri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("MongoDB Conectado com Sucesso!");
    console.log(`Banco: ${process.env.MONGODB_DATABASE}`);
    
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${port}`);
      console.log(`📄 Swagger disponível em http://localhost:${port}/api-docs`);
    });
  })
  .catch((err) => {
    console.error(" Erro ao conectar no MongoDB:", err);
  });