var mongoose = require("mongoose");
const Schema = mongoose.Schema;

exports.productSchema = new Schema({
    id: { type: 'String' },
    tag: { type: 'String' },
    title: { type: 'String' },
    desc: { type: 'String' },
    price: { type: 'String' },
    img: { type: 'String' },
});