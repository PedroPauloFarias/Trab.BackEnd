const errorHandler = (err, req, res, next) => {
    console.error(`Erro: ${err.message}`, err.stack);
  
  
    let statusCode = 500;
    let message = 'Erro interno do servidor';
  
  
    if (err.name === 'ValidationError') {
      statusCode = 400;
      message = err.message;
    } else if (err.name === 'NotFoundError') {
      statusCode = 404;
      message = err.message;
    } else if (err.name === 'UnauthorizedError') {
      statusCode = 401;
      message = err.message;
    }
  
  
    res.status(statusCode).json({
      success: false,
      error: message,
      timestamp: new Date().toISOString()
    });
  };
  
  
  module.exports = errorHandler;  