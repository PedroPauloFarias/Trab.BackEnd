const app = require("./src/app");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB conectado");
    app.listen(3000, () => console.log("Servidor rodando"));
  })
  .catch(err => console.log(err));
