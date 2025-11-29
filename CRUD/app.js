const express = require("express");
const app = express();

app.use(express.json());

let appointments = [];
let nextId = 1;

app.get('/appointments', (req, res) => {
  res.status(200).json(appointments);
});

app.post('/appointments', (req, res) => {
  const { client, service, date } = req.body;

  if (!client || !service || !date) {
    return res.status(400).json({
      error: "Todos os campos obrigatórios devem ser preenchidos (client, service, date)."
    });
  }

  const newAppointment = {
    id: nextId++,
    client,
    service,
    date
  };

  appointments.push(newAppointment);

  res.status(201).json(newAppointment);
});

app.put('/appointments/:id', (req, res) => {
  const id = Number(req.params.id);
  const { client, service, date } = req.body;

  const appointment = appointments.find(a => a.id === id);

  if (!appointment) {
    return res.status(404).json({
      error: "Agendamento não encontrado."
    });
  }

  if (client) appointment.client = client;
  if (service) appointment.service = service;
  if (date) appointment.date = date;

  res.status(200).json(appointment);
});

app.delete('/appointments/:id', (req, res) => {
  const id = Number(req.params.id);

  const index = appointments.findIndex(a => a.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Agendamento não encontrado."
    });
  }

  appointments.splice(index, 1);

  res.status(204).send();
});

app.delete('/appointments/reset', (req, res) => {
  appointments = [];
  nextId = 1;
  res.status(204).send();
});

module.exports = app;