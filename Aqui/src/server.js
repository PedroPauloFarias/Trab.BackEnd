// const app = require("./src/app");
// const mongoose = require("mongoose");
// require("dotenv").config();

// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("MongoDB conectado");
//     app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
//   })
//   .catch((err) => console.log(err));


// Teste04

// const app = require("./src/app"); Anterior
// const mongoose = require("mongoose"); Anterior
// require("dotenv").config(); Anterior


const app = require("./app"); // Como está na mesma pasta, é ./app
const mongoose = require("mongoose");
const path = require("path");

// Montando a URL de conexão usando as variáveis do .env
// Adicionei os parametros opcionais (?retryWrites...) no final para garantir estabilidade
// const mongoUri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`;


require("dotenv").config({ path: path.resolve(__dirname, 'config/.env') });

const mongoUri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("✅ MongoDB Conectado com Sucesso!");
    
    // Mostra qual banco foi conectado (sem mostrar a senha)
    console.log(`🔗 Conectado ao banco: ${process.env.MONGODB_DATABASE} no host ${process.env.MONGODB_HOST}`);
    
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`🚀 Servidor rodando na porta ${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Erro ao conectar no MongoDB:", err);
  });