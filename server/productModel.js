var mongoose = require("mongoose");
const Schema = mongoose.Schema;


var Product = new Schema({
    id: { type: 'String' },
    tag: { type: 'String' },
    title: { type: 'String' },
    desc: { type: 'String' },
    price: { type: 'String' },
    desc: { type: 'String' },
});

module.exports = mongoose.model('Product', Product);