/**
* Meteor.publish('items', function (param1, param2) {
*  this.ready();
* });
*/


Meteor.publish('groups', function (userId) {
// check(roomId, String);
// return Groups.find({createdBy: userId});

return Groups.find();

//   return Groups.find({}, {fields: {
//   "name": 1,
//   "about": 1
// }});
});

Meteor.publish('positions', function (/* args */) {
  return Positions.find();
});


Meteor.publish("allUsernames", function () {
  return Meteor.users.find({}, {fields: {
    "createdAt": 1,
    // "services.github.username": 1
  }});
});