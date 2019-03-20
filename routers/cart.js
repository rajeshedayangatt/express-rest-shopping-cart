var express = require("express");
var router = express.Router();
var Cart = require("../models/cart");



router.post('/cart/save', (req, res) => {


    var cart = new Cart({

        user: req.body.user,
        cart: req.body.cart,
        status: req.body.status,
        tax: req.body.tax,
        subtotal: req.body.subtotal,
        total: req.body.total,

    });

    cart.save()
        .then((cart) => {

            res.status(200).send(cart);

        })
        .catch((err) => {

            console.log(err);
        });

});


module.exports = router;