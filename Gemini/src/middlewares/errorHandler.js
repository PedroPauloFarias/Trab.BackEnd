const errorHandler = (err, req, res, next) => {
  console.error(`Erro: ${err.message}`);

  let statusCode = 500;
  let message = 'Erro interno do servidor';

  // Personalize códigos de status baseados no tipo de erro
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = 'Dados inválidos';
  } else if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
    statusCode = 401;
    message = 'Token inválido ou expirado';
  } // Adicione mais conforme necessário

  // Envie a resposta e finalize a requisição
  res.status(statusCode).json({ error: message });
};

module.exports = errorHandler;