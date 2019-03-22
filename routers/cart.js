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






router.post('/cart/update', (req, res) => {

    Cart.findOne({ user: req.body.user })
        .then((result) => {

            //check already product exist
            if (result.cart.length > 0) {
                var check_product = false;

                result.cart.forEach(cart => {
                    if (cart.productid == req.body.productid) {
                        //product exist
                        var quantity = cart.quantity + req.body.quantity;

                        result.cart.pull(cart._id);
                        result.save().then(function () {
                            //add product with updated quantity
                            result.cart.push({ productid: req.body.productid, quantity: quantity });
                            result.save(function (err) {
                                if (err) return handleError(err);
                                res.send('product updated');
                            });

                        }).catch((err) => {
                            console.log(err);
                        });
                        check_product = true;
                    }
                });

                if (!check_product) {

                    result.cart.push({ productid: req.body.productid, quantity: req.body.quantity });
                    result.save(function (err) {
                        if (err) return handleError(err);
                        res.send('product added');
                    });

                }

            }
        });

});

router.get("/cart/items", (req, res) => {

    Cart.find({ user: req.query.user })
        .then((cart) => {
            res.send(cart);
        })
        .catch(err => console.log(err));
})

module.exports = router;