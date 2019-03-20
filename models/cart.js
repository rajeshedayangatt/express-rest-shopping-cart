var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var CartSchema = new Schema({

    user: { type: String, required: true },
    cart: [],
    status: String,
    total: { type: Number, required: true },
    created: { type: Date, default: Date.now() }


});

var cart = mongoose.model("Cart", CartSchema);

module.exports = cart;