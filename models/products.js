const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const ProductSchema = new Schema({

	name : { type : String , required : true},
	price : { type : Number , require : true},
	created : {type : Date , default : Date.now()}

});

const product = mongoose.model("Product",ProductSchema);

module.exports = product;