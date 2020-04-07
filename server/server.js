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
app.use('/api', router);
app.use(helmet());

// send static files to client
app.use(express.static(path.join(__dirname, '/../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/..client/build/index.html'));
});

// connect to database
mongoose.connect(config.DB, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

connection.on('error', (err) => console.log('Error ' + err));

app.listen(config.PORT, function () {
    console.log("Server is running on Port: " + config.PORT);
});