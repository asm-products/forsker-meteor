Template.MasterLayout.helpers({

});

Template.MasterLayout.events({
	"click #menu-toggle": function (event, template) {
		event.preventDefault();
		$("#wrapper").toggleClass("toggled");
	}
});

