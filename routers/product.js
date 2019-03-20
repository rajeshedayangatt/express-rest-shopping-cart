
var express = require("express");
var router = express.Router();
var Product = require("../models/products");


router.get("/products", (req, res) => {

    Product.find({}).then((response) => {

        res.status(200).send(response);
    })
        .catch((err) => {
            console.log(err);
        });


});


router.post("/product", (req, res) => {

    var product = new Product({

        name: req.body.name,
        price: req.body.price

    });

    product.save()
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            console.log(err);
        });

});

router.post("/product/:id", (req, res) => {

    Product.findById(req.params.id).then((product) => {

        product.name = req.body.name;
        product.price = req.body.price;

        product.save()
            .then((response) => {
                res.send(response);
            })
            .catch((err) => {
                console.log(err);
            });


    })
        .catch((err) => {

            console.log(err);

        });


});


module.exports = router;