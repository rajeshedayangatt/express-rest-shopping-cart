var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;


var CartSchema = new Schema({

    user: { type: String, required: true },
    cart: [{ ObjectId }],
    status: String,
    tax: { type: Number, required: true },
    subtotal: { type: Number, required: true },
    total: { type: Number, required: true },
    created: { type: Date, default: Date.now() }


});

var cart = mongoose.model("Cart", CartSchema);

module.exports = cart;