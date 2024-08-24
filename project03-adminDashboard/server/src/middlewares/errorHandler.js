import config from '../../config/config.js'

function errorHandler(err, _, res, next){
    console.log("🚀 ~ errorHandler ~ err.stack:", err.stack);
     
    const statusCode = err.statusCode || 500;
    const isDevelopment = config.nodeEnv === 'development';

    res.status(statusCode).json({
        status: 'error',
        statusCode: statusCode,
        message: err.message || 'Internal Server Error',
        // Send stack trace only in development mode
        stack: isDevelopment ? err.stack : undefined,
    });

    next();
}

export default errorHandler;