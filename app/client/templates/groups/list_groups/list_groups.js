/*****************************************************************************/
/* ListGroups: Event Handlers */
/*****************************************************************************/
Template.ListGroups.events({
});

/*****************************************************************************/
/* ListGroups: Helpers */
/*****************************************************************************/
Template.ListGroups.helpers({
	groups: function() {
    	return Groups.find();
  	},

  	beforeRemove: function () {
  		return function (collection, id) {
  			var doc = collection.findOne(id);
  			if (confirm('Really delete group: "' + doc.name + " " + doc.about + '"?')) {
  				this.remove();
  				// Router.go('carsList');
  			}
  		};
  	}
});

/*****************************************************************************/
/* ListGroups: Lifecycle Hooks */
/*****************************************************************************/
Template.ListGroups.created = function () {
};

Template.ListGroups.rendered = function () {
};

Template.ListGroups.destroyed = function () {
};
