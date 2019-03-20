const assert = require("assert");
const MarioChar = require("../models/mariochar");




//Describe tests
describe("Saving records",function() {

	//create tests
	it("save record to database",function(done) {
		var char = new MarioChar({
			name : "Mario"
		});

		char.save()
			.then(() => {

				assert(char.isNew === false);
				done();

			});

	});


});