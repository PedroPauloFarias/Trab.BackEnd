const Appointment = require("../models/Appointment");

exports.getAll = async (req, res, next) => {
  try {
    const data = await Appointment.find();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const item = await Appointment.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Não encontrado" });
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { client, service, date } = req.body;

    if (!client || !service || !date) {
        return res.status(400).json({ error: "Campos obrigatórios faltando" });
    }

    const appointment = await Appointment.create(req.body);
    res.status(201).json(appointment);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const item = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: "Não encontrado" });
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const item = await Appointment.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: "Não encontrado" });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};