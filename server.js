const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const uri = "mongodb+srv://8bollod8:bollod@clustershopapp-j4vjy.mongodb.net/Shop_App_Archery?retryWrites=true&w=majority"

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {

    assert.equal(null, err);
    const db = client.db("Shop_App_Archery");
    var productsData = db.collection('products').find({});
    
    readProducts = doc => {
        // console.log(doc);
        return doc;
    }
    errorFunc = error => {
        console.log(error);
    }
    productsData.forEach(readProducts, errorFunc);
    // console.log(readProducts());
    client.close();
});

// app.listen(3000, function(){
//     console.log('Server is running on port:', 3000);
//   });