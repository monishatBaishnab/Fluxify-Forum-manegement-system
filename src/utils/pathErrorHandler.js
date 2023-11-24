const pathErrorHandler = (req, res, next) => {
    const error = new Error(`${req.originalUrl} not found.`);
    error.status = 404;
    next(error);
};

module.exports = pathErrorHandler;