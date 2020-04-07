const express = require("express");
const cors = require('cors');
const config = require('./config');
var mongoose = require("mongoose");
const helmet = require('helmet');
const path = require('path');

const app = express();

// import routes
const router = require('./routes/product.route');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', router);
app.use(helmet());

// send static files to client
app.use(express.static(path.join(__dirname, '/../build')));

// connect to database
mongoose.connect(config.DB, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

connection.on('error', (err) => console.log('Error ' + err));

// backup API request handler
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
});

app.listen(config.PORT, function () {
    console.log("Server is running on Port: " + config.PORT);
});