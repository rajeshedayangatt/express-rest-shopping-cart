var mongoose = require("mongoose");
var Schema = mongoose.Schema;



const OrderItemSchema = new Schema({

    productid: String,
    productname: String,
    quantity: Number,
    price: Number

});

var OrderSchema = new Schema({

    user: { type: String, required: true },
    items: [OrderItemSchema],
    status: String,
    payment_status: String,
    tax: { type: Number, required: true },
    subtotal: { type: Number, required: true },
    total: { type: Number, required: true },
    created: { type: Date, default: Date.now() }


});

var order = mongoose.model("Order", OrderSchema);

module.exports = order;