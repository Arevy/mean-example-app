const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const config = require('./config.json');
const UserController = require('./controllers/UserController');
const mongoose = require('mongoose');
const app = express();

let dbConnString = 'mongodb://' + config.dbHost + ':' + config.dbPort + '/' + config.dbName;

mongoose.connect(dbConnString,  { useNewUrlParser: true })
        .then(() => console.log('connected to db'))
        .catch((err) => console.log('could not connect to db', err));
//Set Port
const port = process.env.PORT || config.appPort;
app.set('port', port);

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
  

// TODO add db connection call
// app.set(config.secretKey, config.secretValue);

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));
// Send all other requests to the Angular app
app.get('/webapp', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// set routes handler
app.use('/api/users', UserController);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));