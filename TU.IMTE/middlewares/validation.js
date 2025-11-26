const Joi = require('joi');


const appointmentSchema = Joi.object({
  client: Joi.string().min(2).max(100).required(),
  service: Joi.string().min(3).max(200).required(),
  date: Joi.date().iso().required()
    .greater('now')
});


const validateAppointment = (req, res, next) => {
  const { error } = appointmentSchema.validate(req.body);
  if (error) {
    const err = new Error(`Dados inválidos: ${error.details[0].message}`);
    err.name = 'ValidationError';
    return next(err);
  }
  next();
};


module.exports = { validateAppointment };