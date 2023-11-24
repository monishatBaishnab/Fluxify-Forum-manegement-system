const globalErrorHandler = (err, req, res, next) => {
    if (err.message) {
        res.status(500).send(`Internal server error: ${err.message}`);
    } else {
        res.status(500).send('Internal server error. An unexpected error occurred.');
    }
}

module.exports = globalErrorHandler;