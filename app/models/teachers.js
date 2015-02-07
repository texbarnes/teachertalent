import DS from 'ember-data';




var TeacherModel = DS.Model.extend({
  'firstName': DS.attr('string'),
  'lastName': DS.attr('string'),
  'email': DS.attr('string')
});

TeacherModel.reopenClass({
	FIXTURES : [
		{ 
			id: 1, 
			firstName: 'Susan', 
			lastName: 'Boyle', 
			email: 'susan.boyle@example.com' 
		},
		{ 
			id: 2, 
			firstName: 'Mrs.', 
			lastName: 'Frizzle', 
			email: 'mrs.frizzle@magicschoolbus.com' 
		}
	]
});

export default TeacherModel;
