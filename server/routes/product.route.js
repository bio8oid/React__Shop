const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

router.route("/").get(function (err, res) {
    Product.find({}, function (err, result) {
        if (err) {
            console.log('err:', err)
        } else {
            res.send(result);
        };
    });
});

module.exports = router;