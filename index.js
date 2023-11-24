const express = require('express');
const globalErrorHandler = require('./src/utils/globalErrorHandler');
const pathErrorHandler = require('./src/utils/pathErrorHandler');
const applyMiddlewores = require('./src/middlewares');
const dbConnect = require('./src/db/dbConnection');
const app = express();
const port = process.env.PORT || 5000;

applyMiddlewores(app);

app.get('/health', (req, res) => {
    res.send('Flucify server running..');
})


// 404 error handler middleware
app.use(pathErrorHandler);
// Global error handler middleware
app.use(globalErrorHandler);

const main = async () => {
    await dbConnect();
    app.listen(port, () => {
        console.log('Server Running.');
    })
}
main();