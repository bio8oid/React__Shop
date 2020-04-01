// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');


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

// var dataProducts = [];

// const uri = "mongodb+srv://8bollod8:bollod@clustershopapp-j4vjy.mongodb.net/Shop_App_Archery?retryWrites=true&w=majority"
// MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
    
//     assert.equal(null, err);
//     const db = client.db("Shop_App_Archery");
//     var productsData = db.collection('products').find({});
    
//     // readProducts =  doc => {
//     //     console.log(doc);
//     // }
//     exports.readProducts = async (req, res) => {

//         try {
//             // res.json(await Post.find());
//             // console.log(res)
//             // console.log(req)
//             dataProducts.push(req)
//             // console.log(dataProducts)
//             return dataProducts
//         } catch (err) {
//             console.log(err)
//         }  
//         };
        
//         productsData.forEach(this.readProducts);
//         client.close();
//     })

// console.log(this.readProducts)



// ---------------------------------------------------------------------------
// {
//     "id": 1,
//         "tag": "risers",
//             "title": "W&W Nano Max Riser",
//                 "desc": "Developed using WIN&WIN's carbon technology that absorbs shock and minimizes movemnet to make shooting more accurate and stable.",
//                     "price": 595,
//                         "img": "http://www.cbarchery.co.uk/WebRoot/StoreLGB/Shops/62059681/54F4/6190/6A88/BC9A/99E9/C0A8/2AB8/4593/WW_WIAWIS_RISER_wht_grn.jpg"
// },

// const productSchema = require('../src/actions/productModel');
// const getProducts = require('../src/actions/actions');


// var mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const express = require("express");
// const app = express();
// var port = 4000;
// const router = express.Router();
// var uri = "mongodb+srv://8bollod8:bollod@clustershopapp-j4vjy.mongodb.net/Shop_App_Archery?retryWrites=true&w=majority";

// // const cors = require('cors');
// // const helmet = require('helmet');

// // const getProducts = async (req, res) => {

// //     try {
// //         res.status(200).json(await Product.find());
// //     } catch (err) {
// //         res.status(500).json(err);
// //     }

// // };


// // import routes
// // const postRoutes = require('./routes/post.routes');

// // app.use(cors());
// // app.use(express.urlencoded({ extended: true }));
// // app.use(express.json());
// app.use('/', getProducts);
// // app.use(helmet());


// var productSchema = new Schema({
//     id: { type: 'String' },
//     tag: { type: 'String' },
//     title: { type: 'String' },
//     desc: { type: 'String' },
//     price: { type: 'String' },
//     desc: { type: 'String' },
// });


// // router.route('/').get(getProducts);

// var Product = mongoose.model('Product', productSchema);

// mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

// const connection = mongoose.connection;

// // const loadTestData = async (data) => {

// //     // const data = [
// //     //     {
// //     //         id: '21sd42sdsaaf',
// //     //         title: 'How do I get funding for my startup?',
// //     //         desc: ' Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don\'t have a lot to offer. But don\'t worry.</b> There is something you can do! I\'ll teach you everything you need to know. Are you ready?',
// //     //     }
// //     // ];

// //     try {
// //         let counter = await Product.countDocuments();
// //         if (counter === 0) {
// //             console.log('No Products. Loading data...');
// //             await Product.create(data);
// //             console.log('Test data has been successfully loaded');
// //         }
// //     } catch (err) {
// //         console.log('Couldn\'t load test data', err);
// //     }

// // };

// app.use("/", router);


// connection.once("open", function () {
//     console.log("MongoDB database connection established successfully");

//     // app.get("/home", (req, res) => {
//     Product.find({}, function (err, result) {
//         if (err) {
//             res.send(err);
//         } else {
//             // console.log('res:', res)
//             console.log('result:', result)
//             // res.send(result);
//             // console.log('result:', result)
//             // console.log('result:', res)
//         }
//     });
// // });

// });


// // app.use("/", router);

// // router.route("/").get(function (req, res) {
// //     Product.find({}, function (err, result) {
// //         if (err) {
// //             res.send(err);
// //         } else {
// //             // console.log('res:', res)
// //             // console.log('result:', result)
// //             res.send(result);
// //             // console.log('result:', result)
// //             // console.log('result:', res)
// //         }
// //     });
// // });

// app.listen(port, function () {
//     console.log("Server is running on Port: " + port);
// });


// // ---------------------------------------------------------------------------
// // PostController
// const Post = require('../models/post.model');

// exports.getPosts = async (req, res) => {

//     try {
//         res.status(200).json(await Post.find());
//     } catch (err) {
//         res.status(500).json(err);
//     }

// };

// // Post 
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const Post = new Schema({
//     id: { type: 'String', required: true },
//     title: { type: 'String', required: true },
//     content: { type: 'String', required: true },
// });

// module.exports = mongoose.model('Post', Post);



// const express = require('express');
// const router = express.Router();

// const PostController = require('../controllers/post.controller');

// // get all posts
// router.route('/posts').get(PostController.getPosts);
// module.exports = router;


// module.exports = {
//     PORT: 8000,
//     // DB: 'mongodb://127.0.0.1/mernapp',
//     DB: 'mongodb://localhost:27017/mernapp',
//     DB: process.env.DB,
// };



// const express = require('express');
// const cors = require('cors');
// const config = require('./config');
// const mongoose = require('mongoose');
// const loadTestData = require('./testData');
// const helmet = require('helmet');

// const app = express();

// // import routes
// const postRoutes = require('./routes/post.routes');

// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use('/api', postRoutes);
// app.use(helmet());

// // connects our back end code with the database
// mongoose.connect(config.DB, { useNewUrlParser: true });
// let db = mongoose.connection;

// db.once('open', () => {
//     console.log('Connected to the database');
//     loadTestData();
// });
// db.on('error', (err) => console.log('Error ' + err));

// app.listen(config.PORT, function () {
//     console.log('Server is running on Port:', config.PORT);
// });



// const Post = require('./models/post.model');

// const loadTestData = async () => {

//     const data = [
//         {
//             id: '21sd42sdsaaf',
//             title: 'How do I get funding for my startup?',
//             content: ' Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don\'t have a lot to offer. But don\'t worry.</b> There is something you can do! I\'ll teach you everything you need to know. Are you ready?',
//         },
//         {
//             id: '543fg43gzsd4',
//             title: '10 Brilliant Small Bussiness Ideas',
//             content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
//         }
//     ];

//     try {
//         let counter = await Post.countDocuments();
//         if (counter === 0) {
//             console.log('No posts. Loading data...');
//             await Post.create(data);
//             console.log('Test data has been successfully loaded');
//         }
//     } catch (err) {
//         console.log('Couldn\'t load test data', err);
//     }

// };

// module.exports = loadTestData;




/////////////////////////////////////////////////////////


var mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const express = require("express");
const app = express();
var port = 4000;
// var kennel = require("./model.js");

// const loadDefaultData = require('./defaultData');
const Product = require('./productModel');


const router = express.Router();
var uri = "mongodb+srv://8bollod8:bollod@clustershopapp-j4vjy.mongodb.net/Shop_App_Archery?retryWrites=true&w=majority";

const cors = require('cors');
const helmet = require('helmet');

app.use(cors());
app.use(helmet());

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function (err,res) {
    console.log("MongoDB database connection established successfully");
    // loadDefaultData();
    // console.log('loadDefaultData:', loadDefaultData().resolved)
    // res.send('kazik');
    // // res.send(loadDefaultData());

//    app.get(function (err, res) {
//     // Product.find({}, function (err, result) {
//     //     if (err) {
//     //         res.send(err);
//     //         loadDefaultData();
//     //     } else {
//     //         // console.log('result:', result)
//     //         res.send(result);
//     //     }
//     // });
//         if (err) {
//             res.send(err);
//         } else {
//             // loadDefaultData();

//             // console.log('result:', loadDefaultData())
//             // console.log('result:', loadDefaultData)
//             // console.log('result:', result)
//             res.send(loadDefaultData());
//             // res.send();
//         }
// });

});

// var productSchema = new Schema({
//     id: { type: 'String' },
//     tag: { type: 'String' },
//     title: { type: 'String' },
//     desc: { type: 'String' },
//     price: { type: 'String' },
//     desc: { type: 'String' },
// });

// var Product = mongoose.model('Product', productSchema);


app.use("/", router);

router.route("/").get(function (err, res) {
    Product.find({}, function (err, result) {
        if (err) {
            res.send(err);
            loadDefaultData();
        } else {
            // console.log('result:', result)
            res.send(result);
        }
    });
        // if (err) {
        //     res.send(err);
        // } else {
        //     // loadDefaultData();

        //     // console.log('result:', result)
        //     res.send(loadDefaultData());
        //     // res.send();
        // }
});

app.listen(port, function () {
    console.log("Server is running on Port: " + port);
});