const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const productRouter = require("./routers/product");
const userRouter = require("./routers/user");
const cartRouter = require("./routers/cart");
const orderRouter = require("./routers/order");

require("./db");





// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//products routes
app.use("/api", productRouter);

//user routes
app.use("/api", userRouter);

//cart routes
app.use("/api", cartRouter);

//order routes
app.use("/api", orderRouter);


app.listen(5000, (err) => {
	if (err) console.log(err);
	console.log("Server Listening to  port", 5000);
});

