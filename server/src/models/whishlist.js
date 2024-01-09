//const mongoose =require ('mongoose')
var wishitemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Books",
    },
});
var whishSchema = new mongoose.Schema({
    products: [wishitemSchema],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    __v: { type: Number, select: false },
});
