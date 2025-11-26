const Client = require("../models/Client");

exports.getAll = async (_, res) => {
  res.json(await Client.find());
};

exports.create = async (req, res) => {
  try {
    const c = await Client.create(req.body);
    res.status(201).json(c);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
