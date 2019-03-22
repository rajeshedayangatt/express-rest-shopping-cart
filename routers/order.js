var express = require("express");
var router = express.Router();
var Order = require("../models/order");
var Cart = require("../models/cart");



router.post("/order/save", (req, res) => {

    //select all cart items
    Cart.find({ user: req.body.user })
        .then((result) => {

            if (result) {

                result.for

                res.send(result);

            }

        })
        .catch((err) => {


            console.log(err);


        });

});


module.exports = router;