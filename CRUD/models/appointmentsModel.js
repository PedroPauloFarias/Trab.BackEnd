let appointments = [];
let nextId = 1;

function createAppointment(client, service, date) {
  const newAppointment = { id: nextId++, client, service, date };
  appointments.push(newAppointment);
  return newAppointment;
}

function updateAppointment(id, updates) {
  const appointment = appointments.find(a => a.id === id);
  if (!appointment) return null;

  if (updates.client) appointment.client = updates.client;
  if (updates.service) appointment.service = updates.service;
  if (updates.date) appointment.date = updates.date;

  return appointment;
}

function deleteAppointment(id) {
  const index = appointments.findIndex(a => a.id === id);
  if (index === -1) return false;

  appointments.splice(index, 1);
  return true;
}

function resetAppointments() {
  appointments = [];
  nextId = 1;
}

module.exports = {
  appointments,
  createAppointment,
  updateAppointment,
  deleteAppointment,
  resetAppointments
};