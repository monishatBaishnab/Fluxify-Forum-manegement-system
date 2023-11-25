const express = require('express');
const globalErrorHandler = require('./src/utils/globalErrorHandler');
const pathErrorHandler = require('./src/utils/pathErrorHandler');
const applyMiddlewores = require('./src/middlewares');
const dbConnect = require('./src/db/dbConnection');

const userRoute = require('./src/routes/users/users');
const authRoute = require('./src/routes/auth/index');
const postRoute = require('./src/routes/posts/posts');
const commentRoute = require('./src/routes/comments/comments');
const app = express();
const port = process.env.PORT || 5000;

applyMiddlewores(app);

app.use(authRoute);
app.use(userRoute);
app.use(postRoute);
app.use(commentRoute);

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