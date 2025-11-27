const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  client: { type: String, required: true }, // Pode ser referenciado com ObjectId se quiser avançar, mas String atende
  service: { type: String, required: true },
  date: { type: Date, required: true }, // Mudei para Date para melhor validação
});

module.exports = mongoose.model("Appointment", AppointmentSchema);