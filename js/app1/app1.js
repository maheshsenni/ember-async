App.Todo = Ember.Object.extend({
	description: '',
	isCompleted: false,
	status: function () {
		return this.get('isCompleted') ? 'Complete' : 'Incomplete';
	}.property('isCompleted')
});