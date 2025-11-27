const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});

// CORREÇÃO CRÍTICA: Não passamos 'next' como parâmetro aqui, pois a função é async
UserSchema.pre("save", async function () {
  // Se a senha não foi alterada, não faz nada
  if (!this.isModified("password")) return;

  // Criptografa a senha
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("User", UserSchema);