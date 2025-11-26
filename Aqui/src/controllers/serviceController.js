const Service = require("../models/Service");

exports.getAll = async (_, res) => {
  res.json(await Service.find());
};

exports.create = async (req, res) => {
  try {
    const s = await Service.create(req.body);
    res.status(201).json(s);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
