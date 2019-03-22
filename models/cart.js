var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;



const CartItemSchema = new Schema({

    productid: String,
    quantity: Number

});

var CartSchema = new Schema({

    user: { type: String, required: true },
    cart: [CartItemSchema],
    status: String,
    tax: { type: Number, required: true },
    subtotal: { type: Number, required: true },
    total: { type: Number, required: true },
    created: { type: Date, default: Date.now() }


});

var cart = mongoose.model("Cart", CartSchema);

module.exports = cart;