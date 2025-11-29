const model = require("../models/appointmentsModel");

exports.getAll = (req, res) => {
  res.status(200).json(model.appointments);
};

exports.create = (req, res) => {
  const { client, service, date } = req.body;

  if (!client || !service || !date) {
    return res.status(400).json({
      error: "Todos os campos obrigatórios devem ser preenchidos (client, service, date)."
    });
  }

  const newAppointment = model.createAppointment(client, service, date);

  res.status(201).json(newAppointment);
};

exports.update = (req, res) => {
  const id = Number(req.params.id);
  const updates = req.body;

  const updated = model.updateAppointment(id, updates);

  if (!updated) {
    return res.status(404).json({ error: "Agendamento não encontrado." });
  }

  res.status(200).json(updated);
};

exports.remove = (req, res) => {
  const id = Number(req.params.id);

  const removed = model.deleteAppointment(id);

  if (!removed) {
    return res.status(404).json({ error: "Agendamento não encontrado." });
  }

  res.status(204).send();
};

exports.reset = (req, res) => {
  model.resetAppointments();
  res.status(204).send();
};