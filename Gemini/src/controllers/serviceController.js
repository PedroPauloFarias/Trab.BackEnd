const Service = require("../models/Service");

exports.getAll = async (req, res, next) => {
  try {
    res.json(await Service.find());
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json(service);
  } catch (err) {
    next(err);
  }
};