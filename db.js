const mongoose = require("mongoose");


	//connect to the database 

	mongoose.connect('mongodb://localhost/user_test',{useNewUrlParser: true});

	mongoose.connection
			.once('open',() => {
				console.log("good to go");
			})
			.on('error',(error) => {
				console.warn('Error',error);
			});
