window.App.Router.map(function () {
	this.resource('todos', { 'path': '/todos' });
	this.resource('reminders', { 'path': '/reminders' });
});

App.TodosRoute = Ember.Route.extend({
	model: function () {
		var todos = [];
		todos.push(App.Todo.create({
			description: 'Complete app',
			isCompleted: true
		}));
		todos.push(App.Todo.create({
			description: 'Deploy latest code'
		}));
		return {'items': todos};
	}
});

App.RemindersRoute = Ember.Route.extend({
	beforeModel: function () {
		if (!App.Reminders) {
			console.warn('Reminders model not found!');
			Ember.$.getScript('/js/dist/app2-templates.js')
			return Ember.$.getScript('/js/dist/app2.js');
		}
	},
	model: function () {
		var reminders = [];
		reminders.push(App.Reminder.create({
			description: 'Get milk',
			dueDate: 'Today'
		}));
		reminders.push(App.Reminder.create({
			description: 'Feed the cat',
			dueDate: 'Tomorrow'
		}));
		return {'items': reminders};
	}
});