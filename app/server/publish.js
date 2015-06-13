/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('groups', function (/* args */) {
  return Groups.find();
});