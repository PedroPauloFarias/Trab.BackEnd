const express = require('express');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const appointmentsRoutes = require('./routes/appointments');


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API funcionando! Use /api/v1/appointments' });
});


app.use('/api/v1/appointments', appointmentsRoutes);
app.use(errorHandler);
app.listen(PORT, () => {
 console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;