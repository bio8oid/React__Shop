const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const express = require('express');
// const cors = require('cors');

const app = express();

// app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    console.log(res.json(data))
});

const uri = "mongodb+srv://8bollod8:bollod@clustershopapp-j4vjy.mongodb.net/Shop_App_Archery?retryWrites=true&w=majority"

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {

    assert.equal(null, err);
    const db = client.db("Shop_App_Archery");
    var productsData = db.collection('products').find({});
    
    readProducts = doc => {
        console.log(doc);
        // let data = [];
        // data.push(doc)
        // // console.log(data);
        // return data;
    }
    errorFunc = error => {
        console.log(error);
    }
   const param = productsData.forEach(readProducts, errorFunc);
    // productsData(x => readProducts);
    // console.log(readProducts());
    client.close();
});

// let transfer = (readProducts, param) => {
//     console.log(param)
//     console.log(readProducts)
//     // return readProducts()
// // console.log(data)
// }
// transfer()
// app.listen(3000, function(){
//     console.log('Server is running on port:', 3000);
//   });