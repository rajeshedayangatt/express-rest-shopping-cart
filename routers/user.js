var express = require("express");
var router = express.Router();
var User = require("../models/users");



router.get("/users", (req, res) => {

    User.find({}).then((response) => {

        res.status(200).send(response);
    })
        .catch((err) => {
            console.log(err);
        });


});



router.post("/user/register", (req, res) => {

    var user = new User({

        name: req.body.name,
        email: req.body.email,
        password: req.body.password


    });

    user.save()
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            console.log(err);
        });

});




router.post("/user/login", (req, res) => {

    User.find({
        email: req.body.email,
        password: req.body.password
    }).then((user) => {

        if (user.length > 0) {

            res.status(200).send({ message: "successfully logined", data: user });

        }
        res.status(200).send({ message: "invalid credentials", data: [] });


    }).catch((err) => {

        console.log(err);

    });


});

module.exports = router;