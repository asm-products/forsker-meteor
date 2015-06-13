Positions = new Mongo.Collection('positions');


if (Meteor.isServer) {
  Positions.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });

  // Positions.deny({
  //   insert: function (userId, doc) {
  //     return true;
  //   },

  //   update: function (userId, doc, fieldNames, modifier) {
  //     return true;
  //   },

  //   remove: function (userId, doc) {
  //     return true;
  //   }
  // });
}

Positions.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 100
  },
  describtion: {
    type: String,
    max: 1500
  },
  keywords: {
    type: [String],
    label: "Research Keywords",
    maxCount: 8
  }
}));