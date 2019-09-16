const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://8bollod8:bollod@clustershopapp-j4vjy.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const ProductsSchema = new mongoose.Schema({
  
    id: { type: String },
    tag: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, default: 0 },
    img: { type: String, required: true },
    admin: Boolean,
    created_at: Date,
    updated_at: Date
});

const Products = mongoose.model('Products', ProductsSchema);

const query = Products.find({});
const promise = query.exec();
promise.then(function(records) {
    console.log('Actual database records are ' + records);
});
promise.catch(function(reason) {
    console.log('Something went wrong: ', reason);
});

app.get('/', async (req, res) => {
    const prods = await Products.find({});
  
    try {
      res.send(prods);
    } catch (err) {
      res.status(500).send(err);
    }
  });


app.listen(8000, () => { console.log('Server is running...') });