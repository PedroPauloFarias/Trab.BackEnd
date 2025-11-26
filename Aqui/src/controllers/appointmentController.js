const Appointment = require("../models/Appointment");

exports.create = async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(201).json(appointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAll = async (_, res) => {
  const data = await Appointment.find();
  res.json(data);
};

exports.getOne = async (req, res) => {
  const item = await Appointment.findById(req.params.id);
  if (!item) return res.status(404).json({ error: "Não encontrado" });
  res.json(item);
};

exports.update = async (req, res) => {
  const item = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};

exports.remove = async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.status(204).send();
};
