require('dotenv').config();
const http = require('http');
const app = require('./src/app');
const dbConnect = require('./src/db/dbConnection');
const server = http.createServer(app);
const port = process.env.PORT || 5000;

const main = async () => {
    await dbConnect();
    app.listen(port, () => {
        console.log('Server Running.');
    })
}
main();