const { connect } = require("mongoose");

module.exports = {
    port: process.env.PORT || 8000,
    db: process.env.MONGODB || 'mongodb://localhost:27017/shop',
    //db: 'mongodb+srv://brand:root@cluster0.dul95.mongodb.net/shop?retryWrites=true&w=majority'
}