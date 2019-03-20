const mongoose = require("mongoose");


//connect to the database before test
before(function(done) {


	mongoose.connect('mongodb://localhost/user_test',{useNewUrlParser: true});

	mongoose.connection
			.once('open',() => {
				console.log("good to go"); done();
			})
			.on('error',(error) => {
				console.warn('Error',error);
			});
});

//Drop all characters collection before each test

beforeEach(function(done) {
	mongoose.connection.collections.mariochars.drop(() => {
		done();
	});
});