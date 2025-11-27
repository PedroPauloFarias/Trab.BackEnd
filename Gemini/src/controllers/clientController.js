const Client = require("../models/Client");

exports.getAll = async (req, res, next) => {
  try {
    res.json(await Client.find());
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (err) {
    next(err);
  }
};