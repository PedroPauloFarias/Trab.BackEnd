const express = require('express');
const router = express.Router();
const { validateAppointment } = require('../middlewares/validation');


let appointments = [];
let nextId = 1;




router.get('/', (req, res) => {
  res.status(200).json(appointments);
});


router.get('/:id', (req, res, next) => {
  const appointment = appointments.find(a => a.id === parseInt(req.params.id));
  if (!appointment) {
    const err = new Error('Agendamento não encontrado');
    err.name = 'NotFoundError';
    return next(err);
  }
  res.status(200).json(appointment);
});


router.post('/', validateAppointment, (req, res) => {
  const newAppointment = { id: nextId++, ...req.body };
  appointments.push(newAppointment);
  res.status(201).json(newAppointment);
});


router.put('/:id', validateAppointment, (req, res, next) => {
  const appointment = appointments.find(a => a.id === parseInt(req.params.id));
  if (!appointment) {
    const err = new Error('Agendamento não encontrado');
    err.name = 'NotFoundError';
    return next(err);
  }
  Object.assign(appointment, req.body);
  res.status(200).json(appointment);
});


router.delete('/:id', (req, res, next) => {
  const index = appointments.findIndex(a => a.id === parseInt(req.params.id));
  if (index === -1) {
    const err = new Error('Agendamento não encontrado');
    err.name = 'NotFoundError';
    return next(err);
  }
  appointments.splice(index, 1);
  res.status(204).send();
});


router.delete('/reset', (req, res) => {
  appointments = [];
  nextId = 1;
  res.status(200).json({ message: 'Dados resetados' });
});


module.exports = router;