const express = require('express');
const globalErrorHandler = require('./utils/globalErrorHandler');
const pathErrorHandler = require('./utils/pathErrorHandler');
const applyMiddlewores = require('./middlewares');

const userRoute = require('./routes/users/users');
const authRoute = require('./routes/auth/index');
const postRoute = require('./routes/posts/posts');
const commentRoute = require('./routes/comments/comments');
const annoucementRoute = require('./routes/annoucements/annoucements')
const adminStateRoute = require('./routes/adminState/adminState')
const postTagRoute = require('./routes/postTag/postTag')
const adminRoute = require('./routes/admin/admin')
const stripeRoute = require('./routes/stripe/stripe')
const app = express();

applyMiddlewores(app);

app.use(authRoute);
app.use(userRoute);
app.use(postRoute);
app.use(commentRoute);
app.use(annoucementRoute);
app.use(adminStateRoute);
app.use(postTagRoute);
app.use(adminRoute);
app.use(stripeRoute);

app.get('/health', (req, res) => {
    res.send('Flucify server running..');
})



// 404 error handler middleware
app.use(pathErrorHandler);
// Global error handler middleware
app.use(globalErrorHandler);

module.exports = app;