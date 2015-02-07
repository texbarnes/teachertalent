import Ember from 'ember';

var TeachersRoute = Ember.Route.extend({
	model: function(){
		return this.store.find('teachers');
	}
});

export default TeachersRoute;
