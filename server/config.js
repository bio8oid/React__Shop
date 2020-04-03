const functions = require('firebase-functions');

module.exports = {
    PORT: process.env.PORT || 8000,
    // DB: process.env.DB,
    // DB: "mongodb+srv://8bollod8:bollod@clustershopapp-j4vjy.mongodb.net/Shop_App_Archery?retryWrites=true&w=majority",
    DB: `mongodb+srv://8${functions.config().someservice.key}8:${functions.config().someservice.id}@clustershopapp-j4vjy.mongodb.net/Shop_App_Archery?retryWrites=true&w=majority`
};