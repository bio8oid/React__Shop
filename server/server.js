const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


// var express = require('express');
// var mongodb = require('mongodb');
// var app = express();

// var MongoClient = require('mongodb').MongoClient;
// var db;

// const uri = "mongodb+srv://8bollod8:bollod@clustershopapp-j4vjy.mongodb.net/Shop_App_Archery?retryWrites=true&w=majority"

// // Initialize connection once
// MongoClient.connect(uri, function (err, client) {
//     if (err) throw err;

//     db = client.db("Shop_App_Archery");

//     // Start the application after the database connection is ready
//     // app.listen(3000);
//     // console.log("Listening on port 3000");


// // Reuse database object in request handlers
// // app.get("/", function (req, res) {
//     db.collection("products").find({}, function (res, docs) {
//         docs.each(function (err, doc) {
//             if (doc) {
//                 console.log(doc);
//                 // document.window.getElementById('data').innerHTML = doc;
//             }
//         });
//     });
// // }); 
// });



const uri = "mongodb+srv://8bollod8:bollod@clustershopapp-j4vjy.mongodb.net/Shop_App_Archery?retryWrites=true&w=majority"
MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
    
    assert.equal(null, err);
    const db = client.db("Shop_App_Archery");
    var productsData = db.collection('products').find({});
    
    readProducts =  doc => {
        console.log(doc);
    }
    
   productsData.forEach(readProducts);
    client.close();
});