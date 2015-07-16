module.exports = function(app) {

	app.models.Person.create([
		{firstName: "Homer", lastName: "Simpson"},
		{firstName: "John", lastName: "Smith"},
	]);

}