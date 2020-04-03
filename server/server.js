var mongoose = require("mongoose");
const express = require("express");
const app = express();
var port = 4000;
const router = express.Router();
var uri = "mongodb+srv://8bollod8:bollod@clustershopapp-j4vjy.mongodb.net/Shop_App_Archery?retryWrites=true&w=majority";
const Product = require('./productModel');

const cors = require('cors');
const helmet = require('helmet');

app.use(cors());
app.use(helmet());
app.use('/', router);

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

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
            res.send(result);
        }
    });
});

app.listen(port, function () {
    console.log("Server is running on Port: " + port);
});