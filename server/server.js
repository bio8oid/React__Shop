const express = require("express");
const cors = require('cors');
const config = require('./config');
var mongoose = require("mongoose");
const helmet = require('helmet');
const path = require('path');

const app = express();
const router = express.Router();

const Product = require('./productModel');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/', router);
app.use(helmet());

app.use(express.static(path.join(__dirname, '/../build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
});

mongoose.connect(config.DB, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

connection.on('error', (err) => console.log('Error ' + err));

router.route("/").get(function (err, res) {
    Product.find({}, function (err, result) {
        if (err) {
            console.log('err:', err)
        } else {
            // console.log(result)
            res.send(result);
        };
    });
});

app.listen(config.PORT, function () {
    console.log("Server is running on Port: " + config.PORT);
});