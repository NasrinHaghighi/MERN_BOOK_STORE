var mongoose = require("mongoose");
var itemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Books"
    },
    quantity: {
        type: Number,
        "default": 0
    }
});
var cartSchema = new mongoose.Schema({
    products: [itemSchema],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    total: {
        type: Number,
        "default": 0
    },
    __v: { type: Number, select: false }
});
module.exports = mongoose.model('Cart', cartSchema);
